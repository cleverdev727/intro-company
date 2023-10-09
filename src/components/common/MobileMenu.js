import React from "react";
import Close from "../../assets/imgs/close.png";
import Logo from "../../assets/imgs/logo.png";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const MobileMenu = ({isOpen, handleClose, className}) => {
  const list = [
    {
      label: 'ABOUT US',
      childs: [
        {
          label: 'About Company',
          link: '/about'
        },
        {
          label: 'Certificate',
          link: '/certificate'
        },
        {
          label: 'Management',
          link: '/management'
        },
      ]
    },
    {
      label: 'CHIT PLANS',
      childs: [
        {
          label: 'Plans',
          link: '/plans'
        },
        {
          label: 'Services',
          link: '/services'
        },
        {
          label: 'How It Works',
          link: '/how-it-works'
        },
      ]
    },
    {
      label: 'BRANCHES',
      link: '/branches'
    },
    {
      label: 'CONTACT US',
      childs: [
        {
          label: 'Contact Us',
          link: '/contact'
        },
        {
          label: 'Career',
          link: '/career'
        },
      ]
    },
  ];

  return (
    <div className={`absolute z-50 w-full h-screen left-0 top-0 transition-all duration-700 overflow-hidden ${className}`}>
      <div className="left-0 top-0 w-full h-full bg-black pointer-events-none"></div>
      <img src={Close} alt="close" className="absolute z-30 right-[25px] top-5 invert h-4" onClick={handleClose} />
      <div className={`absolute overflow-scroll w-full min-h-screen h-screen top-0 left-0 z-20 bg-[#141417] duration-700 transition-all ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="w-full mt-16 pl-6 pr-12 mb-20">
          <Link to="/">
            <img src={Logo} alt="logo" className="w-full" />
          </Link>
        </div>
        <ul className="w-full font-medium text-base text-white">
          {
            list.map(item => {
              return <Menu data={item} />
            })
          }
        </ul>
      </div>
    </div>
  );
};
export default MobileMenu;