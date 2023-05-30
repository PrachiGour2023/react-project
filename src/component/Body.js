import { restaurantList } from "../../constant";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);

  const filterData = () => {
    const lowerString = searchInput.toLowerCase();
    let filteredData = restaurants.filter((restaurant) => {
      return restaurant.name.toLowerCase().includes(lowerString);
    });
    setRestaurants(filteredData);
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          name="search"
          placeholder="Search Here...."
          className="input-search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="btn-search" onClick={filterData}>
          Search
        </button>
      </div>
      <div className="restaurant-card">
        {restaurants.map((restaurant) => {
          return <RestaurantCard {...restaurant} key={restaurant.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
