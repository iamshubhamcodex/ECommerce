const Navbar = () => {
  return (
    <div className="navbar px-5 shadow-[0_3px_8px_-2px_rgba(0,0,0,0.15)] ">
      <div className="min-h-full navContainer max-w-7xl mx-auto flex flex-row justify-between items-center">
        <div className="logoCats flex flex-row items-center">
          <div className="logo">
            <img src="/logo.png" alt="" />
          </div>
          <div className="cats flex flex-row items-center gap-7">
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
        <div className="actionBtns flex flex-row items-center gap-7">
          <div className="account">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>
          <div className="favorite">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
          <div className="cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
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
    </div>
  );
};

export default Navbar;
