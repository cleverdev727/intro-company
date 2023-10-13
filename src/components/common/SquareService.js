import React from "react";

const SquareService = ({ imgUrl, header, content }) => {
  return (
    <div className="group relative w-full bg-white overflow-hidden shadow-blog rounded-[10px]">
      <div className="bg-[#074B92] overflow-hidden">
        <img src={imgUrl} alt="server-img" className="w-full group-hover:opacity-20 group-hover:scale-105 transition-all duration-700" />
      </div>
      <div className="p-5 text-center">
        <h3 className="pt-[5px] pb-[15px] font-semibold text-[17px] cursor-pointer hover:text-[#17be74]">{ header }</h3>
        <p className="font-normal text-sm leading-[26px] text-[#333333]">{ content }</p>
      </div>
    </div>
  );
};
export default SquareService;