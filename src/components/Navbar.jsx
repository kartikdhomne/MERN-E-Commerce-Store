import React from "react";
import { assets } from './../assets/frontend_assets/assets';

const Navbar = () => {
  return <div className="flex justify-between items-center py-5 font-medium">
    <img src={assets.logo} alt="logo" className=""/>
  </div>;
};

export default Navbar;
