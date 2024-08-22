import React from "react";

export const UnderConstruction = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-75 z-20">
      <p className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]   drop-shadow-white w-fit h-fit text-white text-5xl">
        Still under construction...
      </p>
    </div>
  );
};
