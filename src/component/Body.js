import { useState, useEffect } from "react";
import Carousel from "./Carousel";
import Restaurant from "./Restaurant";
import Search from "./Search";

const Body = () => {
//   const [searchInput, setSearchInput] = useState(null);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [carouselImages, setCarouselImages] = useState([]);
//   console.log(filteredData);
  useEffect(() => {
    getRestaurant();
  }, []);

  const getRestaurant = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredData(json?.data?.cards[2]?.data?.data?.cards);
    setCarouselImages(json?.data?.cards[0]?.data?.data?.cards);
  };

//   const filterData = () => {
//     const lowerString = searchInput.toLowerCase();
//     let filteredData = allRestaurants.filter((restaurant) => {
//       return restaurant.data.name.toLowerCase().includes(lowerString);
//     });
//     setFilteredData(filteredData);
//   };

  const ComponentWithoutUI = (
    <Search allRestaurants={allRestaurants} setFilteredData={setFilteredData} />
  );
  return (
    <>
      <div className="carousel">
        <Carousel carouselImages={carouselImages} />
      </div>
      <Restaurant filteredData={filteredData} allRestaurants={allRestaurants} />
    </>
  );
};

export default Body;
