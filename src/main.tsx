import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar.tsx";
import "../css/Navbar.css";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
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
