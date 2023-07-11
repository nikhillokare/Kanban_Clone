import React, { FC } from "react";
import { arrowLeft, filter } from "../assets/icons";
import { cn } from "./utils";

interface SelectProps {
  icon: string;
  text: string;
  className?: string;
}

const Select: FC<SelectProps> = ({ icon, text, className }) => {
  return (
    <button
      className={cn(
        "border border-dark-gray flex items-center rounded-md gap-2 px-4 py-1.5 h-fit",
        className
      )}
    >
      <img src={icon} alt="" />
      <span className="capitalize text-dark-gray font-semibold hidden md:block">
        {text}
      </span>
      <img className="-rotate-90" src={arrowLeft} alt="" />
    </button>
  );
};

export default Select;
