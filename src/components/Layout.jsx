import React, { useEffect } from "react";
import { AboutMe } from "./AboutMe";
import { Contacts } from "./Contacts";
import { Intro } from "./Intro";
import { Projects } from "./Projects";
import { CodingSkills } from "./CodingSkills";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AsideInfo } from "./AsideInfo";
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
        duration: 1,
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
          start: "top center",
          end: "bottom center",
          // markers: true,
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
    <main className="bg-white dark:bg-black  dark:text-white  ">
      <div ref={intro}>
        <Intro />
      </div>
      <div className="flex relative">
        <div className="w-1/4" ref={aside}>
          <AsideInfo />
        </div> 
        <div className=" w-3/4 px-16" ref={content}>
          <AboutMe />
          <Projects />
          <CodingSkills />
          <Contacts />
        </div>
      </div>
    </main>
  );
};
