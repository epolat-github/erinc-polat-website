"use client";

// https://discourse.threejs.org/t/threejs-gltf-meshes-rendering-position-issue/59997/1

import * as THREE from "three";
import {
    Suspense,
    Component,
    useEffect,
    useMemo,
    useRef,
    useState,
    type ReactNode,
} from "react";
import { Canvas, createPortal, useThree } from "@react-three/fiber";
import {
    useGLTF,
    Center,
    OrbitControls,
    MeshRefractionMaterial,
    useEnvironment,
    Environment,
    Lightformer,
    Html,
    useProgress,
    Preload,
    Stats,
    AdaptiveDpr,
    AdaptiveEvents,
} from "@react-three/drei";
import {
    EffectComposer,
    Bloom,
    N8AO,
    ToneMapping,
} from "@react-three/postprocessing";
import styles from "./marifet-ar.module.css";

const MODEL_URLS = {
    EM: "/EM_2CT_Silver.glb",
    MQ: "/MQ_2CT_Silver.glb",
    OV: "/OV_2CT_Silver.glb",
};

const METAL_PRESETS = [
    { key: "silver", label: "Gümüş", color: "#babcc1" },
    { key: "gold", label: "Altın", color: "#d1a930" },
    { key: "rose", label: "Rose", color: "#efac85" },
];

const CAMERA_DISTANCE_MULTIPLIER = 4.4;
const CAMERA_ORBIT_OFFSET = [0.55, 0.22, 1];
const INITIAL_RING_ROTATION = [0, 0, 0];

function Loading() {
    const { progress } = useProgress();
    return (
        <Html
            center
            style={{ fontFamily: "system-ui", fontSize: 14, color: "#111" }}
        >
            Loading… {Math.round(progress)}%
        </Html>
    );
}

class SceneErrorBoundary extends Component<
    { children: ReactNode },
    { error: unknown | null }
> {
    constructor(props: { children: ReactNode }) {
        super(props);
        this.state = { error: null };
    }
    static getDerivedStateFromError(error: unknown) {
        return { error };
    }
    componentDidCatch(error: unknown) {
        console.error(error);
    }
    render() {
        if (this.state.error) {
            return (
                <Html
                    center
                    style={{
                        fontFamily: "system-ui",
                        fontSize: 12,
                        color: "#b00020",
                        maxWidth: 520,
                    }}
                >
                    {String(
                        (this.state.error as any)?.message || this.state.error
                    )}
                </Html>
            );
        }
        return this.props.children;
    }
}

function Ring({ url, frame, diamonds, env, ...props }: any) {
    const gltf = useGLTF(url);
    const scene = useMemo(() => gltf.scene.clone(true), [gltf.scene]);

    const diamondTargets = useMemo(() => {
        const diamondMeshes: any[] = [];
        const frameMeshes: any[] = [];
        const lineLike: any[] = [];
        scene.traverse((obj: any) => {
            if (obj.isLine || obj.isLineSegments || obj.isPoints) {
                lineLike.push(obj);
                return;
            }
            if (!obj.isMesh && !obj.isInstancedMesh) return;

            const materialName = obj.material?.name
                ? String(obj.material.name).toLowerCase()
                : "";
            const objectName = obj.name ? String(obj.name).toLowerCase() : "";
            const looksTransparent =
                Boolean(obj.material?.transparent) ||
                (typeof obj.material?.opacity === "number" &&
                    obj.material.opacity < 1);
            const looksTransmissive =
                typeof obj.material?.transmission === "number" &&
                obj.material.transmission > 0.05;
            const looksLikeDiamond =
                Boolean(obj.isInstancedMesh) ||
                materialName === "__default" ||
                looksTransparent ||
                looksTransmissive ||
                materialName.includes("diamond") ||
                materialName.includes("gem") ||
                materialName.includes("glass") ||
                objectName.includes("diamond") ||
                objectName.includes("gem") ||
                objectName.includes("glass");

            if (looksLikeDiamond) diamondMeshes.push(obj);
            else frameMeshes.push(obj);
        });
        return { diamondMeshes, frameMeshes, lineLike };
    }, [scene]);

    useEffect(() => {
        diamondTargets.lineLike.forEach((obj: any) => {
            obj.visible = false;
        });
        scene.traverse((obj: any) => {
            if (obj.isMesh || obj.isInstancedMesh) {
                obj.castShadow = true;
                obj.receiveShadow = true;
            }
        });
    }, [scene, diamondTargets]);

    return (
        <group {...props} dispose={null}>
            <primitive object={scene} />
            {diamondTargets.diamondMeshes.map((mesh: any) =>
                createPortal(
                    <MeshRefractionMaterial
                        attach="material"
                        color={diamonds}
                        side={THREE.DoubleSide}
                        envMap={env}
                        aberrationStrength={0.003}
                        toneMapped={false}
                        ior={2.4}
                        bounces={2}
                        fresnel={0.18}
                        fastChroma
                    />,
                    mesh
                )
            )}
            {diamondTargets.frameMeshes.map((mesh: any) =>
                createPortal(
                    <meshPhysicalMaterial
                        attach="material"
                        color={frame}
                        metalness={1}
                        roughness={0.12}
                        clearcoat={1}
                        clearcoatRoughness={0.04}
                        envMapIntensity={1.5}
                    />,
                    mesh
                )
            )}
        </group>
    );
}

function Scene({
    modelUrl,
    frame,
    diamonds,
    ringScale,
    postprocessing,
    ppAO,
    aoRadius,
    aoIntensity,
    aoDistanceFalloff,
    ppBloom,
    bloomThreshold,
    bloomIntensity,
    ppToneMapping,
}: any) {
    useThree((state) => state.gl);
    const { camera } = useThree();
    const hdr = useEnvironment({
        files: "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_08_1k.hdr",
    });
    const controlsRef = useRef<any>(null);
    const ringGroupRef = useRef<any>(null);

    useEffect(() => {
        if (!ringGroupRef.current || !controlsRef.current) return;

        const box = new THREE.Box3().setFromObject(ringGroupRef.current);
        if (!Number.isFinite(box.min.x) || !Number.isFinite(box.max.x)) return;

        const center = new THREE.Vector3();
        const size = new THREE.Vector3();
        box.getCenter(center);
        box.getSize(size);

        const maxDim = Math.max(size.x, size.y, size.z) || 1;
        const distance = maxDim * CAMERA_DISTANCE_MULTIPLIER;

        controlsRef.current.target.copy(center);
        const offset = new THREE.Vector3(...CAMERA_ORBIT_OFFSET)
            .normalize()
            .multiplyScalar(distance);
        camera.position.copy(center).add(offset);
        camera.near = Math.max(0.01, distance / 100);
        camera.far = distance * 100;
        camera.updateProjectionMatrix();

        controlsRef.current.minDistance = Math.max(0.1, distance * 0.85);
        controlsRef.current.maxDistance = Math.max(
            controlsRef.current.minDistance + 0.1,
            distance * 1.25
        );
        controlsRef.current.update();
    }, [camera, modelUrl]);

    return (
        <>
            <group ref={ringGroupRef}>
                <Center>
                    <Ring
                        key={modelUrl}
                        url={modelUrl}
                        frame={frame}
                        diamonds={diamonds}
                        env={hdr}
                        scale={ringScale}
                        rotation={INITIAL_RING_ROTATION}
                    />
                </Center>
            </group>
            <OrbitControls
                ref={controlsRef}
                enableRotate
                enablePan={false}
                enableDamping
                dampingFactor={0.08}
                rotateSpeed={1.4}
                minPolarAngle={0}
                maxPolarAngle={Math.PI}
            />
            {postprocessing ? (
                <EffectComposer>
                    {ppAO ? (
                        <N8AO
                            aoRadius={aoRadius}
                            intensity={aoIntensity}
                            distanceFalloff={aoDistanceFalloff}
                        />
                    ) : null}
                    {ppBloom ? (
                        <Bloom
                            luminanceThreshold={bloomThreshold}
                            intensity={bloomIntensity}
                            levels={6}
                            mipmapBlur
                        />
                    ) : null}
                    {ppToneMapping ? <ToneMapping /> : null}
                </EffectComposer>
            ) : null}
            <Environment map={hdr} background={false} blur={0.7}>
                <Lightformer
                    intensity={2.4}
                    position={[0, 5, -6]}
                    scale={[10, 10, 1]}
                />
                <Lightformer
                    intensity={1.6}
                    position={[0, -5, -6]}
                    scale={[10, 10, 1]}
                />
                <Lightformer
                    intensity={2.0}
                    position={[6, 0, -3]}
                    scale={[7, 7, 1]}
                />
                <Lightformer
                    intensity={2.0}
                    position={[-6, 0, -3]}
                    scale={[7, 7, 1]}
                />
            </Environment>
            <Preload all />
        </>
    );
}

export default function MarifetArPage() {
    const [model, setModel] = useState("EM");
    const [metal, setMetal] = useState("silver");

    const metalPreset =
        METAL_PRESETS.find((preset) => preset.key === metal) ??
        METAL_PRESETS[0];
    const modelUrl =
        MODEL_URLS[model as keyof typeof MODEL_URLS] ?? MODEL_URLS.EM;

    return (
        <div className={styles.app}>
            <div
                className={styles.modelPicker}
                role="group"
                aria-label="Model seçimi"
            >
                {Object.keys(MODEL_URLS).map((key) => (
                    <button
                        key={key}
                        className={
                            model === key ? styles.activeButton : undefined
                        }
                        onClick={() => setModel(key)}
                        type="button"
                    >
                        {key}
                    </button>
                ))}
            </div>

            <div
                className={styles.metalPicker}
                role="group"
                aria-label="Metal seçimi"
            >
                {METAL_PRESETS.map((preset) => (
                    <button
                        key={preset.key}
                        className={
                            metal === preset.key
                                ? styles.activeButton
                                : undefined
                        }
                        onClick={() => setMetal(preset.key)}
                        type="button"
                    >
                        {preset.label}
                    </button>
                ))}
            </div>

            <div
                className={styles.arButtonContainer}
                role="group"
                aria-label="AR butonu"
            >
                <a href="/ring.usdz" rel="ar" target="_blank">
                    <button type="button">AR ile gör</button>
                </a>
            </div>

            <Canvas
                className={styles.canvas}
                shadows
                dpr={[1, 1.25]}
                gl={{
                    antialias: false,
                    toneMapping: THREE.NoToneMapping,
                    powerPreference: "high-performance",
                }}
                camera={{ position: [0, 0.5, 6], fov: 35 }}
            >
                <color attach="background" args={["#f0f0f0"]} />
                <ambientLight intensity={0.35} />
                <spotLight
                    color="#fff2de"
                    position={[10, 10, 10]}
                    angle={0.15}
                    penumbra={1}
                    decay={0}
                    intensity={Math.PI}
                />
                <AdaptiveDpr />
                <AdaptiveEvents />
                <Stats showPanel={0} />
                <SceneErrorBoundary>
                    <Suspense fallback={<Loading />}>
                        <Scene
                            modelUrl={modelUrl}
                            frame={metalPreset.color}
                            diamonds="#ffffff"
                            ringScale={1}
                            postprocessing
                            ppAO={false}
                            aoRadius={0.15}
                            aoIntensity={1.0}
                            aoDistanceFalloff={1.0}
                            ppBloom
                            bloomThreshold={1.2}
                            bloomIntensity={0.35}
                            ppToneMapping={false}
                        />
                    </Suspense>
                </SceneErrorBoundary>
            </Canvas>
        </div>
    );
}

useGLTF.preload(MODEL_URLS.EM);
useGLTF.preload(MODEL_URLS.MQ);
useGLTF.preload(MODEL_URLS.OV);
