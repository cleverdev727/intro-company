import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({link, label}) => {
  return (
    <button className="relative bg-warning font-medium text-lg text-white rounded-[50px] shadow-link-button overflow-hidden">
      <Link to={link} className="relative flex pt-[13px] pb-[11px] px-[26px] before:absolute
      before:w-full before:h-full before:bg-success before:top-0 before:left-0 before:rounded-[50px] before:max-h-0 before:hover:max-h-16 before:transition-all before:duration-700">
        <span className="relative">{ label }</span>
      </Link>
    </button>
  );
};
export default LinkButton;