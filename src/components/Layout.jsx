import React, { useEffect } from "react";
import { AboutMe } from "./AboutMe";
import { Contacts } from "./Contacts";
import { Intro } from "./Intro";
import { Projects } from "./Projects";
import { CodingSkills } from "./CodingSkills";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Layout = () => {
  const intro = React.useRef();
  const aside = React.useRef();
  const content = React.useRef();
  useEffect(() => {
    gsap.fromTo(
      aside.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: "none",
        duration: 2,
        scrollTrigger: {
          trigger: content.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse restart reverse",
        },
      }
    );
    const children = Array.from(content.current.children);

    children.forEach((element, i) => {
      gsap.to(element, {
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top center" ,
          end: "bottom center" ,
          markers: true,
          onEnter: () => {
            gsap.to(element, {
              duration: 1,
              opacity: 1,
            });
          },
          onLeave: () => {
            gsap.to(element, {
              y: -100,
              duration: 1,
              opacity: 0,
            });
          },
          onEnterBack: () => {
            gsap.to(element, {
              y: -50,
              duration: 1,
              opacity: 1,
            });
          },
          onLeaveBack: () => {
            gsap.to(element, {
              y: 0,
              duration: 1,
              opacity: 0,
            });
          },
        },
      });
    });
  }, []);
  return (
    <main className="bg-black text-white ">
      <div ref={intro}>
        <Intro />
      </div>
      <div className="flex relative">
        <aside
          className="sticky left-0 top-0  w-1/4 h-screen p-8 flex flex-col justify-center"
          ref={aside}
        >
          <img
            className=" mx-auto   "
            src="https://via.placeholder.com/300"
            alt="Profile Pic"
          />
          <h1 className="text-5xl font-bold uppercase">Agustin Alcoba</h1>
          <h2 className="text-xl font-medium">Web Developer and 3D Artist.</h2>
          <ul className=" pl-6">
            <li>
              <a href="#aboutme" className="hover:text-green-500">
                About me
              </a>
            </li>
            <li>
              <a href="#3dart" className="hover:text-green-500">
                3D art
              </a>
            </li>
            <li>
              <a href="#coding" className="hover:text-green-500">
                Coding
              </a>
            </li>
            <li>
              <a href="#contactme" className="hover:text-green-500">
                Contact me
              </a>
            </li>
          </ul>
          <p className="text-sm"></p>
        </aside>
        <div className=" w-3/4 px-8" ref={content}>
          <AboutMe />
          <Projects />
          <CodingSkills />
          <Contacts />
        </div>
      </div>
    </main>
  );
};
