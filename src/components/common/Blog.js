import React from "react";
import LinkButton from "./LinkButton";

const Blog = ({ imgUrl, heading, content }) => {
  return (
    <div className="group relative w-full bg-white overflow-hidden shadow-blog rounded-[10px]">
      <div className="bg-[#612ade] overflow-hidden">
        <img src={imgUrl} alt="blog-user" className="w-full group-hover:opacity-20 group-hover:scale-105 transition-all duration-700" />
      </div>
      <div className="absolute w-[71px] h-[58px] bg-dots transition-all duration-700 -right-5 -bottom-5 opacity-0 group-hover:right-0 group-hover:bottom-0 group-hover:opacity-100"></div>
      <div className="pt-[30px] pb-10 pl-10 pr-[30px]">
        <h4 className="font-semibold text-base leading-[30px] mb-[15px] hover:text-[#612ade] cursor-pointer">Digitally Empowering Customers: Kodachadri Chit Funds' Tech-Driven Initiatives</h4>
        <p className="font-normal text-sm leading-[26px] text-[#333333] text-justify mb-5">In an era dominated by technological advancements, businesses across industries are embracing digital transformation to enhance customer experiences.</p>
        <div>
          <LinkButton link="/blog" label="Read More" />
        </div>
      </div>
    </div>
  );
};
export default Blog;