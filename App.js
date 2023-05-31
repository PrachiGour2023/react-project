import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/component/Header";
import Footer from "./src/component/Footer";
import Body from "./src/component/Body";
import Carousel from "./src/component/Carousel";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
