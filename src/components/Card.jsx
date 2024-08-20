import React from "react";

export const Card = ({ title, description, theme }) => {
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
        "rounded-md w-36 lg:w-60 h-56 lg:h-80 p-2"
      }
    >
      <img
        className="border rounded-sm size-32 lg:size-52"
        src="project1.jpg"
        alt="Project 1"
      />
      <h3 className="text-xl">{title}</h3>
      <p className="text-sm">{description}</p>
    </article>
  );
};
