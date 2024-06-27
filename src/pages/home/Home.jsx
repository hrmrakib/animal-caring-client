import React from "react";
import HeroBanner from "../../components/header/HeroBanner";
import PetsCategory from "./home/PetsCategory";
import CallToAction from "./home/CallToAction";
import AboutUs from "./home/AboutUs";
import Overview from "./home/Overview";
import WhyChooseUs from "./home/WhyChooseUs";

const Home = () => {
  return (
    <div className='bg-white dark:bg-gray-900'>
      <HeroBanner />
      <div className='w-[90%] mx-auto'>
        <PetsCategory />
        <CallToAction />
        {/* <AboutUs /> */}
      </div>

      <Overview />

      <div className='w-[90%] mx-auto'>
        <WhyChooseUs />
      </div>
    </div>
  );
};

export default Home;
