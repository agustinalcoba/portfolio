import { faLanguage, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LiAside = ({ children, href }) => {
  return (
    <li className="my-1 transition-all w-fit">
      <a
        href={href}
        className="group underline-offset-2 before:block hover:before:absolute before:-inset-1 before:-skew-y-3 before:bg-green-500 relative inline-block transition-all
        dark:before:bg-purple-400 "
      >
        <span
          className="relative text-green-600 group-hover:text-white
        dark:text-white dark:group-hover:text-black dark:group-hover:font-bold"
        >
          {children}
        </span>
      </a>
    </li>
  );
};

export const AsideInfo = () => {
  const [theme, SetTheme] = useState("dark");
  const [t] = useTranslation("global");
  const ul = t('asideInfo.ul', { returnObjects: true }); // El flag `returnObjects: true` permite devolver arrays

  useEffect(() => {
    if (theme == "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    SetTheme(theme == "dark" ? "light" : "dark");
    localStorage.setItem("theme", theme);
  };

  return (
    <aside
      className="sticky left-0 top-0 bottom-0 w-full h-screen text-green-600 my-auto px-12 py-16
    dark:bg-transparent dark:text-white"
    >
      {/* <div className="absolute top-1/2 translate-y-[-50%] px-8 py-16  rounded-md "> */}
      <img
        className=" mx-auto rounded-md "
        src="https://via.placeholder.com/300"
        alt="Profile Pic"
      />
      <h1 className="text-5xl font-bold uppercase mt-8">Agustin Alcoba</h1>
      <h2 className="text-xl font-medium mt-4 opacity-50">
        Web Developer and 3D Artist.
      </h2>
      <ul className=" pl-6 my-2 h-36 text-lg">
        {ul.map((li, i) => (
          <LiAside href={li.href} key={i}>{li.text}</LiAside>
        ))}
      </ul>
      <p className="text-sm"></p>

      <div className=" pl-6 flex gap-1 w-full ">
        <button
          className="size-10 p-2 relative rounded-l-md bg-green-600 
            dark:bg-transparent dark:border-purple-400 dark:border-2"
          onClick={() => toggleTheme()}
        >
          <FontAwesomeIcon
            icon={faSun}
            className=" size-6 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white
            dark:text-purple-400"
          />
        </button>
        <div className="group relative rounded-3xl  hover:border-2 hover:border-green-600
        dark:border-purple-400">
          <button
            className=" h-10 w-52 p-2 relative rounded-r-md bg-green-600 group-hover:bg-transparent  
          dark:bg-transparent dark:border-purple-400 dark:border-2 dark:group-hover:border-none"
          >
            <FontAwesomeIcon
              icon={faLanguage}
              className=" size-8 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white group-hover:text-green-600
            dark:text-purple-400 dark:group-hover:text-purple-400"
            />
          </button>

          <ul className="p-1 hidden group-hover:block *:flex *:items-center *:gap-2 *:py-2 *:px-4 *:rounded-full ">
            <li className="hover:bg-gray-200 cursor-pointer">
              <img
                src="https://flagsapi.com/ES/flat/64.png"
                className="size-5"
              />
              Spanish
            </li>
            <li className="hover:bg-gray-200 cursor-pointer">
              <img
                src="https://flagsapi.com/US/flat/64.png"
                className="size-5"
              />
              English
            </li>
          </ul>
        </div>
      </div>
      {/* </div> */}
    </aside>
  );
};
