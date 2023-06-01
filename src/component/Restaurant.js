import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const LinkStyle = {
  textDecoration: "none",
  color: "#000",
  fontSize: "14px"
}
const Restaurant = ({ filteredData, allRestaurants }) => {
  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="restaurant-card">
      {filteredData.map((restaurant) => {
        return (
          <Link
            style={LinkStyle}
            to={"/restaurants/" + restaurant.data.id}
            key={restaurant.data.id}
          >
            <RestaurantCard {...restaurant.data} />
          </Link>
        );
      })}
    </div>
  );
};

export default Restaurant;
