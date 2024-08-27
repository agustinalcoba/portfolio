import { Canvas, useFrame } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { MonitorPresentation } from "../assets/MonitorPresentation";
import { Monitor } from "../assets/Monitor";
import { OrbitControls, Plane } from "@react-three/drei";
import { Book } from "../assets/Book";
import { Burger } from "../assets/Burger";
import { Headphones } from "../assets/Headphones";
import { rotateAboutPoint } from "../lib/RotateAboutPoint";
import * as THREE from "three";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Chair } from "../assets/Chair";
import { DeskFan } from "../assets/Desk_Fan";
import { Lamp } from "../assets/Lamp";
import { Mug } from "../assets/Mug";
import { Amber } from "../assets/Amber";
import { Computer } from "../assets/Computer";
import { Soda } from "../assets/Soda";
import { TissuesBox } from "../assets/TissuesBox";
import { Desk } from "../assets/Desk";
import { Pizza } from "../assets/Pizza";
import { Stapler } from "../assets/Stapler";
gsap.registerPlugin(ScrollTrigger);
const SlideVertical = (id, value) => {
  var slider = document.getElementById(String(id));
  if (slider) {
    slider.scrollTop = slider.scrollTop + value;
  }
};
const Highlight = ({ children }) => {
  return (
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-purple-700 to-red-900 drop-shadow-white">
      {children}
    </span>
  );
};
export const ModelsAssets = () => {
  const models = [
    {
      name: "Book",
      captions: "Clean, minimalist design with smooth covers.",
      description: (
        <p>
          This 3D book model features a{" "}
          <Highlight>simple and clean design</Highlight> with smooth covers and
          basic detailing. Its minimalist style makes it a{" "}
          <Highlight>versatile element</Highlight> for any project requiring a
          representation of literature or reading.
        </p>
      ),
      asset: <Book position={[0, -0.2, 0]}></Book>,
      img: "book",
    },
    {
      name: "Burger",
      captions: "Stylized, fun representation with simple layers.",
      description: (
        <p>
          This 3D burger model features a{" "}
          <Highlight>simple, stylized design</Highlight> with{" "}
          <Highlight>basic shapes</Highlight> representing the classic layers of
          a burger. Ideal for adding a touch of fun or a food-related element to
          your projects.
        </p>
      ),
      asset: <Burger position={[0, -0.05, 0]} scale={[2, 2, 2]} />,
      img: "burger",
    },
    {
      name: "Headphones",
      captions: "Simple, clean design emphasizing essential shapes.",
      description:
        "Clean and simple design, focusing on shape and form rather than intricate details. They capture the essence of modern headphones with smooth lines and a straightforward aesthetic, making them a versatile addition to any project.",
      asset: <Headphones position={[0, -0.2, 0]} scale={[2, 2, 2]} />,
      img: "headphones",
    },
    {
      name: "Monitor",
      captions: "Basic structure with a minimalist design.",
      description:
        "Designed with simplicity in mind, featuring clean lines and a basic structure. The focus is on a straightforward, functional design that emphasizes the essential form of a modern display, making it a versatile and easily adaptable asset for various projects.",
      asset: <Monitor position={[0, -0.2, 0.01]} scale={[1, 1, 1]} />,
      img: "monitor",
    },
    {
      name: "Chair",
      captions: "Straightforward and functional with smooth lines.",
      description:
        "Offers a simple and clean design, basic shapes and a functional form. With smooth surfaces and a minimalist approach, it's a versatile piece that can fit seamlessly into various settings, whether modern or traditional.",
      asset: <Chair position={[-0.01, -0.3, 0.0]} scale={[0.5, 0.5, 0.5]} />,
      img: "chair",
    },
    {
      name: "Desk fan",
      captions: "Compact and simple, focusing on essential form.",
      description:
        "Features a compact and straightforward design, with smooth, rounded edges and a minimalist aesthetic. Captures the essential form of a mini desk fan, making it a perfect addition to scenes that require simple, functional accessories.",
      asset: <DeskFan position={[-0.01, -0.15, 0.0]} scale={[1, 1, 1]} />,
      img: "desk_fan",
    },
    {
      name: "Lamp",
      captions: "Minimalist desk lamp with a clean, adjustable design.",
      description:
        "This lamp showcases a simple and clean design with a focus on basic shapes and functionality. The lamp features a streamlined, adjustable arm and a straightforward shade, making it a practical and stylish addition to any workspace or study area.",
      asset: <Lamp position={[0, -0.3, 0.0]} scale={[0.9, 0.9, 0.9]} />,
      img: "lamp",
    },
    {
      name: "Mug",
      captions: "Classic, basic shape with a smooth handle.",
      description:
        "This mug features a simple and clean design with smooth curves and a basic handle. The minimalist approach highlights the essential form of a classic mug, making it a versatile addition for various scenes or projects.",
      asset: <Mug position={[0, -0.05, 0.0]} scale={[1.1, 1.1, 1.1]} />,
      img: "mug",
    },
    {
      name: "Computer",
      captions: "Classic, basic shape with a smooth handle.",
      description:
        "This mug features a simple and clean design with smooth curves and a basic handle. The minimalist approach highlights the essential form of a classic mug, making it a versatile addition for various scenes or projects.",
      asset: <Computer position={[0, -0.2, 0.0]} scale={[1, 1, 1]} />,
      img: "computer",
    },
    {
      name: "Soda",
      captions: "Classic, basic shape with a smooth handle.",
      description:
        "This mug features a simple and clean design with smooth curves and a basic handle. The minimalist approach highlights the essential form of a classic mug, making it a versatile addition for various scenes or projects.",
      asset: <Soda position={[0, -0.2, 0.0]} scale={[2, 2, 2]} />,
      img: "soda",
    },
    {
      name: "Tissues Box",
      captions: "Classic, basic shape with a smooth handle.",
      description:
        "This mug features a simple and clean design with smooth curves and a basic handle. The minimalist approach highlights the essential form of a classic mug, making it a versatile addition for various scenes or projects.",
      asset: <TissuesBox position={[0, -0.2, 0.0]} scale={[2, 2, 2]} />,
      img: "tissues_box",
    },
    {
      name: "Desk",
      captions: "Classic, basic shape with a smooth handle.",
      description:
        "This mug features a simple and clean design with smooth curves and a basic handle. The minimalist approach highlights the essential form of a classic mug, making it a versatile addition for various scenes or projects.",
      asset: <Desk position={[0, -0.2, 0.0]} scale={[0.5, 0.5, 0.5]} />,
      img: "desk",
    },
    {
      name: "Pizza",
      captions: "Classic, basic shape with a smooth handle.",
      description:
        "This mug features a simple and clean design with smooth curves and a basic handle. The minimalist approach highlights the essential form of a classic mug, making it a versatile addition for various scenes or projects.",
      asset: <Pizza position={[0, -0, 0.0]} scale={[2, 2, 2]} />,
      img: "pizza",
    },
    {
      name: "Stapler",
      captions: "Classic, basic shape with a smooth handle.",
      description:
        "This mug features a simple and clean design with smooth curves and a basic handle. The minimalist approach highlights the essential form of a classic mug, making it a versatile addition for various scenes or projects.",
      asset: <Stapler position={[0, -0.01, 0.0]} scale={[2, 2, 2]} />,
      img: "stapler",
    },
  ];
  const cards = React.useRef(null);
  const [showcaseIndex, setShowcaseIndex] = useState(0);
  return (
    <section className=" relative h-screen bg-red-400" id="section">
      <header className="absolute top-0 right-1/2 translate-x-[-%50]">
        <h1 className="text-5xl sm:text-6xl text-center sm:text-start mx-auto w-fit font-Bebas font-bold italic tracking-wide p-8">
          Showcase: assets
        </h1>
        <p className="text-lg font-bold mx-16 text-end">
          &mdash; Agustin Alcoba
        </p>
      </header>
      <div className="my-4 p-8 absolute left-0 top-1/2  select-none  max-w-96 ">
        <h3 className="text-3xl font-bold text-end font-Bebas tracking-wide">
          {models[showcaseIndex].name}
        </h3>
        <div className="text-lg font-bold my-auto text-justify ">
          {models[showcaseIndex].description}
        </div>
      </div>
      <div className="bg-lime-400 h-full w-full  z-10 shadow-inner">
        <Canvas
          gl={{ antialias: true }} // Habilita el antialiasing
          camera={{ fov: 50, position: [0, 0, 1], far: 20 }}
        >
          <ambientLight intensity={5} />
          <spotLight position={[1, 1, 1]} intensity={10} />
          <spotLight position={[-1, 1, -1]} intensity={10} />
          {/* <rectAreaLight intensity={1} position={[1, 0, 1]} />
          <rectAreaLight intensity={1} position={[-1, 0, 1]} /> */}
          {models[showcaseIndex].asset}
          <OrbitControls
            enableZoom={false}
            mouseButtons={{
              RIGHT: null, // Deshabilita el movimiento con clic derecho
              LEFT: 0, // Movimiento de la cámara con clic izquierdo
              MIDDLE: 1, // Zoom con el botón del medio
            }}
          />
        </Canvas>
      </div>
      <aside className="  my-4 absolute right-0 top-0 bottom-0 z-10">
        <button
          className="absolute select-none top-0 left-0 right-0 m-2 mx-10 p-2 rounded-full  bg-lime-600 z-10"
          onClick={() => {
            SlideVertical("slider", -200);
          }}
        >
          Up
        </button>
        <button
          className="absolute select-none bottom-0 left-0 right-0 m-2 mx-10 p-2 rounded-full  bg-lime-600 z-10"
          onClick={() => {
            SlideVertical("slider", 200);
          }}
        >
          Down
        </button>
        <ul
          className=" overflow-y-auto scroll-smooth snap-y py-80 px-2 mx-2 h-full relative select-none grid grid-cols-2 gap-2 "
          id="slider"
          ref={cards}
        >
          {models.map((item, index) => (
            <li
              key={index}
              className="group snap-center bg-green-500 size-52 my-2 relative  rounded-md shadow-md "
              onClick={() => {
                setShowcaseIndex(index);
              }}
            >
              <img
                className="w-full h-full aspect-square object-cover rounded-md"
                src={"./models/img/" + item.img + ".png"}
              />
              <div className="absolute bottom-0 py-2 px-4 bg-black text-lime-500 opacity-0 rounded-tr-md rounded-bl-md group-hover:opacity-100  transition-all">
                <h2 className="text-lg font-Bebas italic tracking-wide">
                  {item.name}
                </h2>
              </div>
              <span className="absolute bottom-[-4px] z-10 translate-y-[100%]  scale-0 group-hover:scale-100 transition-all bg-black text-white rounded-md p-4">
                {item.captions}
              </span>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
};
