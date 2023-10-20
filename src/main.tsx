import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import HomePage from "../pages/HomePage.tsx";
import ProductPage from "../pages/ProductPage.tsx";
import ProductDetailPage from "../pages/ProductDetailPage.tsx";
import WishlistPage from "../pages/WishlistPage.tsx";
import CartPage from "../pages/CartPage.tsx";
import App from "./App.tsx";
import "../css/Navbar.css";
import "../css/Navbar.css";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/wishlist",
        element: <WishlistPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
      },
      {
        path: "/product/detail/:id/:num",
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
