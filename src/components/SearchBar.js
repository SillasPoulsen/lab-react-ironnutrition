import { Input } from "antd";
import { useState } from "react";

function SearchBar({ searchDishes }) {
  const [searchQuery, setSeachQuery] = useState("");

  const handleSearch = (event) => {
    setSeachQuery(event.target.value);
    searchDishes(event.target.value);
  };

  return (
    <Input
      type="text"
      name="seach"
      value={searchQuery}
      onChange={handleSearch}
    />
  );
}

export default SearchBar;
