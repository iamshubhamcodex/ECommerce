import { useState } from "react";
import { useNavigate } from "react-router";

interface MobileNavProp {
  show?: boolean;
  active?: number;
}

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState<MobileNavProp>({
    show: false,
    active: -1,
  });
  const navigate = useNavigate();
  const mobileNavSetter = (obj: MobileNavProp) => {
    setMobileNav((prev) => {
      const retValue: MobileNavProp = { ...prev, ...obj };
      return retValue;
    });
  };

  return (
    <div className="sticky top-0 z-[999] bg-[#ffffffd9] backdrop-blur-xl navbar px-5 shadow-[0_3px_8px_-2px_rgba(0,0,0,0.15)] ">
      <div className="min-h-full navContainer maxWidth flex flex-row justify-between items-center">
        <div
          className="hamburger md:hidden"
          onClick={() => {
            mobileNavSetter({ show: true });
          }}
        >
          <i className="fa-solid fa-bars text-4xl"></i>
        </div>
        <div className="logoCats flex flex-row items-center">
          <div
            className="logo absolute -translate-x-14 md:translate-x-0 md:relative cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src="/kaarigarBlack.png" alt="" />
          </div>
          <div className="cats flex-row items-center gap-7 hidden md:flex">
            <div className="navItem">
              <p className="source">topwear</p>
              <i className="fa-solid fa-chevron-down"></i>
              <div className="dropdown absolute py-2 px-4 bg-white shadow-lg">
                <p className="jost items">Oversized</p>
                <p className="jost items">Shirts & Tops</p>
                <p className="jost items">Dresses & Jumpsuits</p>
                <p className="jost items">Hoodies</p>
                <p className="jost items">Jackets</p>
              </div>
            </div>
            <div className="navItem">
              <p className="source">bottomwear</p>
            </div>
            <div className="navItem">
              <p className="source">shoes</p>
            </div>
          </div>
        </div>
        <div className="actionBtns flex flex-row items-center gap-3 md:gap-5 lg:gap-7">
          <div className="account">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 md:w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>
          <div className="favorite" onClick={() => navigate("/wishlist")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 md:w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
          <div className="cart" onClick={() => navigate("/cart")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 md:w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div
        className={`mobNav h-screen w-screen absolute top-0 ${
          mobileNav.show ? "left-0" : "left-[-100vw]"
        } transition-all ease duration-300`}
      >
        <div
          className="overlay bg-[#00000045] z-[998] absolute inset-0"
          onClick={() => {
            mobileNavSetter({ show: false, active: -1 });
          }}
        ></div>
        <div className=" shadow shadow-2xl z-[999] relative bg-white max-w-[70vw] w-[500px] h-screen">
          <div
            className="py-4 px-7 bg-gray-100 w-full h-max"
            onClick={() => navigate("/")}
          >
            <img src="/kaarigar.png" alt="" className="h-[60px]" />
          </div>
          <div className="bg-white my-3 px-5 flex flex-col">
            <div
              onClick={() => {
                mobileNavSetter({ active: mobileNav.active === 0 ? -1 : 0 });
              }}
              className={`item cursor-pointer my-3 ${
                mobileNav.show && mobileNav.active === 0 ? " h-max" : "h-[20px]"
              } transition-all ease duration-300 overflow-hidden`}
            >
              <p className="text-xl jost text-gray-500 flex items-center justify-between font-semibold tracking-wider">
                Topwear
                <i className="fa-solid fa-chevron-down"></i>
              </p>
              <div className="subitem py-2 px-4">
                <p className="jost items my-1 py-1 text-xl text-slate-600">
                  Oversized
                </p>
                <p
                  onClick={() => {
                    mobileNavSetter({ active: -1, show: false });
                    navigate("/product/tops");
                  }}
                  className="jost items my-1 py-1 text-xl text-slate-600"
                >
                  Shirts & Tops
                </p>
                <p
                  onClick={() => {
                    mobileNavSetter({ active: -1, show: false });
                    navigate("/product/shirts");
                  }}
                  className="jost items my-1 py-1 text-xl text-slate-600"
                >
                  Dresses & Jumpsuits
                </p>
                <p className="jost items my-1 py-1 text-xl text-slate-600">
                  Hoodies
                </p>
                <p className="jost items my-1 py-1 text-xl text-slate-600">
                  Jackets
                </p>
              </div>
            </div>
            <div
              onClick={() => {
                mobileNavSetter({ active: mobileNav.active === 1 ? -1 : 1 });
              }}
              className={`item cursor-pointer my-3 ${
                mobileNav.show && mobileNav.active === 1 ? " h-max" : "h-[20px]"
              } transition-all ease duration-300`}
            >
              <p className="text-xl jost text-gray-500 flex items-center justify-between font-semibold tracking-wider">
                Bottomwear
                {/* <i className="fa-solid fa-chevron-down"></i> */}
              </p>
            </div>
            <div
              onClick={() => {
                mobileNavSetter({ active: mobileNav.active === 1 ? -1 : 1 });
              }}
              className={`item cursor-pointer my-3 ${
                mobileNav.show && mobileNav.active === 1 ? " h-max" : "h-[20px]"
              } transition-all ease duration-300`}
            >
              <p className="text-xl jost text-gray-500 flex items-center justify-between font-semibold tracking-wider">
                Topwear
                {/* <i className="fa-solid fa-chevron-down"></i> */}
              </p>
            </div>
            <div
              onClick={() => {
                mobileNavSetter({ active: mobileNav.active === 1 ? -1 : 1 });
              }}
              className={`item cursor-pointer my-3 ${
                mobileNav.show && mobileNav.active === 1 ? " h-max" : "h-[20px]"
              } transition-all ease duration-300`}
            >
              <p className="text-xl jost text-gray-500 flex items-center justify-between font-semibold tracking-wider">
                Shoes
                {/* <i className="fa-solid fa-chevron-down"></i> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
