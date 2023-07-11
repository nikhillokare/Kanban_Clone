import React, { FC } from "react";
import { CgAddR } from "react-icons/cg";
import { cn } from "./utils";
import { BsThreeDots } from "react-icons/bs";
import { AiFillBulb } from "react-icons/ai";
import { arrowLeft, logo } from "../assets/icons";
import { projectList, sidebarLinks } from "../constants";

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  return (
    <aside
      className={cn(
        "w-60 border-r h-screen overflow-y-auto border-gray-300 scrollbar-hide pb-6 bg-white",
        className
      )}
    >
      <div className="w-full border-b px-4 py-5 text-lg h-20 border-gray-300 bg-white sticky top-0 flex justify-between items-center">
        <div className="flex items-center gap-2 font-bold">
          <img src={logo} alt="" />
          Project.M
        </div>

        <button className="flex hover:-translate-x-1 transition-transform">
          <img className="-mr-3.5" src={arrowLeft} alt="" />
          <img className="" src={arrowLeft} alt="" />
        </button>
      </div>

      <nav className="flex flex-col px-5 py-6 text-dark-gray gap-5 font-medium">
        {sidebarLinks.map(({ icon, id, text }) => (
          <a className="flex items-center gap-2 rounded-lg" key={id} href="">
            <img src={icon} alt="" />
            <span>{text}</span>
          </a>
        ))}
      </nav>
      <hr className="mx-2 border-gray-300" />
      <div className="px-4 py-6 space-y-4">
        <div className="flex items-center text-dark-gray justify-between">
          <p className="uppercase text-xs font-semibold">My Projects</p>
          <button>
            <CgAddR />
          </button>
        </div>

        <div className="flex flex-col gap-2">
          {projectList.map(({ id, text, isActive, color }) => (
            <a
              className={cn(
                "text-dark-gray font-medium flex items-center gap-3 px-2 py-1 hover:bg-light-purple transition-colors",
                isActive && "bg-light-purple text-black rounded-md "
              )}
              key={id}
              href=""
            >
              <div className={cn("h-2 w-2 rounded-full ", color)}></div>
              {text}
              {isActive && <BsThreeDots className="ml-auto" size={18} />}
            </a>
          ))}
        </div>
      </div>
      <div className="bg-light-gray rounded-xl p-4 text-sm text-center space-y-1 mx-4 mt-10 mb-4">
        <div className="bg-yellow-100 p-4 rounded-full w-fit mx-auto -mt-11">
          <AiFillBulb className="text-yellow-400" size={25} />
        </div>
        <p className="font-semibold">Thoughts Time</p>
        <p className="text-dark-gray text-[13px]">
          We don’t have any notice for you, till then you can share your
          thoughts with your peers.
        </p>
        <button className="font-semibold bg-white py-2 px-4 rounded-lg">
          Write a message
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
