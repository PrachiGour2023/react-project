import React, { useState } from "react";
import SearchCarousel from "./SearchCarousel";

function Search() {
  const [searchInput, setSearchInput] = useState("");

  //   const filterData = (e) => {
  //     if (e.key === "Enter") {
  //       const lowerString = searchInput.toLowerCase();
  //       let filteredData = allRestaurants.filter((restaurant) => {
  //         return restaurant.data.name.toLowerCase().includes(lowerString);
  //       });
  //       setFilteredData(filteredData);
  //     }
  //   };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          name="search"
          placeholder="Search for restaurants and food"
          className="input-search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          //   onKeyDown={filterData}
        />
        <i className="fa-solid fa-magnifying-glass">&nbsp;&nbsp;</i>
      </div>
      <div className="search-img">
        <p>Popular Cuisines</p>
        <SearchCarousel />
      </div>
    </>
  );
}

export default Search;
