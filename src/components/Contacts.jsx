import React from "react";

export const Contacts = () => {
  return (
    <section className="h-screen p-16 text-black bg-white">
      <h2 className="text-3xl lg:text-5xl  font-bold ">Contact Me</h2>
      <p className="text-lg lg:text-3xl sm:ms-56 py-16">
        Feel free to reach out to me at any time.
      </p>
      <ul className="text-lg lg:text-3xl sm:ms-56 pb-16">
        <li>Email: support@example.com</li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/example/">/Agustin Alcoba</a></li>
        <li>GitHub: <a href="https://github.com/example/">/agustinalcoba</a></li>
        <li>Discord: <a href="https://discord.com/invite/example">#example</a></li>
        <li>Snapchat: <a href="https://www.snapchat.com/add/example/">example</a></li>
      </ul>
    </section>
  );
};
