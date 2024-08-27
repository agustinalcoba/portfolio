import React from "react";
import { SkillItem } from "./SkillItem";

export const CodingSkills = () => {
  return (
    <section className="h-screen p-16" id="coding">
      <h3 className="text-3xl lg:text-5xl  font-bold">Coding skills</h3>
      <ul className="text-lg flex flex-wrap gap-2 sm:ms-56 py-16 ">
        <SkillItem>JavaScript (ES6+)</SkillItem>
        <SkillItem>PHP</SkillItem>
        <SkillItem>React</SkillItem>
        <SkillItem>Node.js</SkillItem>
        <SkillItem>Express</SkillItem>
        <SkillItem>HTML5</SkillItem>
        <SkillItem>CSS3</SkillItem>
        <SkillItem>Bootstrap</SkillItem>
        <SkillItem>Tailwind</SkillItem>
        <SkillItem>Git</SkillItem>
        <SkillItem>Project Management</SkillItem>
        <SkillItem>Testing</SkillItem>
        <SkillItem>Debugging</SkillItem>
        <SkillItem>Teamwork</SkillItem>
        <SkillItem>Communication</SkillItem>
        <SkillItem>Time Management</SkillItem>
        <SkillItem>Problem-Solving</SkillItem>
      </ul>
    </section>
  );
};
