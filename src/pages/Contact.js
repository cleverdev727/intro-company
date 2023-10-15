import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";

const Contact = () => {
  return (
    <>
      <Breadcrumb label="Contact Us" />
      <div className="flex max-w-[1200px] mx-auto px-[15px] py-[50px]">
        <div className="w-full lg:w-7/12 mx-auto px-[15px]">
          <div className="p-[50px] pt-[45px] bg-[#024180] rounded-[10px]">
            <form method="post">
              <div className="mb-5">
                <label className="font-normal text-base text-white">Name</label>
                <input type="text" className="w-full bg-white rounded-[3px] font-normal text-base text-[#808080] p-[10px] outline-none" />
              </div>
              <div className="mb-5">
                <label className="font-normal text-base text-white">Email</label>
                <input type="email" className="w-full bg-white rounded-[3px] font-normal text-base text-[#808080] p-[10px] outline-none" />
              </div>
              <div className="mb-5">
                <label className="font-normal text-base text-white">Phone Number</label>
                <input type="text" className="w-full bg-white rounded-[3px] font-normal text-base text-[#808080] p-[10px] outline-none" />
              </div>
              <div className="mb-5">
                <label className="font-normal text-base text-white">Subject</label>
                <input type="text" className="w-full bg-white rounded-[3px] font-normal text-base text-[#808080] p-[10px] outline-none" />
              </div>
              <div className="mb-5">
                <label className="font-normal text-base text-white">Message</label>
                <textarea className="w-full bg-white rounded-[3px] font-normal text-base text-[#808080] p-[10px] outline-none" />
              </div>
              <button className="relative bg-[#e25712] font-medium text-lg text-white rounded-[5px] shadow-link-button overflow-hidden">
                <div className="relative flex pt-[13px] pb-[11px] px-[26px] before:absolute
                before:w-full before:h-full before:bg-success before:top-0 before:left-0 before:rounded-[5px] before:max-h-0 before:hover:max-h-16 before:transition-all before:duration-700">
                  <span className="relative">Send Message</span>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;