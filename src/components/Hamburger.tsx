import React, { useState } from "react";
import { arrowLeft } from "../assets/icons";
import { createPortal } from "react-dom";
import Sidebar from "./Sidebar";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className="flex hover:-translate-x-1 transition-transform rotate-180 "
        onClick={() => setIsOpen(true)}
      >
        <img className="-mr-3.5" src={arrowLeft} alt="" />
        <img className="" src={arrowLeft} alt="" />
      </button>

      {isOpen &&
        createPortal(
          <div
            className="fixed inset-0 bg-black/40 z-[100] md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <Sidebar />
          </div>,
          document.body
        )}
    </>
  );
};

export default Hamburger;
