import React from "react";
import "tachyons";

const SearchBox = ({ onSearchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robotos"
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBox;
