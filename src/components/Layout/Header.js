import React from "react";
import Logo from "../../assets/imgs/logo.png";
import Support from "../../assets/imgs/support.gif"
import ArrowDown from "../../assets/imgs/arrow-down.png";
import Menu from "../../assets/imgs/menu.png";

const Header = () => {
  return (
    <div className="flex justify-between w-full max-w-[1200px] h-[95px] px-[15px] mx-auto">
      <img src={Logo} alt="logo" className="h-full" />
      <ul className="hidden md:flex">
        <li className="group relative mx-7 cursor-pointer">
          <span className="flex h-full items-center font-medium text-[15px] hover:text-red-700">About Us</span>
          <ul className="absolute w-[230px] py-[15px] mt-4 opacity-0 invisible group-hover:mt-0 group-hover:opacity-100 group-hover:visible font-semibold text-base whitespace-nowrap transition-all">
            <li className="px-[30px] py-2 hover:text-red-700">About Company</li>
            <li className="px-[30px] py-2 hover:text-red-700">Certificate</li>
            <li className="px-[30px] py-2 hover:text-red-700">Management</li>
          </ul>
        </li>
        <li className="group relative mx-7 cursor-pointer">
          <span className="flex h-full items-center font-medium text-[15px] hover:text-red-700">Chit Plans</span>
          <ul className="absolute w-[230px] py-[15px] mt-4 opacity-0 invisible group-hover:mt-0 group-hover:opacity-100 group-hover:visible font-semibold text-base whitespace-nowrap transition-all">
            <li className="px-[30px] py-2 hover:text-red-700">Plans</li>
            <li className="px-[30px] py-2 hover:text-red-700">Services</li>
            <li className="px-[30px] py-2 hover:text-red-700">How It Works</li>
          </ul>
        </li>
        <li className="relative mx-7 cursor-pointer">
          <span className="flex h-full items-center font-medium text-[15px] hover:text-red-700">Branches</span>
        </li>
        <li className="group relative mx-7 cursor-pointer">
          <span className="flex h-full items-center font-medium text-[15px] hover:text-red-700">Contact Us</span>
          <ul className="absolute w-[230px] py-[15px] mt-4 opacity-0 invisible group-hover:mt-0 group-hover:opacity-100 group-hover:visible font-semibold text-base whitespace-nowrap transition-all">
            <li className="px-[30px] py-2 hover:text-red-700">Contact Us</li>
            <li className="px-[30px] py-2 hover:text-red-700">Career</li>
          </ul>
        </li>
      </ul>
      <span className="hidden md:flex items-center">
        <img src={Support} alt="support" className="w-[60px] h-[60px] mr-3" />
        <span className="text-lg">1800-103-0794</span>
      </span>
      <div className="flex md:hidden items-center mr-5">
        <img src={Menu} alt="menu" className="h-9" />
      </div>
    </div>
  );
};
export default Header;