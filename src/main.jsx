import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CardList from "./pages/CardList.jsx";
import RandomCard from "./pages/RandomCard.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <CardList />,
        loader: () => {
          return axios
            .get(
              "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=30&offset=0"
            )
            .then((response) => response.data.data);
        },
      },
      {
        path: "/random",
        element: <RandomCard />,
        loader: () => {
          return axios.get("https://db.ygoprodeck.com/api/v7/randomcard.php");
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
