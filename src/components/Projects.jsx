import React, { useEffect, useRef } from "react";
// import { Card } from "./Card";
import { Canvas, useFrame } from "@react-three/fiber";
import { Burger } from "../assets/Burger";
import { OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { rotateAboutPoint } from "../lib/RotateAboutPoint";
import { Link } from "react-router-dom";
import * as THREE from "three";
import { UnderConstruction } from "./UnderConstruction";
gsap.registerPlugin(ScrollTrigger);

const Card = ({ src, title, description, theme }) => {
  const themeStyles = {
    light: {
      backgroundColor: "bg-white",
      color: "text-black ",
    },
    dark: {
      backgroundColor: "bg-black",
      color: "text-white ",
    },
  };

  return (
    <article
      className={
        themeStyles[theme].backgroundColor +
        " " +
        themeStyles[theme].color +
        " rounded-md w-36 lg:w-60 h-56 lg:h-72 relative overflow-hidden select-none font-Bebas tracking-wide"
      }
    >
      <img
        className=" rounded-sm mx-auto w-full h-full aspect-square object-cover"
        src={src}
        alt="Project 1"
      />
      <h3 className=" text-xl font-bold ms-2 my-2 absolute left-0 bottom-0 drop-shadow-white">
        {title}
      </h3>
      {/* <p className="text-sm opacity-75">{description}</p> */}
    </article>
  );
};

const RotatingModel = ({ children }) => {
  const group = React.useRef();
  useFrame(() => {
    rotateAboutPoint(
      group.current,
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 1, 0),
      0.001,
      true
    );
  });

  return <group ref={group}>{children}</group>;
};
export const Projects = () => {
  const section = useRef(null);
  const cards = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cards.current.children,
      {
        opacity: 0,
        scale: 0,
      },
      {
        duration: 1,
        opacity: 1,
        scale: 1,
        ease: "none",
        stagger: 0.5,
        scrollTrigger: {
          trigger: cards.current,
          start: "top 90%",
          end: "center 10%",
          toggleActions: "restart reverse restart reverse",
          // markers: true,
        },
      }
    );
  }, []);
  return (
    <>
      <section
        className=" flex flex-col lg:flex lg:flex-col relative min-h-screen p-8 sm:p-16"
        ref={section}
      >
        <h2 className="text-3xl sm:text-5xl text-center sm:text-start font-bold">
          3D Projects
        </h2>
        <p className="opacity-75 sm:ms-8 pt-4 text-lg sm:text-2xl">
          Enhance your projects with these simple 3D models, perfect for games,
          visualizations, and graphic design applications.
        </p>
        <div className="flex flex-col lg:flex lg:flex-row lg:relative">
          <div className=" size-64 sm:size-96 w-full lg:w-6/12 lg:h-full m-auto lg:m-0 left-0 right-0 lg:absolute">
            <Canvas camera={{ fov: 50, position: [0, 0, 1] }}>
              <ambientLight intensity={1} />
              <pointLight position={[1, 1, 0]} intensity={1.5} />
              <RotatingModel>
                <Burger position={[0, -0.06, 0]} scale={[2, 2, 2]} />
              </RotatingModel>
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>

          <div
            className="flex flex-wrap justify-center lg:grid lg:grid-cols-2 w-full lg:w-fit lg:ms-auto overflow-y-auto  gap-2 text-lg py-16"
            ref={cards}
          >
            <Card
              src={"./models/img/burger.png"}
              title="Burger"
              description="Simple 3D model, perfect for games, visualizations, and graphic design applications."
              theme="light"
            />
            <Card
              src={"./models/img/monitor.png"}
              title="Monitor"
              description="Description of Project 1"
              theme="light"
            />
            <Card
              src={"./models/img/book.png"}
              title="Book"
              description="description"
              theme="light"
            />

            <Link
              to="/Models"
              className="group bg-white text-black rounded-md w-36 lg:w-60 h-56 lg:h-72 flex font-Bebas tracking-wide"
            >
              <h3 className="text-xl m-auto font-bold group-hover:underline">
                See more
              </h3>
            </Link>
          </div>
        </div>
      </section>
      <section className="relative h-screen p-8 sm:p-16 bg-white text-black">
        <UnderConstruction />
        <h2 className="text-3xl lg:text-5xl  font-bold">Web Projects</h2>

        <div className="flex flex-wrap justify-center  lg:grid lg:grid-cols-2 w-full lg:w-fit lg:ms-auto overflow-y-auto  gap-2 text-lg py-16">
          <Card title="titulo" description="description" theme="dark" />
          <Card
            title="Project 1"
            description="Description of Project 1"
            theme="dark"
          />
          <Card title="Project 2" description="description" theme="dark" />
        </div>
      </section>
    </>
  );
};
