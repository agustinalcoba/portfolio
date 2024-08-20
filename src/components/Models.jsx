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
import { Footer } from "./Footer";
// import {modelsList} from "../lib/ModelsList";
gsap.registerPlugin(ScrollTrigger);

const SectionTitle = ({ children }) => {
  return (
    <h2 className="text-3xl sm:text-5xl text-center sm:text-start font-Bebas font-bold p-8">
      {children}
    </h2>
  );
};

const MyCanvas = ({ children }) => {
  return (
    <div className="w-full h-full left-0 top-0 absolute">
      <Canvas
        gl={{ antialias: true }} // Habilita el antialiasing
        camera={{ fov: 50, position: [0, 0, 1], far: 20 }}
      >
        <ambientLight intensity={5} />
        <spotLight position={[1, 2, 1]} intensity={20} />
        {children}
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
  );
};
const Particles = ({ children }) => {
  let result = [];
  const AMOUNT_OF_PARTICLES = 50;
  for (let i = 0; i < AMOUNT_OF_PARTICLES; i++) {
    const position = [
      (Math.random() - 0.5) * 5,
      (Math.random() - 0.5) * 5,
      (Math.random() - 0.5) * 5,
    ];
    const _rotation = Math.random() * 180;
    const rotation = [_rotation, _rotation, _rotation];
    const _scales = Math.random();
    const scale = [_scales, _scales, _scales];
    result.push(
      <group scale={scale} position={position} rotation={rotation} key={i}>
        {children}
      </group>
    );
  }
  return result;
};
const ThisModel = ({ children }) => {
  useEffect(() => {
    rotateAboutPoint(
      group.current,
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(1, 0, 0),
      -0.5
    );
  }, []);
  const group = React.useRef();
  useFrame(() => {
    rotateAboutPoint(
      group.current,
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 1, 0),
      0.001
    );
  });

  return <group ref={group}>{children}</group>;
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
  const SlideVertical = (id, value) => {
    var slider = document.getElementById(String(id));
    if (slider) {
      slider.scrollTop = slider.scrollTop + value;
    }
  };
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
      <section className=" relative h-screen " id="section">
        <div className="w-full h-screen absolute left-0 top-0 ">
          <Canvas camera={{ position: [0, 1, 3], fov: 50 }}>
            <ambientLight intensity={5} />
            <spotLight position={[0, 2, -1]} intensity={20} distance={10} />
            <MonitorPresentation />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
        <div className="w-screen sm:w-fit  bottom-0 left-0 absolute py-32 sm:py-16 rounded-r-lg border-t sm:border-r sm:border-b bg-white">
          <h1 className="text-5xl sm:text-6xl text-center sm:text-start mx-auto w-fit font-Bebas font-bold italic tracking-wide p-8">
            3D Models
          </h1>
          <p className="text-lg font-bold ms-16">&mdash; Agustin Alcoba</p>
        </div>
      </section>

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
          <Canvas camera={{ fov: 40, position: [1, -0.5, 2], far: 100 }}>
            <ambientLight intensity={1} />
            <spotLight position={[1, 0, 1]} intensity={1} />

            <Amber position={[0, -1, 0]} scale={[1, 1, 1]} />
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
      </section>

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
      <Footer />
    </main>
  );
};
