import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar.tsx";
import HomePage from "../pages/HomePage.tsx";
import ProductPage from "../pages/ProductPage.tsx";
import ProductDetailPage from "../pages/ProductDetailPage.tsx";
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
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
