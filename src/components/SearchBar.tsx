import React, { useState } from "react";
import { search } from "../assets/icons";

const SearchBar = () => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setText("");
  };

  return (
    <form
      className="bg-light-gray rounded-md flex items-center px-4 py-2 w-full md:max-w-sm gap-2"
      onSubmit={handleSubmit}
    >
      <img src={search} alt="" />
      <input
        type="text"
        placeholder="Search for anything..."
        className=" w-full outline-none bg-light-gray placeholder:text-stone-500"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
