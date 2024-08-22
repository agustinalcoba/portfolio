import React from "react";

export const Contacts = () => {
  const CopyText = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };
  return (
    <section className="h-screen p-16 text-black bg-white">
      <h2 className="text-3xl lg:text-5xl  font-bold ">Contact Me</h2>
      <p className="text-lg lg:text-3xl sm:ms-56 py-16">
        Feel free to reach out to me at any time.
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
    </section>
  );
};
