import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import PlanWork from "../assets/imgs/plan-work.jpeg";
import Coin from "../assets/imgs/coin.jpg";
import Earning from "../assets/imgs/earning.jpg";

const HowItWorks = () => {
  return (
    <>
      <Breadcrumb label="HOW IT WORKS?" />
      <div className="max-w-[1200px] mx-auto px-[15px] py-[50px]">
        <div className="flex">
          <div className="w-1/3 px-[15px]">
            <img src={PlanWork} alt="" className="" />
          </div>
          <div className="w-2/3 px-[15px]">
            <h5 className="font-semibold text-lg text-[#f1592a]">What is a Chit ?</h5>
            <p className="font-normal text-sm text-[#333333] leading-[26px] text-justify">
              It represents a legally binding AGREEMENT between the foreman, acting as the Promoter, and the participants who voluntarily enroll. This system functions as a FINANCIAL MECHANISM, where a group of subscribers regularly contribute a predetermined amount each month for a SPECIFIED DURATION.
            </p>
            <p className="font-normal text-sm text-[#333333] leading-[26px] text-justify">
              Each month, the accumulated funds are made available to the subscribers through AUCTIONS, during which participants place BIDS for the highest DISCOUNT. The individual with the winning bid receives the PRIZE AMOUNT, subject to appropriate security measures. A Prized subscriber is also obligated to continue paying their subscriptions until the chit's conclusion. The portion of the discount, minus the foreman's commission, is then distributed among the subscribers as DIVIDENDS.
            </p>
            <br />
            <h5 className="font-semibold text-lg text-[#f1592a]">What is a Chit Group?</h5>
            <p className="font-normal text-sm text-[#333333] leading-[26px] text-justify">
              A Chit group is a term used to describe a predefined group of members who collectively agree to contribute a predetermined amount of money over a specified period. For instance, a Chit group could consist of 50 members, spanning 50 months, with each member contributing Rs. 500 per month. It's essential to note that in a Chit group, the number of members and the duration of the contribution period are always equal.
            </p>
            <br />
            <h5 className="font-semibold text-lg text-[#f1592a]">Who is a Foreman?</h5>
            <p className="font-normal text-sm text-[#333333] leading-[26px] text-justify">
              Under the provisions of the Act, an individual responsible for overseeing the operations of the chit is defined as a "Chit Group Supervisor." This term encompasses any person who plays a role in managing the chit, including individuals like branch managers who are carrying out their designated responsibilities within the chit framework.
            </p>
          </div>
        </div>
        <div className="flex p-[25px] mb-[15px] border border-[#ccc]">
          <div className="w-2/3 px-[15px]">
            <h5 className="font-semibold text-lg text-[#f1592a]">Is the agreement between the subscribers and the foreman considered valid indefinitely?</h5>
            <p className="font-normal text-sm text-[#333333] leading-[26px] text-justify">
              No. It remains in force exclusively for the duration of a CHIT GROUP and until all the financial obligations between subscribers and the foreman are completely settled and paid in full
            </p>
            <br />
            <h5 className="font-semibold text-lg text-[#f1592a]">How do chit subscribers benefit ?</h5>
            <ul className="text-sm list-disc">
              <li>Enables to save in small amounts to recieve a lumpsum</li>
              <li>Enables the subscribers to borrow as well as save.</li>
            </ul>
          </div>
          <div className="w-1/3 px-[15px]">
            <img src={Coin} alt="" className="" />
          </div>
        </div>
        <div className="flex p-[25px] mb-[15px] border border-[#ccc]">
          <div className="w-1/3 px-[15px]">
            <img src={Earning} alt="earning" className="w-4/5 mx-auto" />
          </div>
          <div className="w-2/3 px-[15px]">
            <h5 className="font-semibold text-lg text-[#f1592a]">What is a Chit Agreement?</h5>
            <p className="font-normal text-sm text-[#333333] leading-[26px] text-justify mb-[10px]">
              The Chit agreement serves as a contractual arrangement between the foreman and the individual participants in a chit group. It comprises a set of rules and regulations governing the procedures for conducting chits. This agreement is executed in duplicate and must be properly witnessed. Key elements within the chit agreements include:
            </p>
            <ul className="text-sm list-disc">
              <li>Subscriber's name and address.</li>
              <li>Allocation of tickets to the subscriber.</li>
              <li>Number of installments and their respective amounts.</li>
              <li>Stipulations regarding interest or penalties for delayed payments.</li>
              <li>Anticipated start date and duration of the chit.</li>
              <li>The process for determining prize winners during each installment.</li>
              <li>Maximum discount allowable at each installment.</li>
              <li>Details concerning dividend distribution and foreman's commission.</li>
              <li>Auction date, time, and location.</li>
              <li>The installment at which the foreman receives the chit amount.</li>
              <li>Designation of the bank involved.</li>
              <li>Specifications regarding security to be provided by prized subscribers.</li>
            </ul>
            <br />
            <p className="font-normal text-sm text-[#333333] leading-[26px] text-justify mb-[10px]">
              In practice, each subscriber typically endorses a declaration within the application form, confirming their understanding and acceptance of the terms and conditions outlined in the Chit Agreement. These declarations from all subscribers are then detached from the application forms, consolidated onto a separate sheet of paper, and filed with the registrar.
            </p>
          </div>
        </div>
        <div className="p-[25px] mb-[15px] border border-[#ccc]">
          <h5 className="font-semibold text-lg text-[#f1592a]">How is the group constituted in a chit fund?</h5>
          <p className="font-normal text-sm text-[#333333] leading-[26px] text-justify mb-[10px]">
            Subscribers are required to complete an application form, providing details such as their full names, both residential and office addresses, approximate gross monthly income, the names of their nominated individuals, and their respective relationships. Additionally, they are expected to confirm their understanding of the terms and conditions outlined in the Chit Agreement by signing a declaration.
          </p>
        </div>
      </div>
    </>
  );
};
export default HowItWorks;