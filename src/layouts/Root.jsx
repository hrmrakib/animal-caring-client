import React from "react";
import Navbar from "../components/header/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";

const Root = () => {
  return (
    <div className='dark:bg-gray-900'>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
