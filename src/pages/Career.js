import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";

const Career = () => {
  return (
    <>
      <Breadcrumb label="Career" />
      <div className="max-w-[1200px] mx-auto px-[15px] py-[50px]">
        <h2 className="relative font-bold text-3xl text-center before:absolute before:bg-info before:w-[100px] before:h-[2px] before:top-[50px] before:left-[45%] mb-[30px]">Current Openings</h2>
        <div className="flex">
          <div className="w-7/12 px-[15px]">
            <table>
              <thead>
                <tr className="text-white">
                  <th className="p-[10px] border border-[#dddddd] bg-[#024180]">SI NO.</th>
                  <th className="p-[10px] border border-[#dddddd] bg-[#024180]">Job Position</th>
                  <th className="p-[10px] border border-[#dddddd] bg-[#024180]">Qualification</th>
                  <th className="p-[10px] border border-[#dddddd] bg-[#024180]">Experience</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-[#eee]">
                  <td className="p-[10px] border border-[#dddddd] text-center">1</td>
                  <td className="p-[10px] border border-[#dddddd] text-center">Graphic Designer</td>
                  <td className="p-[10px] border border-[#dddddd] text-center">Any Graduation / Any Post Graduation (B.E or B.technot applicable)</td>
                  <td className="p-[10px] border border-[#dddddd] text-center">1-5 Years</td>
                </tr>
                <tr className="even:bg-[#eee]">
                  <td className="p-[10px] border border-[#dddddd] text-center">2</td>
                  <td className="p-[10px] border border-[#dddddd] text-center">Branch Manager</td>
                  <td className="p-[10px] border border-[#dddddd] text-center">Any Graduation / Any Post Graduation</td>
                  <td className="p-[10px] border border-[#dddddd] text-center">2-5 Years</td>
                </tr>
                <tr className="even:bg-[#eee]">
                  <td className="p-[10px] border border-[#dddddd] text-center">3</td>
                  <td className="p-[10px] border border-[#dddddd] text-center">Assistant Manager</td>
                  <td className="p-[10px] border border-[#dddddd] text-center">Any Graduation / Any Post Graduation</td>
                  <td className="p-[10px] border border-[#dddddd] text-center">2-5 Years</td>
                </tr>
                <tr className="even:bg-[#eee]">
                  <td className="p-[10px] border border-[#dddddd] text-center">4</td>
                  <td className="p-[10px] border border-[#dddddd] text-center">Sales Executive</td>
                  <td className="p-[10px] border border-[#dddddd] text-center">12th / Any Graduation</td>
                  <td className="p-[10px] border border-[#dddddd] text-center">0-5 Years</td>
                </tr>
                <tr className="even:bg-[#eee]">
                  <td className="p-[10px] border border-[#dddddd] text-center">5</td>
                  <td className="p-[10px] border border-[#dddddd] text-center">Operation Executive</td>
                  <td className="p-[10px] border border-[#dddddd] text-center">Any Graduation / Any Post Graduation</td>
                  <td className="p-[10px] border border-[#dddddd] text-center">0-5 Years</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-5/12 px-[15px]">
            <div className="ml-10 p-[50px] pt-[45px] bg-white shadow-blog rounded-[10px]">
              <form method="post">
                <div className="flex mb-5">
                  <div className="w-1/2 px-1">
                    <label className="font-normal text-base">First Name</label>
                    <input type="text" className="w-full rounded-[3px] bg-slate-300 font-normal text-base text-[#808080] p-[10px] outline-none" />
                  </div>
                  <div className="w-1/2 px-1">
                    <label className="font-normal text-base">Last Name</label>
                    <input type="text" className="w-full rounded-[3px] bg-slate-300 font-normal text-base text-[#808080] p-[10px] outline-none" />
                  </div>
                </div>
                <div className="flex mb-5">
                  <div className="w-1/2 px-1">
                    <label className="font-normal text-base">Email Address</label>
                    <input type="email" className="w-full rounded-[3px] bg-slate-300 font-normal text-base text-[#808080] p-[10px] outline-none" />
                  </div>
                  <div className="w-1/2 px-1">
                    <label className="font-normal text-base">Phone Number</label>
                    <input type="text" className="w-full rounded-[3px] bg-slate-300 font-normal text-base text-[#808080] p-[10px] outline-none" />
                  </div>
                </div>
                <div className="mb-5">
                  <label className="font-normal text-base">Qualification</label>
                  <input type="text" className="w-full rounded-[3px] bg-slate-300 font-normal text-base text-[#808080] p-[10px] outline-none" />
                </div>
                <div className="mb-5">
                  <label className="font-normal text-base">Leave a comment</label>
                  <textarea className="w-full bg-slate-300 rounded-[3px] font-normal text-base text-[#808080] p-[10px] outline-none" />
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
      </div>
    </>
  );
};
export default Career;