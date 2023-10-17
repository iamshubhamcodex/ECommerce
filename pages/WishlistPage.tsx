import { useNavigate } from "react-router";
import Section from "../components/Section";
import { ProductItemProps } from "../components/Product/ProductItem";
import WishlistCard from "../components/Wishlist/WishlistCard";

const WishlistPage = () => {
  const navigate = useNavigate();

  const data: ProductItemProps[] = [
    {
      id: 1,
      src: 1,
      to: "/product/detail/tops",
      title: "Solids: Shades of Purple Set",
      subtitle: "Women Cropped Tops",
      price: 499,
    },
    {
      id: 3,
      src: 5,
      title: "Solids: Shades of Purple Set",
      subtitle: "Women Cropped Tops",
      price: 499,
    },
  ];

  return (
    <Section>
      <div className="maxWidth7">
        {data.length === 0 && (
          <>
            <div
              className="noItem mx-auto py-6 max-w-5xl flex justify-center"
              style={{ maxHeight: "50vh", height: "50vh" }}
            >
              <img
                className="object-contain h-full"
                src="/wishlist.png"
                alt="No Item in your Cart"
              />
            </div>
            <h3 className="text-center mx-auto max-w-5xl text-2xl md:text-3xl lg:text-4xl font-bold">
              Your wishlist is lonely and Looking for love
            </h3>
            <p className="text-[#939696 ] text-center mx-auto max-w-5xl my-5 text-lg md:text-xl lg:text-2xl">
              Add products to your wishlist, review them anytime and easily move
              to cart.
            </p>
            <div className="button flex justify-center flex-row mx-auto max-w-5xl my-4">
              <button
                onClick={() => navigate("/")}
                className="border border-[#148c8d] text-[#148c8d] py-2 px-6 text-lg lg:text-xl xl:text-2xl rounded-xl font-semibold"
                style={{ borderRadius: 4 }}
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
        {data.length > 0 && (
          <>
            <h2 className="text-[#58595b] font-bold text-2xl md:text-xl lg:text-lg mb-5">
              My Wishlist{" "}
              <span className="font-normal">
                ({data.length} item{data.length > 1 ? "s" : ""})
              </span>{" "}
            </h2>
            <div className=" px-6 grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 gap-7">
              {data.map((item) => {
                return (
                  <WishlistCard
                    id={item.id}
                    key={item.src}
                    title={item.title}
                    price={item.price}
                    src={item.src}
                    subtitle={item.subtitle}
                    to={item.to}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    </Section>
  );
};

export default WishlistPage;
