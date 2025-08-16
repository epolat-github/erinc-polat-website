// Ring.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useGLTF, MeshRefractionMaterial } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import * as THREE from "three";

const STONE_TOKENS = [
    "diamond",
    "stone",
    "gem",
    "tas",
    "taş",
    "pirlanta",
    "pırlanta",
    "zirkon",
    "round",
    "pear",
    "marquise",
    "oval",
    "princess",
    "emerald",
    "baget",
    "baguette",
];

function nameHaystack(mesh) {
    const parts = [];
    parts.push(mesh.name || "");
    parts.push(mesh.material?.name || "");
    let p = mesh.parent;
    while (p) {
        parts.push(p.name || "");
        p = p.parent;
    }
    return parts.join(" ").toLowerCase();
}
function isStoneMesh(mesh) {
    const hay = nameHaystack(mesh);
    return STONE_TOKENS.some((t) => hay.includes(t));
}

// basit RNG (procedural roughness noise için)
function mulberry32(a) {
    return function () {
        let t = (a += 0x6d2b79f5);
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

// UV varsa kullanılacak küçük bir roughness-noise DataTexture üret
function makeRoughnessNoise({
    size = 64,
    bias = 0.9, // genel parlaklık (1'e yakın tutuldu, polished)
    contrast = 0.08, // mikro varyasyon
    repeat = 8,
    seed = 1337,
} = {}) {
    const rng = mulberry32(seed);
    const len = size * size;
    const data = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        let v = bias + (rng() - 0.5) * contrast * 2;
        v = Math.min(1, Math.max(0, v));
        data[i] = Math.round(v * 255);
    }
    const format = THREE.RedFormat ?? THREE.LuminanceFormat;
    const tex = new THREE.DataTexture(data, size, size, format);
    if ("colorSpace" in tex) tex.colorSpace = THREE.NoColorSpace;
    else tex.encoding = THREE.LinearEncoding;
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(repeat, repeat);
    tex.needsUpdate = true;
    return tex;
}

export default function Ring({ url = "/halka.glb", ...props }) {
    const { scene: gltfScene } = useGLTF(url);

    // Env hazır mı? (race fix)
    const { scene: rootScene, invalidate } = useThree();
    const [envReady, setEnvReady] = useState(!!rootScene.environment);
    useFrame(() => {
        if (!envReady && rootScene.environment) {
            setEnvReady(true);
            invalidate();
        }
    });
    const envMap = envReady ? rootScene.environment : null;

    // Tüm meshleri topla
    const meshes = useMemo(() => {
        const list = [];
        gltfScene.traverse((o) => o.isMesh && list.push(o));
        return list;
    }, [gltfScene]);

    // Procedural roughness map (tek sefer üret)
    const roughnessNoise = useMemo(
        () =>
            makeRoughnessNoise({
                size: 64,
                bias: 0.9,
                contrast: 0.08,
                repeat: 8,
                seed: 98765,
            }),
        []
    );

    // Leva kontrolleri
    const meshNames = meshes.map((m) => m.name || "(isimsiz)");
    const defaultSelection = Object.fromEntries(
        meshes.map((m) => [m.name || "(isimsiz)", isStoneMesh(m)])
    );

    const {
        selection,
        // Diamond
        ior,
        aberrationStrength,
        fresnel,
        bounces,
        fastChroma,
        // Polished Silver (DEFAULTS)
        metalColor,
        metalRoughness,
        metalEnvIntensity,
        metalClearcoat,
        metalClearcoatRoughness,
        metalNormalStrength,
        useRoughnessNoise,
        roughnessNoiseRepeat,
        smoothBezelNormals,
    } = useControls("Ayarlar", {
        selection: {
            label: "Taş Mesh Seçimi",
            value: defaultSelection,
            options: Object.fromEntries(meshNames.map((n) => [n, false])),
        },

        // --- Diamond defaults ---
        ior: { value: 2.417, min: 1.0, max: 3.0, step: 0.001 },
        aberrationStrength: { value: 0.014, min: 0.0, max: 0.06, step: 0.001 },
        fresnel: { value: 0.08, min: 0.0, max: 1.0, step: 0.005 },
        bounces: { value: 6, min: 1, max: 6, step: 1 },
        fastChroma: { value: true },

        // --- Polished Silver preset (defaults) ---
        metalColor: { value: "#d8d8d8" }, // nötr gümüş
        metalRoughness: { value: 0.09, min: 0.0, max: 1.0, step: 0.005 },
        metalEnvIntensity: { value: 1.85, min: 0.0, max: 5.0, step: 0.01 },
        metalClearcoat: { value: 0.0, min: 0.0, max: 1.0, step: 0.01 }, // gümüşte clearcoat yok
        metalClearcoatRoughness: {
            value: 0.0,
            min: 0.0,
            max: 1.0,
            step: 0.005,
        },
        metalNormalStrength: { value: 0.02, min: 0.0, max: 1.0, step: 0.01 },

        useRoughnessNoise: { value: true },
        roughnessNoiseRepeat: { value: 8, min: 1, max: 32, step: 1 },

        smoothBezelNormals: { value: true },
    });

    // Metal ayarları + taşların görünürlüğü
    useEffect(() => {
        meshes.forEach((mesh) => {
            const isStone = selection[mesh.name] === true;

            // Env hazır olunca taşları overlay devralacak; orijinali gizle
            mesh.visible = !(isStone && envReady);
            mesh.castShadow = true;
            mesh.receiveShadow = true;

            if (!isStone) {
                if (!mesh.material || !mesh.material.isMeshPhysicalMaterial) {
                    mesh.material = new THREE.MeshPhysicalMaterial();
                }
                const mat = mesh.material;
                mat.color = new THREE.Color(metalColor);
                mat.metalness = 1.0;
                mat.roughness = metalRoughness;
                mat.envMapIntensity = metalEnvIntensity;
                mat.clearcoat = metalClearcoat;
                mat.clearcoatRoughness = metalClearcoatRoughness;
                mat.flatShading = false;

                // mikro-yüzey: normal map varsa çok hafif
                if (mat.normalMap) {
                    if (!mat.normalScale)
                        mat.normalScale = new THREE.Vector2(1, 1);
                    mat.normalScale.setScalar(metalNormalStrength);
                }

                // UV varsa procedural roughness noise uygula (mükemmel ayna görüntüsünü kırar)
                if (useRoughnessNoise && mesh.geometry?.attributes?.uv) {
                    mat.roughnessMap = roughnessNoise;
                    roughnessNoise.repeat.set(
                        roughnessNoiseRepeat,
                        roughnessNoiseRepeat
                    );
                } else {
                    mat.roughnessMap = null;
                }

                mat.needsUpdate = true;

                // Faceted görünüyorsa yumuşat
                if (smoothBezelNormals && mesh.geometry) {
                    if (!mesh.geometry._smoothed) {
                        mesh.geometry = mesh.geometry.clone();
                        mesh.geometry.computeVertexNormals();
                        mesh.geometry._smoothed = true;
                    }
                }
            }
        });
    }, [
        meshes,
        selection,
        envReady,
        metalColor,
        metalRoughness,
        metalEnvIntensity,
        metalClearcoat,
        metalClearcoatRoughness,
        metalNormalStrength,
        useRoughnessNoise,
        roughnessNoise,
        roughnessNoiseRepeat,
        smoothBezelNormals,
    ]);

    // Overlay kaynakları (seçili taş mesh'leri)
    const overlaySources = useMemo(
        () => meshes.filter((m) => selection[m.name] === true),
        [meshes, selection]
    );

    // Her frame worldMatrix senkronu
    const overlayRefs = useRef([]);
    useEffect(() => {
        overlayRefs.current = [];
    }, [overlaySources]);

    useFrame(() => {
        overlayRefs.current.forEach(({ src, dst }) => {
            if (!src || !dst) return;
            src.updateWorldMatrix(true, true);
            dst.matrix.copy(src.matrixWorld);
        });
    });

    return (
        <>
            {/* Orijinal sahne (taşlar envReady olunca gizlenir) */}
            <primitive object={gltfScene} {...props} />

            {/* Elmas overlay */}
            <group>
                {envMap &&
                    overlaySources.map((src) => (
                        <mesh
                            key={src.uuid}
                            geometry={src.geometry}
                            matrixAutoUpdate={false}
                            frustumCulled={false}
                            ref={(node) => {
                                if (!node) return;
                                const arr = overlayRefs.current;
                                if (!arr.find((p) => p.dst === node)) {
                                    arr.push({ src, dst: node });
                                    src.updateWorldMatrix(true, true);
                                    node.matrix.copy(src.matrixWorld);
                                }
                            }}
                        >
                            <MeshRefractionMaterial
                                envMap={envMap}
                                ior={ior}
                                aberrationStrength={aberrationStrength}
                                fresnel={fresnel}
                                bounces={bounces}
                                fastChroma={fastChroma}
                                toneMapped={false}
                                color="#ffffff"
                            />
                        </mesh>
                    ))}
            </group>
        </>
    );
}

useGLTF.preload("/halka.glb");
