import { restaurantList } from "../../constant";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          name="search"
          placeholder="Search Here...."
          className="input-search"
        />
        <button className="btn-search">Search</button>
      </div>
      <div className="restaurant-card">
        {restaurantList.map((restaurant) => {
          return <RestaurantCard {...restaurant} key={restaurant.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
