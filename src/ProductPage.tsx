import { useLayoutEffect } from "react";
import Banner from "../components/Product/Banner";
import Breadcrumb from "../components/Product/Breadcrumb";
import Products from "../components/Product/Products";

const ProductPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner />
      <Breadcrumb />
      <Products />
    </>
  );
};

export default ProductPage;
