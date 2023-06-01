import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/component/Header";
import Footer from "./src/component/Footer";
import Body from "./src/component/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Search from "./src/component/Search";
import Error from "./src/component/Error";
import RestaurantMenu from "./src/component/RestaurantMenu";

const AppLayout = () => {
  return (
    <>
      <Header />
      {/* <Body /> */}
      <Outlet />
      <Footer />
    </>
  );
};

const routers = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routers} />);
