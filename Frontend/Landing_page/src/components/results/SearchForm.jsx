import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const [search1, setSearch1] = useState("");
  const [search2, setSearch2] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // Navigate to the results page with search parameters
    navigate(`/results?search1=${search1}&search2=${search2}`);
  };

  return (
    <div className="search-form">
      <form onSubmit={handleSearch}>
        <div className="mb-4">
          <label htmlFor="search1" className="block text-lg">Search Term 1</label>
          <input
            type="text"
            id="search1"
            value={search1}
            onChange={(e) => setSearch1(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter first search term"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="search2" className="block text-lg">Search Term 2</label>
          <input
            type="text"
            id="search2"
            value={search2}
            onChange={(e) => setSearch2(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter second search term"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
