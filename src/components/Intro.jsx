import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Agus } from "../assets/Agus";
// import { AgusNoExport } from "../assets/AgusNoExport";
import { OrbitControls, Sphere } from "@react-three/drei";
import gsap from "gsap";

const Particles = () => {
  let result = [];
  for (let i = 0; i < 100; i++) {
    const position = [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
    ];
    const _scale = Math.random() * 0.1;
    const scale = [_scale, _scale, _scale];
    // console.log(position);
    result.push(
      <Sphere scale={scale} position={position} key={i}>
        {/* <meshBasicMaterial color={"#4851BF"} /> */}
      </Sphere>
    );
  }
  return result;
};
export const Intro = () => {
  // const particles = React.useRef();
  const name = React.useRef(null);
  const desc = React.useRef(null);
  const section = React.useRef(null);
  // useFrame((state) => {
  //   // console.log(state);
  //   // group.current.rotation.y += 0.001;
  //   particles.current.rotation.y -= 0.002;
  //   particles.current.rotation.x -= 0.001;
  //   particles.current.rotation.z -= 0.001;
  //   // const { x, y } = state.pointer;
  //   // console.log(x);
  // });
  React.useEffect(() => {
    gsap.fromTo(section.current, { opacity: 0 }, { duration: 3, opacity: 1 });
  }, []);
  return (
    <section className="h-screen select-none relative" ref={section}>
      <div className="absolute h-full w-full top-0 left-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 20 }}>
          <ambientLight intensity={0.5} />

          <Particles />
        </Canvas>
      </div>
      <div className="w-full h-2/3 ">
        <Canvas camera={{ position: [0, 0, 5], fov: 20 }}>
          <ambientLight intensity={0.5} />
          <Agus position={[0, -1, 0]} rotation={[0, 45, 0]} />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
      <header
        className="absolute bottom-0 left-0 right-0   h-1/3"
        ref={desc}
      >
        <h1
          className="text-3xl text-center mx-auto w-fit font-Bebas font-bold italic tracking-wide sm:text-5xl sm:text-start sm:mt-16"
          ref={name}
        >
          Agustin Alcoba
        </h1>
        <p className="text-lg pt-16 sm:text-2xl sm:ms-56 lg:text-3xl ">
          Software Developer &amp; 3D Artist.
        </p>
        <p className="text-md pb-16 opacity-60 sm:text-lg sm:ms-56 lg:text-2xl">
          Based in Uruguay.
        </p>
      </header>
    </section>
  );
};
