import React from "react";
import { useTranslation } from "react-i18next";

export const Contacts = () => {
  const [t] = useTranslation("global");
  const CopyText = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };
  return (
    <section className="h-screen p-16 text-black relative" id="contactme">
      <div
        className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full bg-green-300
      dark:bg-gradient-to-r from-indigo-400 from-10% via-sky-400 via-30% to-emerald-400 to-90% p-16 rounded-lg"
      >
        <h2 className="text-3xl lg:text-5xl  font-bold ">
          {t("contactMe.title")}
        </h2>
        <p className="text-lg lg:text-3xl sm:ms-56 py-16">
          {t("contactMe.caption")}
        </p>
        <ul className="text-lg lg:text-3xl sm:ms-56 pb-16">
          <li
            onClick={(e) => {
              CopyText("agustinalcoba707978@gmail.com");
            }}
          >
            Email: agustinalcoba707978@gmail.com
          </li>
          <li>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/example/">/Agustin Alcoba</a>
          </li>
          <li>
            GitHub:{" "}
            <a href="https://github.com/agustinalcoba/" target="_blank">
              /agustinalcoba
            </a>
          </li>
          <li>
            Fiverr:{" "}
            <a href="https://es.fiverr.com/agustinalcoba" target="_blank">
              /agustinalcoba
            </a>
          </li>
          {/* <li>Discord: <a href="https://discord.com/invite/example">#example</a></li>
        <li>Snapchat: <a href="https://www.snapchat.com/add/example/">example</a></li> */}
        </ul>
      </div>
    </section>
  );
};
