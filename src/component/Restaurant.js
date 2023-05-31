import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Restaurant = ({ filteredData, allRestaurants }) => {
  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="restaurant-card">
      {filteredData.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
      })}
    </div>
  );
};

export default Restaurant;

