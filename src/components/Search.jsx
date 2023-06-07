import React, { useState } from "react";
import Button from "./Button";

const SearchComponent = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };
  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search products"
        className="w-full p-4 border rounded-md focus:outline-none "
      />
      <Button text="search" width={150} />
    </div>
  );
};
export default SearchComponent;
