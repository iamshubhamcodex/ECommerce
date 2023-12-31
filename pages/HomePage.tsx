import Caraousal from "../components/Home/Caraousal";
import Collections from "../components/Home/Collections";
import Categories from "../components/Home/Categories";
import Membership from "../components/Home/Membership";
import { useLayoutEffect } from "react";

const HomePage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Caraousal />
      <Categories />
      <Collections />
      <Membership />
    </>
  );
};

export default HomePage;
