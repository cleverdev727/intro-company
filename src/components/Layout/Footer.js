import React from "react";
import { Link } from "react-router-dom";
import Facebook from "../../assets/imgs/facebook.png";
import Instagram from "../../assets/imgs/instagram.png";
import Linkedin from "../../assets/imgs/linkedin.png";
import Youtube from "../../assets/imgs/youtube.png";

const Footer = () => {
  return (
    <div className="w-full bg-footer text-secondary">
      <div className="border-b border-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-12 py-[50px]">
          <div className="lg:col-span-4 md:col-span-6 col-span-12 px-[15px]">
            <h4 className="mb-[26px] font-bold text-xl text-white">About Us</h4>
            <p className="font-normal text-sm leading-[26px] mb-8 text-justify">Kodachadri chits is the top chit provider in Karnataka. We have different chit plans tailored to customer needs.</p>
            <div className="flex">
              <a href="https://www.facebook.com/kodachadrichitspvt/" target="_blank" className="flex justify-center items-center w-[38px] h-[38px] mx-[5px] border border-white rounded-full">
                <img src={Facebook} alt="facebook" className="h-[23px] invert -ml-[2px]" />
              </a>
              <a href="https://www.instagram.com/kodachadrichits/?utm_medium=copy_link" target="_blank" className="flex justify-center items-center w-[38px] h-[38px] mx-[5px] border border-white rounded-full">
                <img src={Instagram} alt="instagram" className="h-[23px] invert" />
              </a>
              <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQExALygUukBNgAAAYloMcroXLtSfakvH4CsLvAXFG6NQu-KcbuhUbX45ID3686JXEoiaEndYdC7Ao55dcQHl2M-5uV2OE5SxqphNtA3SW1Gs-3bf2SOr_CU84CXF8VZvFsJkmM=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fkodachadrichits%2F" target="_blank" className="flex justify-center items-center w-[38px] h-[38px] mx-[5px] border border-white rounded-full">
                <img src={Linkedin} alt="linkedin" className="h-[23px] invert -mt-1" />
              </a>
              <a href="https://www.youtube.com/channel/UC5SH8g4IFk6332FbdFZBgFQ" target="_blank" className="flex justify-center items-center w-[38px] h-[38px] mx-[5px] border border-white rounded-full">
                <img src={Youtube} alt="youtube" className="h-[23px] invert" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-3 md:col-span-6 col-span-12 px-[15px] md:px-20">
            <h4 className="mb-[26px] font-bold text-xl text-white">Links</h4>
            <ul>
              <li className="mb-[7px]">
                <Link className="font-normal text-base hover:text-white" to="/">Home</Link>
              </li>
              <li className="mb-[7px]">
                <Link className="font-normal text-base hover:text-white" to="/about">About Company</Link>
              </li>
              <li className="mb-[7px]">
                <Link className="font-normal text-base hover:text-white" to="/plans">Chit Plans</Link>
              </li>
              <li className="mb-[7px]">
                <Link className="font-normal text-base hover:text-white" to="/services">Services</Link>
              </li>
              <li>
                <Link className="font-normal text-base hover:text-white" to="/how-it-works">How it Works</Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2 md:col-span-6 col-span-12 px-[15px]">
            <h4 className="mb-[26px] font-bold text-xl text-white">QUICK LINKS</h4>
            <ul>
              <li className="mb-[7px]">
                <Link className="font-normal text-base hover:text-white" to="/certificate">Certificate</Link>
              </li>
              <li className="mb-[7px]">
                <Link className="font-normal text-base hover:text-white" to="/branches">Branches</Link>
              </li>
              <li className="mb-[7px]">
                <Link className="font-normal text-base hover:text-white" to="/career">Career</Link>
              </li>
              <li>
                <Link className="font-normal text-base hover:text-white" to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3 md:col-span-6 col-span-12 px-[15px]">
            <h4 className="mb-[26px] font-bold text-xl text-white">Contact Us</h4>
            <ul>
              <li className="mb-[19px]">
                <p className="font-normal text-base hover:text-white" to="/">#158, 1st Floor, 1st Main, 1st 'N' Block, Rajaji Nagara, Bengaluru - 560010</p>
              </li>
              <li className="mb-[19px]">
                <Link className="font-normal text-base hover:text-white" to="tel:080-23571795">080-23571795</Link>
              </li>
              <li>
                <Link className="font-normal text-base hover:text-white" to="mailto:info@mykcpl.com">info@mykcpl.com</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between py-[31px]">
          <span className="font-normal text-sm text-center">© 2023 KCPL. All rights reserved.</span>
          <span className="font-normal text-base text-right mr-5 md:mr-0">
            <span className="text-[#888888]">Designed by – </span>
            <Link to="https://www.emswebtech.com">EMS Webtech</Link>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Footer;