import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreatePost from "./components/CreatePost.jsx";
import PostList from "./components/PostList.jsx";
import Hotels from "./components/Hotels.jsx";
import Wildlife from "./components/Wildlife.jsx";
import Museum from "./components/Museum.jsx";
import Fort from "./components/Fort.jsx";
import Garden from "./components/Garden.jsx";
import Market from "./components/Market.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import Way_to_post from "./components/Way_to_post.jsx";
import Visit from "./components/Visit.jsx";
import About from "./components/About.jsx";
import VisitPune from "./Places/Pune/VisitPune.jsx";
import VisitMysore from "./Places/Mysore/VisitMysore.jsx";
import HotelsMysore from "./Places/Mysore/Hotelsmysore.jsx";
import FortMysore from "./Places/Mysore/FortMysore.jsx";
import GardenMysore from "./Places/Mysore/GardenMysore.jsx";
import MarketMysore from "./Places/Mysore/MarketMysore.jsx";
import MuseumMysore from "./Places/Mysore/MuseumMysore.jsx";
import WildlifeMysore from "./Places/Mysore/WildlifeMysore.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList /> },
      { path: "/gardens", element: <Garden /> },
      { path: "/about", element: <About /> },
      { path: "/way", element: <Way_to_post /> },
      { path: "/markets", element: <Market /> },
      { path: "/museums", element: <Museum /> },
      { path: "/forts", element: <Fort /> },
      { path: "/hotels", element: <Hotels /> },
      { path: "/wildlife", element: <Wildlife /> },
      { path: "/jaipur", element: <Visit /> },
      { path: "/pune", element: <VisitPune /> },
      { path: "/mysore", element: <VisitMysore /> },
      { path: "/mysore/forts", element: <FortMysore /> },
      { path: "/mysore/gardens", element: <GardenMysore /> },
      { path: "/mysore/hotels", element: <HotelsMysore /> },
      { path: "/mysore/markets", element: <MarketMysore /> },
      { path: "/mysore/museums", element: <MuseumMysore /> },
      { path: "/mysore/wildlife", element: <WildlifeMysore /> },
      {
        path: "/create-post",
        element: <CreatePost />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-eitv1u7lt5y2ng43.us.auth0.com"
    clientId="TzMqRJaUbnn45HCJiEjAFrjxytKh9U0P"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Auth0Provider>
);
