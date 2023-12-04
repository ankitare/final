import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Gifts from "./routes/Gifts";
import Home from "./routes/Home";
import About from "./routes/About";
import Wishlist from "./routes/Wishlist";
import CreateGifts from "./routes/CreateGifts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader() {
      return fetch('http://localhost:5000/gifts').then((response) => {
        return response.json();
      });
    }
  },
  {
    path: "/gifts/:slug",
    element: <Gifts />,
    loader(loaderData) {
      return fetch('http://localhost:5000/gifts').then((response) => {
        return response.json();
      }).then((gifts) => {
        // filter
        return gifts.filter((gift) => {
          return gift.slug === loaderData.params.slug;
        });
      });
    }
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
    loader() {
      return fetch('http://localhost:5000/gifts').then((response) => {
        return response.json();
      });
    }
  },
  {
    path: "/new-gifts",
    element: <CreateGifts />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
