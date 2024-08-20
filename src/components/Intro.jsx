import React from "react";
import { Canvas } from "@react-three/fiber";
import { Agus } from "../assets/Agus";
// import { AgusNoExport } from "../assets/AgusNoExport";
import { OrbitControls } from "@react-three/drei";
import gsap from "gsap";

export const Intro = () => {
  const name = React.useRef(null);
  const desc = React.useRef(null);
  const section = React.useRef(null);
  React.useEffect(() => {
    gsap.fromTo(section.current, { opacity: 0 }, { duration: 3, opacity: 1 });
  }, []);
  return (
    <section className="h-screen select-none" ref={section}>
      <div className="w-full h-96  ">
        <Canvas camera={{ position: [0, 0, 5], fov: 20 }}>
          <ambientLight intensity={0.5} />
          {/* <pointLight position={[10, 10, 10]} /> */}
          <Agus position={[0, -1, 0]} rotation={[0, 45, 0]} />
          {/* <Particles /> */}
          {/* <Sphere scale={[0.1, 0.1, 0.1]} /> */}
          {/* <AgusNoExport position={[0, -1, 0]} rotation={[0, 45, 0]} /> */}
          <OrbitControls enableZoom={false} />
          {/* <sphereGeometry radius={1} /> */}
        </Canvas>
      </div>
      <div className="px-16" ref={desc}>
        <h1
          className="text-3xl sm:text-5xl text-center sm:text-start mx-auto w-fit font-Bebas font-bold italic tracking-wide sm:mt-16"
          ref={name}
        >
          Agustin Alcoba
        </h1>
        <p className="text-lg sm:text-2xl lg:text-3xl sm:ms-56 pt-16">
          Software Developer &amp; 3D Artist.{" "}
        </p>
        <p className="text-md sm:text-lg lg:text-2xl sm:ms-56 pb-16 opacity-60 ">
          Based in Uruguay.
        </p>
      </div>
    </section>
  );
};
