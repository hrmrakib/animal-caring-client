import React from "react";
import Navbar from "../components/header/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className='mt-20'>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
