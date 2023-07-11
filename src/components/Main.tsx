import React from "react";
import {
  arrowLeft,
  calender,
  edit,
  filter,
  menu,
  pause,
  plus,
  url,
  users,
} from "../assets/icons";
import { members, t1_members } from "../assets/images";
import Select from "./Select";
import Section from "./Section";
import TodoCard from "./TodoCard";
import Todos from "./Todos";

const Main = () => {
  return (
    <section className="px-4 md:px-6 lg:px-8 py-6 space-y-10 h-[calc(100vh-5rem)] overflow-y-auto scrollbar-hide">
      {/* top section */}
      <div className="flex flex-col md:flex-row gap-y-4 md:items-center justify-between">
        {/* left */}
        <div className="flex items-center gap-3">
          <h1 className="text-3xl lg:text-4xl font-semibold">Mobile App</h1>
          <button>
            <img src={edit} alt="" />
          </button>
          <button>
            <img src={url} alt="" />
          </button>
        </div>

        {/* right */}
        <div className="flex items-center gap-2">
          <button className="text-purple flex items-center gap-1 font-medium">
            <img src={plus} alt="" />
            Invite
          </button>
          <button>
            <img src={members} alt="" />
          </button>
        </div>
      </div>

      {/* second section */}
      <div className="flex justify-between items-center">
        {/* left */}
        <div className="flex space-x-2">
          <Select icon={filter} text="filter" />
          <Select icon={calender} text="Today" />
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button className="flex items-center text-dark-gray font-medium gap-2 border border-dark-gray rounded-md py-1.5 px-2 md:px-4">
            <img src={users} alt="" />
            <span className="hidden md:block">Share</span>
          </button>
          <div className="bg-gray-300 h-6 w-[2px]"></div>
          <button className="bg-purple p-2 rounded-md">
            <img src={pause} alt="" />
          </button>
          <button>
            <img src={menu} alt="" />
          </button>
        </div>
      </div>

      {/* todos section */}

      <Todos />
    </section>
  );
};

export default Main;
