import { useLayoutEffect } from "react";
import Detail from "../components/ProductDetail/Detail";
import Similar from "../components/ProductDetail/Similar";
import Trending from "../components/ProductDetail/Trending";

export default function ProductDetailPage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f2f2f2] lg:bg-white">
      <Detail />
      <Similar />
      <Trending />
    </div>
  );
}
