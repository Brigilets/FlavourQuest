import React from "react";

type Search = {
  searchTerm: string;
  onSubmit: (term: string) => void;
};

const SearchBar: React.FC<Search> = ({ searchTerm, onSubmit }) => {


  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(searchTerm);
        }}
      >
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSubmit(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              onSubmit(searchTerm);
            }
          }}
          style={{
            color: "blue",
            fontSize: "2em",
          }}
          placeholder="Search for recipes..."
          aria-label="Search for recipes"
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchBar;
