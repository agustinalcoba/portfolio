import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger);
const AboutMeP = ({ children }) => {
  return <p className="my-2">{children}</p>;
};
const Highlight = ({ children }) => {
  return (
    <span className=" bg-clip-text text-transparent font-bold bg-gradient-to-tr from-cerulean-blue-700 to-cerulean-blue-900 drop-shadow-white">
      {children}
    </span>
  );
};

const Particles = () => {
  useFrame((state) => {});

  let result = [];
  let scales = [];
  for (let i = 0; i < 100; i++) {
    const position = [
      (Math.random() - 0.5) * 5,
      (Math.random() - 0.5) * 5,
      (Math.random() - 0.5) * 5,
    ];
    const _scale = Math.random() * 0.1;
    const scale = [_scale, _scale, _scale];

    // scales.push(scale);
    const j = i;
    result.push(
      <Sphere scale={scale} position={position} key={j}>
        <meshBasicMaterial color={"#8093da"} />
      </Sphere>
    );
  }
  return result;
};
const Background = () => {
  return (
    <div className="absolute border w-full h-full top-0 left-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 20 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <Particles />
      </Canvas>
    </div>
  );
};
export const AboutMe = () => {
  // const element = useRef(null);
  const title = useRef(null);
  const text = useRef(null);

  return (
    <section
      className="h-screen  text-black relative"
      id="aboutme"
    >
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white  w-full h-[75vh]  overflow-hidden p-16 rounded-lg">
        <Background />
        <h2
          className="text-3xl w-fit text-center font-bold sm:text-5xl sm:text-start z-10"
          ref={title}
        >
          About Me
        </h2>
        <div
          className="text-lg py-16 drop-shadow-md sm:text-2xl sm:ms-56 lg:text-3xl "
          ref={text}
        >
          <AboutMeP>
            I'm a <Highlight>software developer</Highlight> who has always lived
            in Uruguay.
          </AboutMeP>
          <AboutMeP>
            Some of my hobbies include{" "}
            <Highlight>programming, gaming, and 3D art</Highlight>.
          </AboutMeP>
          <AboutMeP>
            I enjoy working on projects that{" "}
            <Highlight>make a difference</Highlight> in people's lives.
          </AboutMeP>
          <AboutMeP>
            Feel free to reach out if you'd like to collaborate on a project.
          </AboutMeP>
        </div>
      </div>
    </section>
  );
};
