import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage.tsx";
import ProductPage from "../pages/ProductPage.tsx";
import ProductDetailPage from "../pages/ProductDetailPage.tsx";
import "../css/Navbar.css";
import App from "./App.tsx";
import "../css/Navbar.css";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
      },
      {
        path: "/product/detail/:id",
        element: <ProductDetailPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
