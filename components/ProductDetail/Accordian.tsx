import { useRef, useState } from "react";

const Accordian = () => {
  const [currentActive, setCurrentActive] = useState<number>(-1);
  const refs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const handleClick = (index: number) => {
    if (refs[index].current && refs[index].current !== null) {
      refs[index].current?.classList.toggle("show");
      if (index !== currentActive && currentActive >= 0)
        refs[currentActive].current?.classList.toggle("show");
    }
    setCurrentActive(index);
  };

  return (
    <div className="my-10 md:my-8 px-3 md:px-0 w-full flex flex-col">
      <style>{`.accordCont.show{height:max-content}`}</style>
      <div
        className="accordCont  border border-gray-300 py-3 px-5 h-[40px] overflow-hidden transition-[height] duration-300 ease show"
        ref={refs[0]}
        onClick={() => handleClick(0)}
      >
        <h3 className="title cursor-pointer font-bold text-[#3e3f41] text-2xl md:text-xl lg:text-lg">
          Product Detail
          <i className="float-right fa-solid fa-chevron-down"></i>
        </h3>
        <div className="content mt-3">
          <div className="item">
            <h5 className="text-[#525353] text-xl lg:text-lg font-bold ">
              Material & Care:
            </h5>
            <p className="text-[#6b6d6d] text-lg lg:text-base font-normal">
              95% Cotton 5% <br />
              Lycra Machine Wash{" "}
            </p>
            <h5 className="mt-4 text-[#525353] text-xl lg:text-lg font-bold ">
              Country of Origin:
            </h5>
            <p className="text-[#6b6d6d] text-lg lg:text-base font-normal">
              India (and proud)
            </p>
            <h5 className="mt-5 text-[#525353] text-xl lg:text-lg font-bold ">
              Manufactured & Sold By:
            </h5>
            <p className="text-[#6b6d6d] text-lg lg:text-base font-normal">
              The Souled Store Pvt. Ltd. <br />
              224, Tantia Jogani Industrial Premises <br /> J.R. Boricha Marg{" "}
              <br />
              Lower Parel (E) <br />
              Mumbai - 11 <br />
              connect@thesouledstore.com
            </p>
          </div>
        </div>
      </div>
      <div
        className="accordCont border border-gray-300 py-3 px-5 border-t-0 h-[40px] overflow-hidden transition-[height] duration-300 ease"
        ref={refs[1]}
        onClick={() => handleClick(1)}
      >
        <h3 className="title cursor-pointer font-bold text-[#3e3f41] text-2xl md:text-xl lg:text-lg">
          Product Description
          <i className="float-right fa-solid fa-chevron-down"></i>
        </h3>
        <div className="content mt-3">
          <p className="text-[#6b6d6d] text-lg lg:text-base font-normal">
            Shop for TSS Originals: Happy Soul Cropped Tank Tops at The Souled
            Store. <br />
            <br /> MRP: Rs. 999/- incl. of all taxes.
          </p>
        </div>
      </div>
      <div
        className="accordCont border border-gray-300 py-3 px-5 border-t-0 h-[40px] overflow-hidden transition-[height] duration-300 ease"
        ref={refs[2]}
        onClick={() => handleClick(2)}
      >
        <h3 className="title cursor-pointer font-bold text-[#3e3f41] text-2xl md:text-xl lg:text-lg">
          About Seller
          <i className="float-right fa-solid fa-chevron-down"></i>
        </h3>
        <div className="content mt-3">
          <p className="text-[#6b6d6d] text-lg lg:text-base font-normal">
            The Souled Store was born out of a simple idea - love what you do
            and follow your soul! Thus, our goal is to give everyone something
            they'll love, something they can use to express themselves, and,
            simply put, something to put a smile on their face. So, whether it's
            superheroes like Superman, TV shows like F.R.I.E.N.D.S, pop culture,
            music, sports, or quirky, funny stuff you're looking for, we have
            something for everyone. TSS Originals or The Souled Store Originals
            is our exclusive range of funny, funky, trendy and stylish designs.
            Designed by our kick-ass team of in-house designers, TSS Originals
            are some cool and quirky designs that help you speak your vibe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
