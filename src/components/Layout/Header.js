import React, { useState } from "react";
import Logo from "../../assets/imgs/logo.png";
import Support from "../../assets/imgs/support.gif"
import ArrowDown from "../../assets/imgs/arrow-down.png";
import Menu from "../../assets/imgs/menu.png";
import MobileMenu from "../MobileMenu";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
    document.querySelector('body').style.overflow = 'hidden';
  }

  const handleClose = () => {
    setIsOpen(false);
    document.querySelector('body').style.overflow = 'visible';
  }

  return (
    <>
      <div className="flex justify-between w-full max-w-[1200px] h-[95px] px-[15px] mx-auto">
        <Link to="/">
          <img src={Logo} alt="logo" className="h-full" />
        </Link>
        <ul className="hidden md:flex">
          <li className="group relative mx-7 cursor-pointer">
            <span className="flex h-full items-center font-medium text-[15px] hover:text-red-700">About Us</span>
            <ul className="absolute w-[230px] py-[15px] mt-4 opacity-0 invisible group-hover:mt-0 group-hover:opacity-100 group-hover:visible font-semibold text-base whitespace-nowrap transition-all">
              <li className="hover:text-red-700">
                <Link to="/about" className="flex px-[30px] py-2">
                  About Company
                </Link>
              </li>
              <li className="hover:text-red-700">
                <Link to="/certificate" className="flex px-[30px] py-2">
                  Certificate
                </Link>
              </li>
              <li className="hover:text-red-700">
                <Link to="/management" className="flex px-[30px] py-2">
                  Management
                </Link>
              </li>
            </ul>
          </li>
          <li className="group relative mx-7 cursor-pointer">
            <span className="flex h-full items-center font-medium text-[15px] hover:text-red-700">Chit Plans</span>
            <ul className="absolute w-[230px] py-[15px] mt-4 opacity-0 invisible group-hover:mt-0 group-hover:opacity-100 group-hover:visible font-semibold text-base whitespace-nowrap transition-all">
              <li className="hover:text-red-700">
                <Link to="/plans" className="flex px-[30px] py-2">
                  Plans
                </Link>
              </li>
              <li className="hover:text-red-700">
                <Link to="/services" className="flex px-[30px] py-2">
                  Services
                </Link>
              </li>
              <li className="hover:text-red-700">
                <Link to="/how-it-works" className="flex px-[30px] py-2">
                  How It Works
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative mx-7 cursor-pointer">
            <Link to="/branches">
              <span className="flex h-full items-center font-medium text-[15px] hover:text-red-700">Branches</span>
            </Link>
          </li>
          <li className="group relative mx-7 cursor-pointer">
            <span className="flex h-full items-center font-medium text-[15px] hover:text-red-700">Contact Us</span>
            <ul className="absolute w-[230px] py-[15px] mt-4 opacity-0 invisible group-hover:mt-0 group-hover:opacity-100 group-hover:visible font-semibold text-base whitespace-nowrap transition-all">
              <li className="hover:text-red-700">
                <Link to="/contact" className="flex px-[30px] py-2">
                  Contact Us
                </Link>
              </li>
              <li className="hover:text-red-700">
                <Link to="/career" className="flex px-[30px] py-2">
                  Career
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <span className="hidden md:flex items-center">
          <img src={Support} alt="support" className="w-[60px] h-[60px] mr-3" />
          <span className="text-lg">1800-103-0794</span>
        </span>
        <div className="flex md:hidden items-center mr-5">
          <img src={Menu} alt="menu" className="h-9" onClick={handleOpen} />
        </div>
      </div>
      <MobileMenu isOpen={isOpen} handleClose={handleClose} className={`${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all`} />
    </>
  );
};
export default Header;