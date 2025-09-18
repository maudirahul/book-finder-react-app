import React from "react";
import books from "../assets/books.jpg";
import SearchBar from "./SearchBar";

const Navbar = ({ query, setQuery }) => {
  return (
    <div>
      <div
        className="relative h-75 w-50% bg-cover bg-center mt-1 ml-0.5 mr-0.5 rounded-xl"
        style={{ backgroundImage: `url(${books})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-50 text-white px-4">
          <h1 className="text-xl md:text-2xl font-serif font-bold mb-8 text-center drop-shadow-lg">
            Find your favorite book to read.
          </h1>

          <div className="w-full max-w-md">
            <SearchBar query={query} setQuery={setQuery} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
