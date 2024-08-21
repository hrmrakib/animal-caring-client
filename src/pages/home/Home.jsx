import React from "react";
import HeroBanner from "../../components/header/HeroBanner";
import PetsCategory from "./home/PetsCategory";
import CallToAction from "./home/CallToAction";
import Overview from "./home/Overview";
import WhyChooseUs from "./home/WhyChooseUs";
import Testimonial from "./home/Testimonial";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LatestNewsUpdate from "./home/LatestNewsUpdate";

const Home = () => {
  useEffect(() => {
    AOS.init({
      delay: 250,
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: false,
    });
  }, []);
  return (
    <div className='bg-white dark:bg-gray-900'>
      <HeroBanner />
      <div className='w-[90%] mx-auto'>
        <PetsCategory />
        <CallToAction />
      </div>

      <Overview />

      <div className='w-[90%] mx-auto'>
        <WhyChooseUs />
        <Testimonial />
        <LatestNewsUpdate />
      </div>
    </div>
  );
};

export default Home;
