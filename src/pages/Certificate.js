import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import SquareCertificate from "../components/common/SquareCertificate";

const Certificate = () => {
  return (
    <>
      <Breadcrumb label="LICENSES & CERTIFICATIONS" />
      <div className="grid grid-cols-3 gap-x-[30px] gap-y-[25px] max-w-[1200px] mx-auto py-[60px] px-[15px]">
        <SquareCertificate header='Company Registration <br />on MCA Website' subHeader="Corporate Identity No:" num="U65992KA2012PTC062100" />
        <SquareCertificate header='Certificate of incorporation <br />with PAN.' subHeader="PAN No:" num="AAECK7836P" />
        <SquareCertificate header='Certificate of incorporation <br />with TAN.' subHeader="TAN No:" num="BLRK15354" />
        <SquareCertificate header='Certificate of incorporation <br />with CIN.' subHeader="CIN No:" num="U65992KA2012PTC062100" />
        <SquareCertificate header='Certificate of incorporation <br />with GST.' subHeader="GST No:" num="29AAECK7836PIZN" />
        <SquareCertificate header='Certificate of incorporation <br />with ISO.' subHeader="ISO No:" num="ISO 9001:2015" />
      </div>
    </>
  );
};
export default Certificate;