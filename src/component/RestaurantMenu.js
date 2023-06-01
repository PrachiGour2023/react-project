import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_IMG } from "../../constant";
import VegLogo from "../images/veg-logo.jpg";

function RestaurantMenu() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState("");
  const [restaurantMenu, setRestaurantMenu] = useState("");

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  async function getRestaurantDetails() {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id}&submitAction=ENTER`
    );
    const json = await response.json();
    // console.log(json?.data?.cards[0]?.card?.card?.info);
    setRestaurantMenu(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
  }

  return (
    <div className="res-menu-container">
      <div className="res-info">
        <div className="res-data">
          <h4>{restaurant?.name}</h4>
          <span>{restaurant?.cuisines?.join(", ")}</span>
          <br />
          <span>
            {restaurant?.areaName}, {restaurant?.sla?.lastMileTravel} km
          </span>
        </div>
        <div className="res-rating">
          <h4>
            <i className="fa-solid fa-star"></i>
            {restaurant?.avgRating}
          </h4>
          <p>{restaurant?.totalRatingsString}</p>
        </div>
      </div>
      <div className="res-meal-time">
        <ul>
          <li>
            <i className="fa-solid fa-clock"></i>&nbsp;{" "}
            {restaurant?.sla?.deliveryTime} MINS
          </li>
          <li>
            <i className="fa-solid fa-indian-rupee-sign"></i>&nbsp;{" "}
            {restaurant?.costForTwoMessage}
          </li>
        </ul>
      </div>
      <hr />
      {restaurantMenu &&
        restaurantMenu.map((item) => {
          return (
            <div className="menu-item-block" key={item?.card?.info?.id}>
              <div className="item-details">
                <img src={VegLogo} alt="Veg" className="veg-img" />
                <b>
                  <i className="fa-solid fa-star"></i>&nbsp; Bestseller
                </b>
                <p>{item?.card?.info?.name}</p>
                <p>₹186</p>
                <br />
                <span>{item?.card?.info?.description}</span>
              </div>
              <div className="item-img">
                <img src={MENU_IMG + item?.card?.info?.imageId} alt="" />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default RestaurantMenu;
