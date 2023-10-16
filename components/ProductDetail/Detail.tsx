import Section from "../Section";
import Caraousal, { CaraousalProps } from "../Caraousal";
import { useParams } from "react-router";

const Detail = () => {
  const data: CaraousalProps["data"] = [
    { src: "first.png" },
    { src: "second.png" },
    { src: "third.png" },
    { src: "fourth.png" },
  ];
  const { id } = useParams();
  return (
    <Section>
      <div className="flex md:flex-row justify-around items-start flex-col">
        <div className="w-[60%] p-4 px-5 flex flex-wrap justify-around gap-5 md:flex hidden">
          {data &&
            data.map((item, index) => {
              return (
                <img
                  key={index}
                  src={"/ProductDetail/" + item.src}
                  className="w-[48%] "
                />
              );
            })}
        </div>
        <div className="md:hidden block w-[100%]  md:w-[50%] lg:w-[60%] p-4 px-5 ">
          <Caraousal data={data} basePath={"ProductDetail/"} />
        </div>
        <div className="w-[100%] md:w-[50%] lg:w-[40%]  pt-4 lg:py-4 px-5">
          <p className="heading font-bold text-2xl md:text-4xl lg:text-5xl text-[#343434]">
            The Little Mermaid: Mosaic
          </p>
          <p className="text-gray-500 capitalize text-lg md:text-xl lg:text-2xl">
            {id}
          </p>
          <hr className="my-4 hidden lg:block" />
          <p className="source mt-4 lg:my-4 text-3xl text-[#58595b] font-bold">
            ₹ 1290
          </p>
          <div className="sizes mt-4 lg:mt-6 font-bold">
            <p className="heading text-2xl md:text-xl lg:text-xl mb-5 text-[#58595b]">
              Please Select Size
            </p>
            <div className="size flex flex-row flex-wrap ">
              <p className="rounded-full py-1 px-3 w-max mb-4 mr-4 border border-2 border-[#b6b6b6] text-[#b6b6b6]  uppercase text-lg md:text-xl lg:text-lg xxs">
                xxs
              </p>
              <p className="rounded-full py-1 px-3 w-max mb-4 mr-4 border border-2 border-[#b6b6b6] text-[#b6b6b6]  uppercase text-lg md:text-xl lg:text-lg xs">
                xs
              </p>
              <p className="rounded-full py-1 px-3 w-max mb-4 mr-4 border border-2 border-[#b6b6b6] text-[#b6b6b6]  uppercase text-lg md:text-xl lg:text-lg s">
                s
              </p>
              <p className="rounded-full py-1 px-3 w-max mb-4 mr-4 border border-2 border-[#b6b6b6] text-[#b6b6b6]  uppercase text-lg md:text-xl lg:text-lg m">
                m
              </p>
              <p className="rounded-full py-1 px-3 w-max mb-4 mr-4 border border-2 border-[#b6b6b6] text-[#b6b6b6]  uppercase text-lg md:text-xl lg:text-lg l">
                l
              </p>
              <p className="rounded-full py-1 px-3 w-max mb-4 mr-4 border border-2 border-[#b6b6b6] text-[#b6b6b6]  uppercase text-lg md:text-xl lg:text-lg xl">
                xl
              </p>
              <p className="rounded-full py-1 px-3 w-max mb-4 mr-4 border border-2 border-[#b6b6b6] text-[#b6b6b6]  uppercase text-lg md:text-xl lg:text-lg xxl">
                xxl
              </p>
            </div>
          </div>
          <p className="text-xl mt-3 lg:text-lg text-[#58595b] font-bold">
            Size Not Available?{" "}
            <span className="ml-4 font-normal cursor-pointer text-[#118fbf]">
              Notify Me
            </span>
          </p>
          <div className="quantity flex flex-row gap-4 items-center my-4">
            <p className="text-2xl md:text-xl lg:text-lg text-[#118fbf font-semibold]">
              Quantity
            </p>
            <select
              name=""
              id=""
              className="py-1 py-2 border border-slate-200 rounded"
            >
              <option value="1">01</option>
              <option value="2">02</option>
              <option value="3">03</option>
              <option value="4">04</option>
              <option value="5">05</option>
              <option value="6">07</option>
              <option value="7">07</option>
              <option value="8">08</option>
              <option value="9">09</option>
              <option value="10">10</option>
            </select>
          </div>
          <div className="cart flex gap-7 my-4">
            <p className="add uppercase py-2 bg-[#ec3d25] text-white text-center text-xl font-bold rounded source px-5 w-[60%]">
              Add to cart
            </p>
            <p className="add py-2 border border-[#148c8d] text-[#148c8d] text-center text-xl font-bold source rounded px-5 w-[40%]">
              Add to Wishlist
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Detail;
