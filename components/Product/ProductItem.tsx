interface ProductItemProps {
  src: number;
  title: string;
  subtitle?: string;
  price: number;
}
const ProductItem = ({
  src,
  title,
  subtitle,
  price,
}: ProductItemProps): React.ReactNode => {
  return (
    <div className="w-full relative h-max cursor-pointer">
      <span className="absolute h-[40px] grid items-center justify-center aspect-square p-2 rounded-full bg-[#24242445] text-white text-xl right-3 top-3 cursor-pointer">
        <i className="fa-regular fa-heart"></i>
      </span>
      <div className={`relative w-full h-max`}>
        <img
          src={`/Products/tops${src + 1}.png`}
          alt="First"
          className="w-full h-max  transition-opacity duration-300"
        />
        <img
          src={`/Products/tops${src}.png`}
          alt="First"
          className="absolute inset-0 w-full opacity-100 hover:opacity-0 h-max transition-opacity duration-300"
        />
      </div>
      <div className="details my-2 px-4">
        <p className="text-slate-600 jost border-b border-b-slate-300 font-semibold text-xl">
          {title}
        </p>
        <p className="text-xl source text-gray-500">{subtitle}</p>
        <p className="price text-2xl font-semibold mt-1 text-gray-700">
          ₹ {price}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
