import React from "react";
import HeroBanner from "../../components/header/HeroBanner";
import PetsCategory from "./home/PetsCategory";
import CallToAction from "./home/CallToAction";
import AboutUs from "./home/AboutUs";
import Overview from "./home/Overview";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <div className='w-[90%] mx-auto'>
        <PetsCategory />
        <CallToAction />
        <AboutUs />
      </div>
      <Overview />
    </div>
  );
};

export default Home;
