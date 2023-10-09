import React from "react";
import LinkButton from "./LinkButton";

const ChitSquare = ({ num, price, duration }) => {
  return (
    <div className="text-center">
      <h1 className="rounded-t-[28px] py-[30px] px-5 border border-[#eae8ed] bg-white shadow-chit-square font-bold text-[25px] text-orange">{num} Lakh Chit</h1>
      <div className="rounded-b-[28px] bg-primary text-white pb-[45px] shadow-chit-square">
        <p className="mb-2 pt-[15px] font-semibold text-lg"> ₹ {price}/ month  </p>
        <p className="pb-5 font-normal text-base"> Duration | {duration} months</p>
        <div className="flex justify-center">
          <LinkButton link="/register" label="View Details" />
        </div>
      </div>
    </div>
  );
};
export default ChitSquare;