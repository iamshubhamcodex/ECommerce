import Caraousal from "../components/Home/Caraousal";
import Collections from "../components/Home/Collections";
import Categories from "../components/Home/Categories";
import Membership from "../components/Home/Membership";

const HomePage = () => {
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
