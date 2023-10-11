import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar.tsx";
import "../css/Navbar.css";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage.tsx";
import ProductPage from "./ProductPage.tsx";

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
