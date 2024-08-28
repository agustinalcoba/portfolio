import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
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
export const AboutMe = () => {
  // const element = useRef(null);
  const title = useRef(null);
  const text = useRef(null);

  const [t, i18n] = useTranslation("global");

  const renderSwitch = () => {
    switch (i18n.language) {
      case "es":
        return (
          <>
            <AboutMeP>
              Soy un <Highlight>desarrollador</Highlight> que ha vivido tosa su
              vida en <Highlight>Uruguay</Highlight>.
            </AboutMeP>
            <AboutMeP>
              Algunos de mis hobbies incluyen{" "}
              <Highlight>
                programar, disfrutar de videojuegos y el arte.
              </Highlight>
            </AboutMeP>
            <AboutMeP>
              Amo trabajar en proyectos que{" "}
              <Highlight>hacen una diferencia</Highlight> en la vida de las
              personas.
            </AboutMeP>
            <AboutMeP>
              ¡No dudes en contactarme si deseas colaborar en algun proyecto!
            </AboutMeP>
          </>
        );
      case "en":
        return (
          <>
            <AboutMeP>
              I'm a <Highlight>software developer</Highlight> who has always
              lived in Uruguay.
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
          </>
        );
      default:
        return "foo";
    }
  };
  return (
    <section className="h-screen text-black relative  " id="aboutme">
      <div
        className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  w-full bg-green-300
      dark:bg-gradient-to-r from-indigo-400 from-10% via-sky-400 via-30% to-emerald-400 to-90% overflow-hidden p-16 rounded-lg"
      >
        {/* <Background /> */}
        <h2
          className="text-3xl w-fit text-center font-bold sm:text-5xl sm:text-start z-10"
          ref={title}
        >
          {t("aboutMe.title")}
        </h2>
        <div
          className="text-lg py-16 drop-shadow-md sm:text-2xl sm:ms-56 lg:text-3xl "
          ref={text}
        >
          {renderSwitch()}
        </div>
      </div>
    </section>
  );
};
