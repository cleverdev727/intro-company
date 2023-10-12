import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ label }) => {
  return (
    <div className="py-[30px] bg-[#defbff] text-center">
      <h4 className="font-semibold text-2xl text-[#E02B20]">{ label }</h4>
      <Link to="/" className="font-normal text-baase text-[#007bff]">Home</Link>
    </div>
  );
};
export default Breadcrumb;