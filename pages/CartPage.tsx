import { useNavigate } from "react-router";
import { ProductItemProps } from "../components/Product/ProductItem";
import Section from "../components/Section";
import { useAppDispatch, useAppSelector } from "../helper/hooks";
import { AppDispatch } from "../redux/store";
import { setCartItemQuantity } from "../redux/userSlice";
export interface CartItemProps extends ProductItemProps {
  quantity: number;
}

// const data: CartItemProps[] = [
//   {
//     id: 1,
//     src: 1,
//     to: "/product/detail/tops",
//     title: "Solids: Shades of Purple Set",
//     subtitle: "Women Cropped Tops",
//     price: 499,
//     quantity: 2,
//   },
//   {
//     id: 3,
//     src: 5,
//     to: "/product/detail/tops",
//     title: "Solids: Shades of Purple Set",
//     subtitle: "Women Cropped Tops",
//     price: 499,
//     quantity: 1,
//   },
// ];

const CartPage = () => {
  const { cart: cartItems } = useAppSelector("user");
  const navigate = useNavigate();
  const dispatch: AppDispatch = useAppDispatch();
  // const [cartItems, setCartItems] = useState<CartItemProps[]>(data);

  const cartItemsSetter = <K extends keyof CartItemProps>(
    index: number,
    key: K,
    value: CartItemProps[K]
  ) => {
    dispatch(setCartItemQuantity({ index, key, value }));
    // setCartItems((prev) => {
    //   return prev.map((item: CartItemProps, number: number) => {
    //     const tempItem: CartItemProps = item;
    //     if (number === index) {
    //       tempItem[key] = value;
    //     }
    //     return tempItem;
    //   });
    // });
  };

  const total: number = cartItems
    .map((product) => product.price * product.quantity) // Extract an array of prices
    .reduce((accumulator, currentPrice) => accumulator + currentPrice, 0); // Sum the prices

  return (
    <Section>
      <div className="maxWidth7">
        {cartItems.length === 0 && (
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
        {cartItems.length > 0 && (
          <>
            <h2 className="text-[#58595b] font-bold text-2xl md:text-2xl lg:text-lg mb-5">
              My Cart{" "}
              <span className="font-normal">
                ({cartItems.length} item{cartItems.length > 1 ? "s" : ""})
              </span>{" "}
            </h2>
            <div className="contain grid gap-7 grid-cols-2 md:grid-cols-3 my-3 px-3">
              <div className="items col-span-2 w-full border border-slate-300 py-4 px-6">
                {cartItems &&
                  cartItems.length > 0 &&
                  cartItems.map((item, itemIndex) => {
                    const { src, title, to, id } = item;
                    return (
                      <div key={id + src}>
                        <div className="item flex gap-7 mb-4">
                          <img
                            onClick={() => to && navigate(to + "/" + id)}
                            src={`/Products/tops${src + 1}.png`}
                            alt="First"
                            className="h-[180px] w-auto rounded-lg cursor-pointer"
                          />
                          <div className="details py-3 h-100 border-b border-b-gray-300 w-full">
                            <h3
                              onClick={() => to && navigate(to + "/" + id)}
                              className="text-2xl md:text-xl lg:text-lg font-bold text-[#58595b] cursor-pointer"
                            >
                              {title}
                            </h3>
                            <p className="text-xl md:text-lg lg:text-base text-slate-500  ">
                              {"Tops"}
                            </p>
                            <div className="sizes mt-5 flex px-4">
                              <div className="size py-1 px-3 font-semibold border border-gray-400 rounded text-lg md:text-base lg:text-sm text-[#58595b] ">
                                Sizes:{" "}
                                <select
                                  name=""
                                  id=""
                                  className="text-lg md:text-base lg:text-sm outline-none"
                                  style={{ background: "transparent" }}
                                >
                                  <option value="XS">XS</option>
                                  <option value="S">S</option>
                                  <option value="M">M</option>
                                  <option value="L">L</option>
                                  <option value="XL">XL</option>
                                  <option value="XXL">XXL</option>
                                </select>
                              </div>
                              <div className="size py-1 px-3 font-semibold border border-gray-400 rounded text-lg md:text-base lg:text-sm text-[#58595b] ml-4">
                                Quantity:{" "}
                                <select
                                  defaultValue={item.quantity}
                                  name=""
                                  id=""
                                  className="text-lg md:text-base lg:text-sm outline-none"
                                  style={{ background: "transparent" }}
                                  onChange={(
                                    e: React.ChangeEvent<HTMLSelectElement>
                                  ) => {
                                    cartItemsSetter(
                                      itemIndex,
                                      "quantity",
                                      parseInt(e.target.value)
                                    );
                                  }}
                                >
                                  <option value="1">01</option>
                                  <option value="2">02</option>
                                  <option value="3">03</option>
                                  <option value="4">04</option>
                                  <option value="5">05</option>
                                  <option value="6">06</option>
                                  <option value="7">07</option>
                                  <option value="8">08</option>
                                  <option value="9">09</option>
                                  <option value="10">10</option>
                                </select>
                              </div>
                              <div className="quan"></div>
                            </div>
                          </div>
                        </div>
                        <div className="actions flex gap-4 justify-end">
                          <p className="remove cursor-pointer py-1 px-4 rounded border border-gray-400 text-slate-500 source font-semibold">
                            Remove
                          </p>
                          <p className="remove cursor-pointer py-1 px-4 rounded border border-gray-400 text-gray-500 source font-semibold">
                            Move To Wishlist
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className="price px-3 col-span-2 md:col-span-1">
                <div className="btn w-full rounded py-2 bg-[#298e83] hover:bg-[#2d9d91]">
                  <p className="text-white font-bold text-center text-xl lg:text-lg cursor-pointer capitalize">
                    Place Order
                  </p>
                </div>
                <div className="billing my-5">
                  <h3 className="uppercase text-xl lg:text-lg source text-[#7d848e] jost">
                    Billing details
                  </h3>
                  <div className="details mt-4">
                    <div className="item flex justify-between items-center py-2 px-5 border border-slate-200">
                      <p className="text-xl lg:text-base text-gray-600">
                        Cart Total
                      </p>
                      <p className="text-xl lg:text-base text-gray-800 source">
                        ₹ {total.toFixed(2)}
                      </p>
                    </div>
                    <div className="item flex justify-between items-center py-2 px-5 border-x border-b border-b-slate-200 border-x-slate-200">
                      <p className="text-xl lg:text-base text-gray-600">GST</p>
                      <p className="text-xl lg:text-base text-gray-600 source">
                        ₹ {(total * 0.18).toFixed(2)}
                      </p>
                    </div>
                    <div className="item flex justify-between items-center py-2 px-5 border-x border-b border-b-slate-200 border-x-slate-200">
                      <p className="text-xl lg:text-base text-gray-600">
                        Delivery
                      </p>
                      <p className="text-xl lg:text-base text-gray-800 source">
                        ₹ 0
                      </p>
                    </div>
                    <div className="item flex justify-between items-center py-2 px-5 border-x border-b border-b-slate-200 border-x-slate-200">
                      <p className="text-xl lg:text-base text-gray-800">
                        Total Amount
                      </p>
                      <p className="text-xl lg:text-base text-gray-600 font-bold  source">
                        ₹ {(total + total * 0.18).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="btn w-full rounded py-2 bg-[#298e83] hover:bg-[#2d9d91]">
                  <p className="text-white font-bold text-center text-xl lg:text-lg cursor-pointer capitalize">
                    Place Order
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Section>
  );
};

export default CartPage;
