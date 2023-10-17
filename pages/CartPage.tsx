import { useNavigate } from "react-router";
import { ProductItemProps } from "../components/Product/ProductItem";
import Section from "../components/Section";

const CartPage = () => {
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
              Your cart is lonely and Looking for love
            </h3>
            <p className="text-[#939696 ] text-center mx-auto max-w-5xl my-5 text-lg md:text-xl lg:text-2xl">
              Add products to your cart, review them anytime and purchase them
              easily.
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
              My Cart{" "}
              <span className="font-normal">
                ({data.length} item{data.length > 1 ? "s" : ""})
              </span>{" "}
            </h2>
            <div className="contain flex my-3 px-3">
              <div className="items w-[60%] border"></div>
              <div className="order w-[40%] border">
                {/* <div className="place w-full rounded bg-[#298e83] text-white ">
                  <p className="text-xl md:text-xl lg:text-base font-bold source">
                    Place Order
                  </p>
                </div> */}
              </div>
            </div>
          </>
        )}
      </div>
    </Section>
  );
};

export default CartPage;
