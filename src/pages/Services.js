import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import SquareService from "../components/common/SquareService";
import Service1 from "../assets/imgs/service1.jpg";
import Service2 from "../assets/imgs/service2.jpg"
import Service3 from "../assets/imgs/service3.jpg"
import Service4 from "../assets/imgs/service4.jpg"
import Service5 from "../assets/imgs/service5.jpg"
import Service6 from "../assets/imgs/service6.jpeg"
import Service7 from "../assets/imgs/service7.jpg"
import Service8 from "../assets/imgs/service8.jpg"
import Service9 from "../assets/imgs/service9.jpg"

const Services = () => {
  return (
    <>
      <Breadcrumb label="KCPL SERVICES" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[15px] max-w-[1200px] mx-auto px-[15px] py-[50px]">
        <SquareService imgUrl={Service1} header="Customer App" content="Each subscriber will receive an app and login details. This app will contain all their transaction info, auction dates, payment details, chit details, and more." />
        <SquareService imgUrl={Service2} header="Doorstep Collection" content="Customers No need to travel to our branches for payments anymore. Our collection agents will come to your doorstep to collect the payment." />
        <SquareService imgUrl={Service3} header="Digitalize receipt" content="Following the bill payment, customers will receive a digitalized receipt for their records." />
        <SquareService imgUrl={Service4} header="NACH Collection" content="For ensuring a seamless experience for our customers, we've introduced NACH Collections (ECS), a system that automatically deducts the subscription amount from their bank account on the designated payment date. This payment method is mandatory for priced subscribers." />
        <SquareService imgUrl={Service5} header="UPI Collection" content="Another payment alternative is UPI Collection. With this option, subscribers interested in making payments via UPI will receive a payment link. They can conveniently use UPI payment apps like PhonePe, Google Pay, BHIM, and more to complete their transactions." />
        <SquareService imgUrl={Service6} header="Payment Gateway in customer app" content="We've integrated the payment options directly into our customer app, enabling customers to make payments conveniently within the company app itself." />
        <SquareService imgUrl={Service7} header="Auction via video conference" content="Customers will receive a Zoom App link to join the auctions. By logging in through the Zoom app, they can actively take part in the auctions, with the highest bidder earning the prized subscriber status." />
        <SquareService imgUrl={Service8} header="E-Passbook" content="Within the customer app, you'll find an E-passbook feature that holds all the details of their transactions." />
        <SquareService imgUrl={Service9} header="Instant Message" content="The company will send messages to the customer for every transaction, including bid rates and auction dates." />
      </div>
    </>
  );
};
export default Services;