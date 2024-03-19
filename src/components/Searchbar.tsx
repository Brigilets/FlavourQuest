import React, { useState } from "react";
import "./Searchbar.css";

type Search = {

  onSubmit: (term: string) => void;
};

const SearchBar: React.FC<Search> = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(searchTerm);
  };

  return (
    <>
      <form className="searchForm" onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for recipes..."
          aria-label="Search for recipes"
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchBar;
