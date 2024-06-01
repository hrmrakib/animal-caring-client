import React from "react";
import HeroBanner from "../../components/header/HeroBanner";
import PetsCategory from "./home/PetsCategory";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <div className='w-[90%] mx-auto'>
        <PetsCategory />
      </div>
    </div>
  );
};

export default Home;
