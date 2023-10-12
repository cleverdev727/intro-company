import React from "react";
import { Link } from "react-router-dom";
import Company from "../assets/imgs/company.jpg";
import PhoneCall from "../assets/imgs/phone-call.png";
import Mission from "../assets/imgs/mission.jpg";
import Mission1 from "../assets/imgs/mission1.jpg";
import Values from "../assets/imgs/values.png";
import Breadcrumb from "../components/common/Breadcrumb";

const About = () => {
  return (
    <>
      <Breadcrumb label="ABOUT KODACHADRI CHITS PVT. LTD." />
      <div className="relative py-[100px]">
        <div className="absolute bg-linear w-[182px] h-[107px] bg-no-repeat left-[100px] top-[50px] animate-linear"></div>
        <div className="flex max-w-[1200px] mx-auto px-[15px]">
          <div className="w-full md:w-full lg:w-1/2 px-[15px]">
            <h4 className="font-semibold text-[17px] text-[#f1592a] mb-[25px]">ABOUT US</h4>
            <div className="font-normal text-sm text-[#333333] leading-[26px] text-justify mb-[25px]">
              <p>
                Kodachadri Chits Pvt Ltd(KCPL) is a government-approved chit fund company that has been in the industry for over 17 long years. Karnataka’s No. 1 chit fund company, KCPL is a flagship company of Kodachadri Group of Companies established in 2006 in Bengaluru. The company operates throughout Karnataka with its Corporate Office in Rajajinagara.
              </p>
              <p>
                The chit fund company that became a corporate enterprise in 2012 under theleadership of Managing Director Mr. Parashuram K. N. was incorporated under the Indian Companies Act 1956 and registered with the Registrar of Companies in 2012.KCPL regulates as an authorised chit business under the Chit Fund Act 1982 and the Karnataka Chit fund rule 1984.
              </p>
              <p>
                KCPL is one of the largest companies in the sector and gainfully employsthousands of employees. It Lakhs of satisfied subscribers with dynamic management and allied technology in place, thus creating customer-friendly environment, and gaining a name as Karnataka’s No. 1 digitised company. Expanding its business throughout and through in the Karnataka state.
              </p>
            </div>
          </div>
          <div className="w-full md:w-full lg:w-1/2 px-[15px]">
            <div className="relative pl-[50px] pb-[50px] ml-[30px]">
              <div className="absolute bg-square-dot -top-[60px] -right-[55px] w-[176px] h-[183px] bg-no-repeat animate-zoom-fade"></div>
              <div className="absolute bg-square-dot top-[120px] left-[15px] w-[176px] h-[183px] bg-no-repeat animate-zoom-fade"></div>
              <img src={Company} alt="company" className="w-full rounded-[10px]" />
              <div className="absolute left-0 bottom-0 px-5 py-2 w-[250px] bg-[#e35712] rounded-[10px]">
                <img src={PhoneCall} alt="phone-call" className="h-10 invert mb-[15px]" />
                <h4 className="font-semibold text-base text-[#f5cfc4] mb-[6px]">For Emergency</h4>
                <Link to="tel:1800-103-0794" className="font-medium text-[26px] text-white ">1800-103-0794</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto py-[50px] px-[15px] text-white">
        <div className="flex">
          <div className="w-1/2 p-[35px] bg-[#6f0801]">
            <h5 className="font-semibold text-xl">Our Mission</h5>
            <p className="font-normal text-sm leading-[26px]">
              We aim to build habit of saving among thousands of small businesses. In order to work towards this aim we want to collect chit fund amounts from our subscribers at their doorsteps everyday at zero cost.
            </p>
          </div>
          <div className="w-1/2">
            <img src={Mission} alt="mission" className="w-[36%] mx-auto" />
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2">
            <img src={Mission1} alt="mission1" className="w-[36%] mx-auto" />
          </div>
          <div className="w-1/2 p-[35px] bg-[#ff6b01]">
            <h5 className="font-semibold text-xl">Our Vision</h5>
            <p className="font-normal text-sm leading-[26px]">
              Our company vision is simple and straight-forward. We want to provide uncomplicated financial aid to ordinary individuals.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2 p-[35px] bg-[#2b95a3]">
            <h5 className="font-semibold text-xl">Our Values</h5>
            <p className="font-normal text-sm leading-[26px]">
              Commitment: We keep up our promises and are totally dedicated to our vast clientele.
            </p>
            <p className="font-normal text-sm leading-[26px]">
              Customer-focused: We provide quality products and services as per the needs of our customers.
            </p>
            <p className="font-normal text-sm leading-[26px]">
              Respect for Each Other: We highly value and respect our clients’ individuality, varied background and talent.
            </p>
            <p className="font-normal text-sm leading-[26px]">
              Winning with Integrity: We aim to become industry leaders by consistently delivering exceptional results to our clients
            </p>
          </div>
          <div className="w-1/2">
            <img src={Values} alt="values" className="w-[36%] mx-auto" />
          </div>
        </div>
      </div>
    </>
  );
};
export default About;