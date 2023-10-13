import React from "react";
import Line from "../../assets/imgs/line.png";
import { Link } from "react-router-dom";

const SquareCertificate = ({ header, subHeader, num }) => {
  return (
    <div className="p-[25px] rounded-xl border border-[#b7d3f3] text-center">
      <h5 className="font-semibold text-xl text-[#e02b20] mb-[15px]" dangerouslySetInnerHTML={{__html:header}} />
      <img src={Line} alt="line" className="mx-auto" />
      <p className="font-medium text-[15px] text-[#e02b20] my-[10px]">{ subHeader }</p>
      <p className="font-normal text-sm text-[#333333]">{ num }</p>
      <Link to="#" className="font-normal text-base text-[#007bff]">View Certificate</Link>
    </div>
  );
};
export default SquareCertificate;