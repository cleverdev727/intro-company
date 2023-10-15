import React from "react";
import Pin from "../../assets/imgs/pin.png";
import { Link } from "react-router-dom";

const SquareBranch = ({ location, address, phone }) => {
  return (
    <div className="group relative flex flex-col items-center pt-[50px] pb-10 px-[30px] bg-white rounded-[10px] overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:h-0 before:hover:h-full before:transition-all before:duration-500 before:bg-primary before:-z-10 text-center z-10 hover:text-white">
      <div className="relative flex justify-center items-center w-20 h-20 bg-[#f7f5f2] rounded-full z-20 mb-[25px] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:scale-0 group-hover:before:scale-100 before:transition-all before:duration-500 before:bg-[#f1592a] before:rounded-full">
        <img src={Pin} alt="pin" className="h-[50px] group-hover:brightness-0 group-hover:invert" />
      </div>
      <h4 className="font-semibold text-base mb-[15px]">{ location }</h4>
      <p className="font-normal text-sm text-[#333333] group-hover:text-white leading-[26px] mb-[15px]">{ address }</p>
      <Link to={`tel:${phone}`} className="font-bold text-base">Phone: { phone }</Link>
    </div>
  );
};
export default SquareBranch;