import React, { useEffect } from "react";
import { AboutMe } from "./AboutMe";
import { Contacts } from "./Contacts";
import { Intro } from "./Intro";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Layout = () => {
  useEffect(() => {
    let titles = gsap.utils.toArray("section"),
      offset = titles[1].offsetTop - titles[0].offsetTop;

    titles.forEach((element, i) => {
      gsap.to(element, {
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "center center+=" + offset / 2,
          end: "center center-=" + offset / 2,
          // markers: true,
          onEnter: () => {
            gsap.to(element, {
              y: -50,
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
      <Intro />
      <AboutMe />
      <Projects />
      <Skills />
      <Contacts />
    </main>
  );
};
