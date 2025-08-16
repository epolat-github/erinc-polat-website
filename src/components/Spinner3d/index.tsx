"use client";

import { Stack } from "@mui/material";
import {
    PresentationControls,
    Stage,
    useGLTF,
    OrbitControls,
    Environment,
    Html,
    Bounds,
    Lightformer,
    ContactShadows,
} from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import { Leva, useControls } from "leva";
import * as THREE from "three";
import Ring from "./Ring";

useGLTF.preload("/halka.glb");

function ExposureControl() {
    const { gl } = useThree();
    const { exposure } = useControls("Ayarlar", {
        exposure: { value: 1.15, min: 0.2, max: 2.5, step: 0.01 }, // gümüş için biraz daha yüksek
    });
    gl.toneMapping = THREE.ACESFilmicToneMapping;
    gl.outputColorSpace = THREE.SRGBColorSpace;
    gl.toneMappingExposure = exposure;
    return null;
}

const Spinner3d = () => {
    const { envRotate } = useControls("Ayarlar", {
        envRotate: { value: 0.35, min: -Math.PI, max: Math.PI, step: 0.01 },
    });

    return (
        <>
            <Leva collapsed />
            <Canvas
                dpr={[1, 2]}
                gl={{ antialias: true }}
                camera={{ position: [0, 0.6, 20], fov: 40 }}
            >
                <color attach="background" args={["#ffffff"]} />

                <Suspense fallback={<Html center>Yükleniyor…</Html>}>
                    <Environment
                        resolution={1024}
                        background={false}
                        rotation={[0, envRotate, 0]}
                    >
                        {/* Nötr gri kubbe (yansıma için) */}
                        <mesh scale={10}>
                            <sphereGeometry args={[1, 64, 64]} />
                            <meshBasicMaterial
                                side={THREE.BackSide}
                                color="#d2d2d2"
                            />
                        </mesh>

                        {/* Negatif fill kartları (kontrast) */}
                        <mesh position={[-6, 1, 2.5]} rotation-y={Math.PI / 9}>
                            <planeGeometry args={[10, 10]} />
                            <meshBasicMaterial color="#0f0f0f" />
                        </mesh>
                        <mesh position={[6, 1, -2.5]} rotation-y={-Math.PI / 9}>
                            <planeGeometry args={[10, 10]} />
                            <meshBasicMaterial color="#0f0f0f" />
                        </mesh>

                        {/* Keskin şerit highlight + geniş softboxlar */}
                        <Lightformer
                            form="rect"
                            intensity={3.8}
                            position={[0.6, 1.6, 4.6]}
                            rotation={[0, 0.1, 0]}
                            scale={[0.45, 8, 1]}
                        />
                        <Lightformer
                            form="rect"
                            intensity={2.2}
                            position={[0, 2.0, 6]}
                            scale={[2.6, 12, 1]}
                        />
                        <Lightformer
                            form="rect"
                            intensity={2.0}
                            position={[0, 2.0, -6]}
                            rotation-y={Math.PI}
                            scale={[1.8, 10, 1]}
                        />

                        {/* Üst softbox + yanal yardımcılar */}
                        <Lightformer
                            form="rect"
                            intensity={2.0}
                            rotation-x={Math.PI / 2}
                            position={[0, 6, 0]}
                            scale={[12, 12, 1]}
                        />
                        <Lightformer
                            form="rect"
                            intensity={1.0}
                            position={[-6, 1, 4]}
                            rotation-y={Math.PI / 2}
                            scale={[10, 10, 1]}
                        />
                        <Lightformer
                            form="rect"
                            intensity={1.0}
                            position={[6, 1, -4]}
                            rotation-y={-Math.PI / 2}
                            scale={[10, 10, 1]}
                        />
                    </Environment>

                    {/* Ölçek/merkez */}
                    <Bounds fit clip observe margin={1.2}>
                        <Ring url="/halka.glb" />
                    </Bounds>

                    {/* Zemin temas gölgesi */}
                    <ContactShadows
                        opacity={0.28}
                        blur={2.2}
                        far={8}
                        resolution={1024}
                        scale={6}
                    />
                </Suspense>

                {/* Env baskın kalsın diye düşük yardımcı ışıklar */}
                <directionalLight position={[3, 5, 3]} intensity={0.5} />
                <ambientLight intensity={0.04} />

                <OrbitControls
                    makeDefault
                    enablePan
                    enableDamping
                    dampingFactor={0.12}
                    minDistance={0.5}
                    maxDistance={12}
                />
                <ExposureControl />
            </Canvas>
        </>
    );
};

// const Spinner3d = () => {
//     const { scene } = useGLTF("/wedding-ring.glb");

//     return (
//         <Canvas
//             dpr={[1, 2]}
//             gl={{
//                 antialias: true,
//             }}
//             shadows="variance"
//             // camera={{ fov: 45 }}
//             style={
//                 {
//                     // background: "red",
//                 }
//             }
//         >
//             {/* <color attach="background" args={["#101010"]} /> */}
//             <directionalLight position={[10, -5, 5]} intensity={5} />
//             <Suspense fallback={null}>
//                 <PresentationControls
//                     speed={1}
//                     global={false}
//                     zoom={0}
//                     // polar={[0, 0]}
//                     // polar={[-0.1, Math.PI / 4]}
//                 >
//                     <Stage environment={"studio"}>
//                         <primitive object={scene} scale={0.8} />
//                     </Stage>
//                 </PresentationControls>
//             </Suspense>
//         </Canvas>
//     );
// };

export default Spinner3d;
