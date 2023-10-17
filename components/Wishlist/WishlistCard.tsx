import React from "react";
import ProductItem, { ProductItemProps } from "../Product/ProductItem";

const WishlistCard = ({
  src,
  title,
  subtitle,
  price,
  to,
  id,
}: ProductItemProps) => {
  return (
    <div className="relative border border-gray-300">
      <i className="absolute right-4 top-4 p-3 rounded-full border border-[#ffffff96] bg-[#ffffff45] fa-solid fa-x"></i>
      <ProductItem
        id={id}
        src={src}
        title={title}
        subtitle={subtitle}
        price={price}
        to={to}
      />
      <div className="w-full border-t border-t-gray-300 text-center">
        <p className="cursor pointer text-xl source my-2 lg:text-lg font-semibold text-[#117a7a]">
          Move To Cart
        </p>
      </div>
    </div>
  );
};

export default WishlistCard;
