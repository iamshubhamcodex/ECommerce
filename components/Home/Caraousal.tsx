import { useEffect, useRef, useState } from "react";
import Section from "../Section";
import "../../css/Home/Caraousal.css";

const Caraousal = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const caraousalRef = useRef<HTMLDivElement>(null);

  const data = [
    { src: "first.png" },
    { src: "second.png" },
    { src: "third.png" },
    { src: "fourth.png" },
    { src: "fifth.png" },
    { src: "sixth.png" },
    { src: "seventh.png" },
  ];

  const handleIndicatorClick = (index: number): void => {
    if (caraousalRef && caraousalRef.current)
      caraousalRef.current.style.transform = `translate3D(${
        caraousalRef.current.offsetWidth * -1 * index
      }px, 0)`;
    setActiveIndex(index);
  };
  const handleBtnClick = (right: boolean): void => {
    let currIndex: number = (activeIndex + (right ? +1 : -1)) % data.length;
    if (currIndex < 0) currIndex = data.length - 1;

    handleIndicatorClick(currIndex);
  };
  const handleIntervalClick = (): void => {
    if (caraousalRef && caraousalRef.current) {
      const transform: string = caraousalRef.current.style.transform;
      const translateX: number =
        transform === "" ? 0 : +transform.split("(")[1].split("px")[0];
      let currIndex: number =
        (translateX / caraousalRef.current.offsetWidth) * -1 + 1;
      if (currIndex > data.length - 1) currIndex = 0;

      caraousalRef.current.style.transform = `translate(${
        caraousalRef.current.offsetWidth * -1 * currIndex
      }px, 0)`;
      setActiveIndex(currIndex);
    }

    // handleBtnClick(true);
  };

  useEffect(() => {
    const clickInterval = setInterval(() => {
      handleIntervalClick();
    }, 3000);
    return () => {
      clearInterval(clickInterval);
    };
  }, []);

  return (
    <Section padding={false} margin={false}>
      <div className="caraousal overflow-hidden">
        <span className="rightBtn absolute text-white text-4xl flex items-center h-full right-4 cursor-pointer">
          <i
            onClick={() => handleBtnClick(true)}
            className="fa-solid fa-chevron-right"
          ></i>
        </span>
        <span className="leftBtn absolute text-white text-4xl flex items-center h-full left-4 cursor-pointer">
          <i
            onClick={() => handleBtnClick(false)}
            className="fa-solid fa-chevron-left"
          ></i>
        </span>
        <div className="images flex flex-row" ref={caraousalRef}>
          {data &&
            data.map((item) => {
              return (
                <img
                  src={"/Caraousal/" + item.src}
                  alt=""
                  className="img"
                  key={item.src}
                />
              );
            })}
        </div>
        <div className="indicators flex w-full h-[40px] items-center justify-center gap-3">
          {data &&
            data.map((_, index) => {
              return (
                <span
                  key={index}
                  onClick={() => {
                    handleIndicatorClick(index);
                  }}
                  className={
                    "indice " + (activeIndex === index ? "active" : "")
                  }
                />
              );
            })}
        </div>
      </div>
    </Section>
  );
};

export default Caraousal;
