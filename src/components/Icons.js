import React from "react";
import { IconContext } from "react-icons";
import { FaReact } from "react-icons/fa";
import { MdAccessibility } from "react-icons/md";

export const Icons = () => {
  return (
    <IconContext.Provider value={{ color: "red", size: "10rem" }}>
      <FaReact />
      <MdAccessibility />
      <FaReact color="red" size="10rem" />
      <MdAccessibility color="blue" size="12rem" />
    </IconContext.Provider>
  );
};
