import { IMG_URL } from "../../constant";

const RestaurantCard = (props) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
  } = props;
  return (
    <div className="card">
      <img src={IMG_URL + cloudinaryImageId} alt="" />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <div className="card-footer">
        <div className="rating">⭐{avgRating}</div>
        <div>.</div>
        <span>{deliveryTime} MINS</span>
        <div>.</div>
        <span>{costForTwo / 100} FOR TWO</span>
      </div>
      <hr />
      <div className="quick-view">QUICK VIEW</div>
    </div>
  );
};

export default RestaurantCard;