import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBooks = ({ handleChange, handleSubmit }) => {
  return (
    <div className="flex justify-center items-center mt-7">
      <form>
        <input
          onChange={handleChange}
          type="search"
          placeholder="Search for book title, author name... "
          className="outline-none border-2 border-gray-500 px-2 rounded-md sm:w-72  bg-transparent text-zinc-500 py-1"
        />
        <button 
        onClick={handleSubmit}
        type="submit" className="ml-4 text-zinc-500">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBooks;
