import React, { useEffect, useState } from "react";

const SearchBar = ({ query, setQuery }) => {
  const [input, setInput] = useState(query);

  useEffect(()=>{
    setInput(query)
  },[query])

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(input);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="Search For a Book"
          className="w-full p-4 text-lg rounded-lg shadow-xl h-10 outline-none focus:ring-2 focus:ring-blue-500 text-black bg-white"
        />
        <button type="submit" className="bg-blue-600 rounded-xl p-1 ml-1">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
