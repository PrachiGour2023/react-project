import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./component/images/logo.jpg";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="logo" className="logo" />
      <ul>
        <li>Search</li>
        <li>About</li>
        <li>Help</li>
        <li>Sign In</li>
        <li>Cart</li>
      </ul>
    </div>
  );
}

const restaurantList = [
  {
    type: "F",
    id: "533773",
    name: "Third Wave Coffee",
    uuid: "19dff2cd-d21d-4cac-9c26-4580e0c61346",
    city: "1",
    area: "Ashok Nagar",
    totalRatingsString: "100+ ratings",
    cloudinaryImageId: "0dca660dbdf2e04f9b861c4426ffd41e",
    cuisines: ["Beverages", "Bakery", "Continental"],
    tags: [],
    costForTwo: 40000,
    costForTwoString: "₹400 FOR TWO",
    deliveryTime: 17,
    minDeliveryTime: 17,
    maxDeliveryTime: 17,
    slaString: "17 MINS",
    lastMileTravel: 0.5,
    slugs: {
      restaurant: "third-wave-coffee-central-bangalore-central-bangalore",
      city: "bangalore",
    },
    cityState: "1",
    address:
      "hird Wave Coffee, Corporation No.13, Old No.4/1, Ground Floor, Lavelle Road Junction, Walton Road, Bangalore, Shanthinagara , B.B.M.P East, Karnataka-560001",
    locality: "Lavelle Road",
    parentId: 274773,
    unserviceable: false,
    veg: false,
    select: false,
    favorite: false,
    tradeCampaignHeaders: [],
    ribbon: [
      {
        type: "PROMOTED",
      },
    ],
    chain: [],
    feeDetails: {
      fees: [
        {
          name: "distance",
          fee: 3200,
          message: "",
        },
        {
          name: "time",
          fee: 0,
          message: "",
        },
        {
          name: "special",
          fee: 0,
          message: "",
        },
      ],
      totalFees: 3200,
      message: "",
      title: "Delivery Charge",
      amount: "3200",
      icon: "",
    },
    availability: {
      opened: true,
      nextOpenMessage: "",
      nextCloseMessage: "",
    },
    longDistanceEnabled: 0,
    rainMode: "NONE",
    thirdPartyAddress: false,
    thirdPartyVendor: "",
    adTrackingID: "cid=6846528~p=19~eid=00000188-66cf-008f-7f6b-976f0070133b",
    badges: {
      imageBased: [],
      textBased: [],
      textExtendedBadges: [],
    },
    lastMileTravelString: "0.5 kms",
    hasSurge: false,
    aggregatedDiscountInfoV3: {
      header: "30% OFF",
      subHeader: "UPTO ₹75",
      discountTag: "",
      headerTypeV2: 0,
    },
    sla: {
      restaurantId: "533773",
      deliveryTime: 17,
      minDeliveryTime: 17,
      maxDeliveryTime: 17,
      lastMileTravel: 0.5,
      lastMileDistance: 0,
      serviceability: "SERVICEABLE",
      rainMode: "NONE",
      longDistance: "NOT_LONG_DISTANCE",
      preferentialService: false,
      iconType: "EMPTY",
    },
    promoted: true,
    avgRating: "4.3",
    totalRatings: 100,
    new: false,
  },
  {
    type: "F",
    id: "533774",
    name: "Third Wave Coffee",
    uuid: "19dff2cd-d21d-4cac-9c26-4580e0c61346",
    city: "1",
    area: "Ashok Nagar",
    totalRatingsString: "100+ ratings",
    cloudinaryImageId: "0dca660dbdf2e04f9b861c4426ffd41e",
    cuisines: ["Beverages", "Bakery", "Continental"],
    tags: [],
    costForTwo: 40000,
    costForTwoString: "₹400 FOR TWO",
    deliveryTime: 17,
    minDeliveryTime: 17,
    maxDeliveryTime: 17,
    slaString: "17 MINS",
    lastMileTravel: 0.5,
    slugs: {
      restaurant: "third-wave-coffee-central-bangalore-central-bangalore",
      city: "bangalore",
    },
    cityState: "1",
    address:
      "hird Wave Coffee, Corporation No.13, Old No.4/1, Ground Floor, Lavelle Road Junction, Walton Road, Bangalore, Shanthinagara , B.B.M.P East, Karnataka-560001",
    locality: "Lavelle Road",
    parentId: 274773,
    unserviceable: false,
    veg: false,
    select: false,
    favorite: false,
    tradeCampaignHeaders: [],
    ribbon: [
      {
        type: "PROMOTED",
      },
    ],
    chain: [],
    feeDetails: {
      fees: [
        {
          name: "distance",
          fee: 3200,
          message: "",
        },
        {
          name: "time",
          fee: 0,
          message: "",
        },
        {
          name: "special",
          fee: 0,
          message: "",
        },
      ],
      totalFees: 3200,
      message: "",
      title: "Delivery Charge",
      amount: "3200",
      icon: "",
    },
    availability: {
      opened: true,
      nextOpenMessage: "",
      nextCloseMessage: "",
    },
    longDistanceEnabled: 0,
    rainMode: "NONE",
    thirdPartyAddress: false,
    thirdPartyVendor: "",
    adTrackingID: "cid=6846528~p=19~eid=00000188-66cf-008f-7f6b-976f0070133b",
    badges: {
      imageBased: [],
      textBased: [],
      textExtendedBadges: [],
    },
    lastMileTravelString: "0.5 kms",
    hasSurge: false,
    aggregatedDiscountInfoV3: {
      header: "30% OFF",
      subHeader: "UPTO ₹75",
      discountTag: "",
      headerTypeV2: 0,
    },
    sla: {
      restaurantId: "533773",
      deliveryTime: 17,
      minDeliveryTime: 17,
      maxDeliveryTime: 17,
      lastMileTravel: 0.5,
      lastMileDistance: 0,
      serviceability: "SERVICEABLE",
      rainMode: "NONE",
      longDistance: "NOT_LONG_DISTANCE",
      preferentialService: false,
      iconType: "EMPTY",
    },
    promoted: true,
    avgRating: "4.3",
    totalRatings: 100,
    new: false,
  },
];

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
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt=""
      />
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
const Body = () => {
  return (
    <div className="restaurant-card">
      {restaurantList.map((restaurant) => {
        return <RestaurantCard {...restaurant} key={restaurant.id} />;
      })}
    </div>
  );
};

function Footer() {
  return (
    <div className="footer">
      <h3>@2023 Food Villa</h3>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
