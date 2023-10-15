import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import SquareBranch from "../components/common/SquareBranch";

const Branches = () => {
  return (
    <>
      <Breadcrumb label="OUR BRANCH OFFICE LOCATIONS" />
      <div className="py-[50px] bg-[#F4FAFF]">
        <div className="max-w-[1200px] mx-auto px-[15px]">
          <div>
            <h3 className="font-semibold text-[1.75rem] text-center mb-5">Shivamoga</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[25px]">
              <SquareBranch location="Sagara" address="#126, Swastik Building, Church Road, Joseph Nagara Sagar Karnataka 577401" phone="7338696050" />
              <SquareBranch location="Sagara" address="#126, Swastik Building, Church Road, Joseph Nagara Sagar Karnataka 577401" phone="7338696050" />
              <SquareBranch location="Sagara" address="#126, Swastik Building, Church Road, Joseph Nagara Sagar Karnataka 577401" phone="7338696050" />
              <SquareBranch location="Sagara" address="#126, Swastik Building, Church Road, Joseph Nagara Sagar Karnataka 577401" phone="7338696050" />
              <SquareBranch location="Sagara" address="#126, Swastik Building, Church Road, Joseph Nagara Sagar Karnataka 577401" phone="7338696050" />
              <SquareBranch location="Sagara" address="#126, Swastik Building, Church Road, Joseph Nagara Sagar Karnataka 577401" phone="7338696050" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Branches;