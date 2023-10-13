import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Man1 from "../assets/imgs/man1.jpg";

const Management = () => {
  return (
    <>
      <Breadcrumb label="Management" />
      <div className="max-w-[1200px] mx-auto py-[50px] px-[15px]">
        <div className="flex px-[10px] py-[15px] bg-[#F5FAFF]">
          <div className="w-1/3 px-[15px]">
            <br />
            <br />
            <img src={Man1} alt="man1" className="max-w-full" />
          </div>
          <div className="w-2/3 px-[15px]">
            <h1 className="font-semibold text-[25px]">Mr. Parashuram K N</h1>
            <h4 className="font-medium text-base text-[#333333]">Managing Director of KCPL</h4>
            <br />
            <p className="font-normal text-sm text-[#333333] leading-[26px]">Mr. Parashuram K N, a seasoned professional boasting over two decades of extensive experience in IT, administration, and project management,
            has played a pivotal and instrumental role in steering the success and robust growth of Kodachadri Chits Pvt Ltd.</p>
            <p className="font-normal text-sm text-[#333333] leading-[26px]">Originating from the city of Shivamogga, Mr. Parashruram K N has consistently led from the forefront since assuming the role of Managing Director. 
            Under his astute leadership, Kodachadri Chit Funds Private Limited is firmly on track to ascend as the premier Chit fund company in India. His approach is
            deeply customer-centric, marked by effective technological integration, allowing customers to invest, monitor their balances, and execute transactions 
            seamlessly via the mobile app from the comfort of their homes.</p>
            <p className="font-normal text-sm text-[#333333] leading-[26px]">In addition to revolutionizing the customer experience, Mr. Parashruram K N has ushered in a renewed sense of credibility within the chit-fund industry.
            He has harnessed the power of digital technologies to deliver faster solutions and seamless experiences to offer the best chit-funds in India. </p>
            <p className="font-normal text-sm text-[#333333] leading-[26px]">While steering the company towards its vision of becoming the top Chit fund company in India, Mr. Parashruram K N has remained unwavering in his commitment
            to enhancing business productivity and elevating profitability for the organization. </p>
            <p className="font-normal text-sm text-[#333333] leading-[26px]">He has been driving business productivity and improved profitability for the company while driving towards the vision of becoming the No.1 Chit fund company in India. </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Management;