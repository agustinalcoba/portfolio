import { Canvas, useFrame } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { MonitorPresentation } from "../assets/MonitorPresentation";
import { OrbitControls, Plane } from "@react-three/drei";
import { rotateAboutPoint } from "../lib/RotateAboutPoint";
import * as THREE from "three";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "./Footer";
import { ModelsAssets } from "./ModelsAssets";
import { StreetNBuildings } from "../assets/Street_n_buildings";
import { Amber } from "../assets/Amber";
// import {modelsList} from "../lib/ModelsList";
gsap.registerPlugin(ScrollTrigger);

const SectionTitle = ({ children }) => {
  return (
    <h2 className="text-3xl sm:text-5xl text-center sm:text-start font-Bebas font-bold p-8">
      {children}
    </h2>
  );
};

const Highlight = ({ children }) => {
  return (
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-purple-700 to-red-900 drop-shadow-white">
      {children}
    </span>
  );
};
const InfoAside = ({ children }) => {
  const [opened, setOpened] = useState(false);
  const el = useRef();
  const buttonOpen = useRef();
  const buttonClose = useRef();
  const OpenAside = (element, btnOpen, btnClose) => {
    if (opened) {
      gsap.fromTo(
        [element, btnClose],
        {
          opacity: 1,
          x: 0,
        },
        {
          duration: 1,
          opacity: 0,
          zIndex: -1,
          x: -80,
          ease: "back.in",
          stagger: 0.1,
        }
      );
      gsap.fromTo(
        btnOpen,
        {
          opacity: 0,
        },
        {
          zIndex: 1,
          duration: 0.5,
          opacity: 1,
          ease: "back.in",
          stagger: 0.1,
        }
      );
    } else {
      gsap.fromTo(
        [element, btnClose],
        {
          opacity: 0,
          x: -80,
        },
        {
          duration: 1,
          opacity: 1,
          zIndex: 1,
          x: 0,
          ease: "back.out",
          stagger: 0.1,
        }
      );
      gsap.fromTo(
        btnOpen,
        {
          opacity: 1,
        },
        {
          duration: 0.5,
          opacity: 0,
          zIndex: -1,
          ease: "back.in",
          stagger: 0.1,
        }
      );
    }
    setOpened(!opened);
  };
  useEffect(() => {
    OpenAside(el.current, buttonOpen.current, buttonClose.current);
  }, []);
  return (
    <>
      <span
        className="bg-white rounded-md my-36 p-2 z-10 cursor-pointer absolute right-4 top-0 bottom-0 flex items-center opacity-50 hover:opacity-100"
        onClick={() => {
          OpenAside(el.current, buttonOpen.current, buttonClose.current);
        }}
        ref={buttonOpen}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </span>

      <span
        className="bg-white rounded-md p-2 z-10 absolute right-96 top-1/2 translate-y-[-50%] size-10 me-6 cursor-pointer flex justify-center items-center  opacity-50 hover:opacity-100"
        onClick={() => {
          OpenAside(el.current, buttonOpen.current, buttonClose.current);
        }}
        ref={buttonClose}
      >
        <FontAwesomeIcon icon={faXmark} />
      </span>
      <aside
        className="bg-white absolute right-0 top-1/2 translate-y-[-50%] z-10 size-96 rounded-md p-8 me-4 text-lg"
        ref={el}
      >
        {children}
      </aside>
    </>
  );
};

export const Models = () => {
  
  useEffect(() => {
    let titles = gsap.utils.toArray("#section"),
      offset = titles[1].offsetTop - titles[0].offsetTop;

    titles.forEach((element, i) => {
      // Enter
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 200,
          // scale: 0,
        },
        {
          duration: 1,
          opacity: 1,
          y: 0,
          // scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            scrub: 1,
            start: "top bottom",
            // element, viewport
            end: "top 40%",
            toggleActions: "restart reverse restart reverse",
            // onEnter, onLeaven, onEnterBack, onLeavenBack
            // markers: true,
          },
        }
      );
      // Leave
      gsap.fromTo(
        element,
        {
          opacity: 1,
          y: 0,
          // scale: 0,
        },
        {
          duration: 1,
          opacity: 0,
          y: -200,
          // scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            scrub: 1,
            start: "bottom 50%",
            // element, viewport
            end: "bottom 10%",
            toggleActions: "restart reverse restart reverse",
            // onEnter, onLeaven, onEnterBack, onLeavenBack
            // markers: true,
          },
        }
      );
    });
  }, []);
  return (
    <main className="scroll-smooth   relative" id="main">
      <button
        className="fixed top-0 left-0 right-0 z-10 m-10 mx-auto p-4 size-20 border rounded-full scale-75 hover:scale-100 hover:bg-black text-black hover:text-white transition-all"
        onClick={() => {
          SlideVertical("main", -500);
        }}
      >
        Up
      </button>
      <button
        className="fixed bottom-0 left-0 right-0 z-10 m-10 mx-auto p-4 size-20 border rounded-full scale-75 hover:scale-100 hover:bg-black text-black hover:text-white transition-all"
        onClick={() => {
          SlideVertical("main", +500);
        }}
      >
        Down
      </button>
      <header className=" relative h-screen " id="section">
        <div className="w-full h-screen absolute left-0 top-0 ">
          <Canvas camera={{ position: [0, 1, 3], fov: 50 }}>
            <ambientLight intensity={5} />
            <spotLight position={[0, 2, -1]} intensity={20} distance={10} />
            {/* <MonitorPresentation  /> */}
            <StreetNBuildings position={[0, -1, 0]} scale={[0.5, 0.5, 0.5]} />
            {/* <OrbitControls enableZoom={false} /> */}
          </Canvas>
        </div>
        <div className="w-screen sm:w-fit  bottom-0 left-0 absolute py-32 sm:py-16 rounded-r-lg border-t sm:border-r sm:border-b bg-white">
          <h1 className="text-5xl sm:text-6xl text-center sm:text-start mx-auto w-fit font-Bebas font-bold italic tracking-wide p-8">
            3D Models
          </h1>
          <p className="text-lg font-bold ms-16">&mdash; Agustin Alcoba</p>
        </div>
      </header>

      <section className=" relative  h-screen  " id="section">
        <div className="bg-[#9fa4e1] h-[60vh] w-full my-auto absolute left-0 bottom-0 top-0">
          <SectionTitle>Marta</SectionTitle>
          <InfoAside>
            <h2 className="text-xl font-Bebas font-bold tracking-wide">
              Marta
            </h2>
            <p className="  my-2">
              Meticulously crafted 3D model, combining traditional charm with a
              touch of modern design. This detailed figure captures the essence
              of a classic toy, with intricate features and a playful aesthetic
              that evokes nostalgia while appealing to contemporary tastes.
            </p>
            <p className="">
              Perfect as a digital collectible or centerpiece in a virtual
              scene.
            </p>
          </InfoAside>
        </div>
        <div className="absolute top-0 left-0 h-full w-full">
          <img
            className=" h-full mx-auto"
            src="./models/img/marta.png"
            alt=""
          />
        </div>
      </section>
      <section className=" relative  h-screen  " id="section">
        <div className="bg-[#9fa4e1] h-[60vh] w-full my-auto absolute left-0 bottom-0 top-0">
          <SectionTitle>Akihiko: The Artisanal Toy</SectionTitle>
          <InfoAside>
            <h2 className="text-xl font-Bebas font-bold tracking-wide">
              Akihiko: The Artisanal Toy
            </h2>
            <p className="  my-2">
              The Artisanal Toy is a meticulously crafted 3D model, combining
              traditional charm with a touch of modern design. This detailed
              figure captures the essence of a classic toy, with intricate
              features and a playful aesthetic that evokes nostalgia while
              appealing to contemporary tastes.
            </p>
            <p className="">
              Perfect as a digital collectible or centerpiece in a virtual
              scene.
            </p>
          </InfoAside>
        </div>
        <div className="absolute top-0 left-0 h-full w-full">
          <Canvas camera={{ position: [0, 0, 3], fov: 35 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[0, 0, 2]} intensity={2} distance={10} />
            <Amber scale={[1, 1, 1]} position={[0, -0.8, 0]} />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      </section>

      <ModelsAssets />

      <Footer />
    </main>
  );
};
