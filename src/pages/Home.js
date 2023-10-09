import React from "react";
import Slider from "react-slick";
import Banner1 from "../assets/imgs/banner1.jpg";
import Banner2 from "../assets/imgs/banner2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LinkButton from "../components/common/LinkButton";
import ChitSquare from "../components/common/ChitSquare";
import Man1 from "../assets/imgs/man1.jpg";
import Door from "../assets/imgs/door.png";
import SMS from "../assets/imgs/sms.png";
import World from "../assets/imgs/world.png";
import Select from "../assets/imgs/select.png";
import Adduser from "../assets/imgs/adduser.png";
import SavingMoney from "../assets/imgs/saving-money.png";
import Hands from "../assets/imgs/hands.png";
import Goal from "../assets/imgs/goal.png";
import Power from "../assets/imgs/power.jpg";
import Tv5 from "../assets/imgs/tv-5.jpg";
import News from "../assets/imgs/news.jpg";
import AyushTv from "../assets/imgs/ayush-tv.jpg";
import Zee from "../assets/imgs/zee.jpg";
import Colors from "../assets/imgs/colors.jpg";
import Cv9 from "../assets/imgs/cv-9.jpg";
import PublicTv from "../assets/imgs/public-tv.jpg";
import Star from "../assets/imgs/star.jpg";
import News1 from "../assets/imgs/news-1.jpg";
import News24 from "../assets/imgs/news-24.jpg";
import News18 from "../assets/imgs/news-18.jpg";
import BTv from "../assets/imgs/b-tv.jpg";
import FiveStar from "../assets/imgs/star.png";
import User1 from "../assets/imgs/user1.jpg";
import Blog from "../components/common/Blog";
import BlogUser from "../assets/imgs/blog-user.jpeg";
import Dots from "../assets/imgs/dots.png";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    className: "flex"
  };

  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    className: "flex"
  };

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    className: "flex"
  };

  return (
    <>
      <Slider {...settings}>
        <img src={Banner1} alt="banner1" className="w-full" />
        <img src={Banner2} alt="banner2" className="w-full" />
      </Slider>
      <div className="grid grid-cols-12 max-w-[1200px] mx-auto py-[25px] px-[15px]">
        <div className="xl:col-span-3 lg:col-span-2"></div>
        <div className="xl:col-span-3 lg:col-span-4 flex justify-center">
          <LinkButton link="/certificate" label="View Certificates" />
        </div>
        <div className="xl:col-span-3 lg:col-span-4 flex justify-center">
          <LinkButton link="tel:+917090666444" label="Call Us - 7090666444" />
        </div>
        <div className="xl:col-span-3 lg:col-span-2"></div>
      </div>
      <div className="max-w-[1200px] mx-auto py-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-[30px] gap-y-[40px] mb-10">
          <ChitSquare num={3} price="15,000" duration={20} />
          <ChitSquare num={3} price="10,000" duration={30} />
          <ChitSquare num={5} price="25,000" duration={20} />
          <ChitSquare num={5} price="20,000" duration={25} />
          <ChitSquare num={10} price="33,333" duration={30} />
          <ChitSquare num={25} price="62,500" duration={40} />
          <ChitSquare num={50} price="1,25,500" duration={40} />
          <ChitSquare num={1} price="2,00,500" duration={50} />
        </div>
        <div className="flex justify-center mb-10">
          <LinkButton link="/plans" label="View All Chits" />
        </div>
      </div>
      <div className="bg-[#F5FAFF]">
        <div className="pt-[90px] pb-20 max-w-[1200px] mx-auto">
          <div className="px-[15px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center">
            <div className="px-[15px]">
              <p className="font-bold text-[70px] text-primary mb-[17px]">800</p>
              <p className="font-medium text-base text-orange">Number of Employees</p>
            </div>
            <div className="px-[15px]">
              <p className="font-bold text-[70px] text-primary mb-[17px]">40</p>
              <p className="font-medium text-base text-orange">Number of Branches</p>
            </div>
            <div className="px-[15px]">
              <p className="font-bold text-[70px] text-primary mb-[17px]">1500</p>
              <p className="font-medium text-base text-orange">Number of Advisor</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[50px]">
        <div className="max-w-[1200px] px-[15px] mx-auto mb-[50px] text-center">
          <p className="font-medium text-[15px] text-light-success">About Us</p>
          <h1 className="relative font-bold text-2xl mb-[30px] before:absolute before:bg-info before:w-[100px] before:h-[2px] before:top-[50px] before:left-[45%]">Kodachadri Chits Pvt. Ltd.</h1>
          <p className="font-normal text-sm leading-[26px] text-[#333333]">
            Kodachadri Chits Pvt Ltd(KCPL) is a government-approved chit fund company that has been in the industry for over 17 long years. Karnataka’s No. 1 chit fund company, KCPL is a flagship company of Kodachadri Group of Companies established in 2006 in Bengaluru. The company operates throughout Karnataka with its Corporate Office in Rajajinagara.
          </p>
          <br />
          <div className="flex justify-center">
            <LinkButton link="/about" label="Read More" />
          </div>
        </div>
        <hr className="py-[16px] border-t border-black-opacity" />
        <div className="max-w-[1200px] px-[15px] mx-auto">
          <div className="flex justify-between py-[15px] px-[25px] bg-light-info">
            <div className="w-1/3 px-[15px]">
              <img src={Man1} alt="man1" className="" />
            </div>
            <div className="w-7/12 px-[15px]">
              <h1 className="font-semibold text-[25px]">Mr. Parashuram K N</h1>
              <h4 className="font-medium text-base">Managing Director of KCPL</h4>
              <br />
              <p className="font-normal text-sm leading-[26px] text-[#333333]">
                Mr. Parashuram K N, a seasoned professional boasting over two decades of extensive experience in IT, administration, and project management, has played a pivotal and instrumental role in steering the success and robust growth of Kodachadri Chits Pvt Ltd.
              </p>
              <p className="font-normal text-sm leading-[26px] text-[#333333]">
                Originating from the city of Shivamogga, Mr. Parashruram K N has consistently led from the forefront since assuming the role of Managing Director.  Under his astute leadership, Kodachadri Chit Funds Private Limited is firmly on track to ascend as the premier Chit fund company in India. His approach  is deeply customer-centric, marked by effective technological integration, allowing customers to invest, monitor their balances, and execute transactions seamlessly via the mobile app from the comfort of their homes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto pt-[50px] pb-[70px] px-[15px]">
        <h2 className="relative font-bold text-3xl text-center before:absolute before:bg-info before:w-[100px] before:h-[2px] before:top-[50px] before:left-[45%] mb-[50px]">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[30px]">
          <div className="relative flex justify-between px-2 items-center before:absolute before:bg-[#ededed] before:w-[3px] before:h-[100px] before:-top-[9px] before:right-0 before:rounded-sm">
            <div className="flex justify-center items-center w-20 h-20 bg-[#f7f7f7] rounded-full px-2 shrink-0">
              <img src={Door} alt="door" className="max-w-full" />
            </div>
            <h4 class="font-semibold text-base">Door Step Collection</h4>
          </div>
          <div className="relative flex justify-between px-2 items-center before:absolute before:bg-[#ededed] before:w-[3px] before:h-[100px] before:-top-[9px] before:right-0 before:rounded-sm">
            <div className="flex justify-center items-center w-20 h-20 bg-[#f7f7f7] rounded-full px-2 shrink-0">
              <img src={SMS} alt="sms" className="max-w-full" />
            </div>
            <h4 class="font-semibold text-base">SMS Intimationn for every trasaction</h4>
          </div>
          <div className="relative flex justify-between px-2 items-center before:absolute before:bg-[#ededed] before:w-[3px] before:h-[100px] before:-top-[9px] before:right-0 before:rounded-sm">
            <div className="flex justify-center items-center w-20 h-20 bg-[#f7f7f7] rounded-full px-2 shrink-0">
              <img src={World} alt="world" className="max-w-full" />
            </div>
            <h4 class="font-semibold text-base">Digitalizing Receipt</h4>
          </div>
          <div className="relative flex px-2 items-center">
            <div className="flex justify-center items-center w-20 h-20 bg-[#f7f7f7] rounded-full px-2 shrink-0 mr-4">
              <img src={Select} alt="world" className="max-w-full" />
            </div>
            <h4 class="font-semibold text-base">E-Passbook</h4>
          </div>
        </div>
        <br />
        <div className="flex justify-center">
          <LinkButton link="/services" label="Read More" />
        </div>
      </div>
      <div className="py-[50px] bg-primary">
        <div className="max-w-[1200px] mx-auto px-[15px]">
          <h2 className="relative font-bold text-3xl text-white text-center before:absolute before:bg-info before:w-[100px] before:h-[2px] before:top-[50px] before:left-[45%] mb-[60px]">Why Kodachadri Chits</h2>
          <div className="flex justify-center">
            <div className="w-5/12 px-[15px]">
              <iframe width="100%" height="340" src="https://www.youtube.com/embed/uGK-MdHFuLE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="rounded-[25px]"></iframe>
            </div>
            <div className="w-5/12 px-[15px] font-semibold text-lg text-orange">
              <div className="flex items-center bg-white p-[10px] my-[5px] rounded-[5px]">
                <div className="w-1/4 px-[15px]">
                  <img src={Adduser} alt="adduser" className="w-[60px]" />
                </div>
                <div className="w-3/4 px-[15px]">
                  <h4>Sign-up &amp; Complete eKYC</h4>
                </div>
              </div>
              <div className="flex items-center bg-white p-[10px] my-[5px] rounded-[5px]">
                <div className="w-1/4 px-[15px]">
                  <img src={SavingMoney} alt="savingmoney" className="w-[60px]" />
                </div>
                <div className="w-3/4 px-[15px]">
                  <h4>Start saving Monthly</h4>
                </div>
              </div>
              <div className="flex items-center bg-white p-[10px] my-[5px] rounded-[5px]">
                <div className="w-1/4 px-[15px]">
                  <img src={Hands} alt="savingmoney" className="w-[60px]" />
                </div>
                <div className="w-3/4 px-[15px]">
                  <h4>Participate in weekly E-Auctions</h4>
                </div>
              </div>
              <div className="flex items-center bg-white p-[10px] my-[5px] rounded-[5px]">
                <div className="w-1/4 px-[15px]">
                  <img src={Goal} alt="savingmoney" className="w-[60px]" />
                </div>
                <div className="w-3/4 px-[15px]">
                  <h4>Realize your Goals</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto py-[50px] px-[15px]">
        <h2 class="relative font-bold text-3xl text-center before:absolute before:bg-info before:w-[100px] before:h-[2px] before:top-[50px] before:left-[45%] mb-[60px]">Our Media Partners</h2>
        <Slider {...settings1}>
          <img src={Power} alt="power" />
          <img src={Tv5} alt="Tv5" />
          <img src={News} alt="News" />
          <img src={AyushTv} alt="AyushTv" />
          <img src={Zee} alt="Zee" />
          <img src={Colors} alt="Colors" />
          <img src={Cv9} alt="Cv9" />
          <img src={PublicTv} alt="PublicTv" />
          <img src={Star} alt="Star" />
          <img src={News1} alt="News1" />
          <img src={News24} alt="News24" />
          <img src={News18} alt="News18" />
          <img src={BTv} alt="BTv" />
        </Slider>
      </div>
      <div className="bg-[#F4FAFF]">
        <div className="max-w-[1200px] mx-auto py-[60px] px-[15px]">
          <h2 class="relative font-bold text-3xl text-center before:absolute before:bg-info before:w-[100px] before:h-[2px] before:top-[50px] before:left-[45%] mb-[60px]">Our Clients Says</h2>
          <Slider {...settings2} className="mb-10">
            <div className="px-[15px]">
              <div className="bubble-tag relative p-10 pt-[35px] bg-white shadow-buble-content rounded-[10px] rounded-bl-none mb-[30px] before:absolute before:bg-white before:w-[30px] before:h-[30px] before:left-0 before:-bottom-7 before:shadow-buble-tag">
                <ul className="flex mb-[15px]">
                  <li className="mr-[5px]">
                    <img src={FiveStar} alt="FiveStar" className="w-4" />
                  </li>
                  <li className="mr-[5px]">
                    <img src={FiveStar} alt="FiveStar" className="w-4" />
                  </li>
                  <li className="mr-[5px]">
                    <img src={FiveStar} alt="FiveStar" className="w-4" />
                  </li>
                  <li className="mr-[5px]">
                    <img src={FiveStar} alt="FiveStar" className="w-4" />
                  </li>
                  <li className="mr-[5px]">
                    <img src={FiveStar} alt="FiveStar" className="w-4" />
                  </li>
                </ul>
                <p className="font-normal text-sm leading-[26px] text-[#141417] text-justify">
                  Kodachadri chit fund forms a very popular method of savings and borrowing and being ensure 100% safety and reliability and transference operations. It is the only one way of getting the money in zero rate of interest. Thanks for providing good service.
                </p>
              </div>
              <div className="flex">
                <img src={User1} alt="user1" className="w-[70px] h-[70px] rounded-full shadow-review-user mr-5" />
                <h4 className="font-semibold text-base text-[#141417] mt-2">Mr Prabakr V (Business Man)</h4>
              </div>
            </div>
            <div className="px-[15px]">
              <div className="bubble-tag relative p-10 pt-[35px] bg-white shadow-buble-content rounded-[10px] rounded-bl-none mb-[30px] before:absolute before:bg-white before:w-[30px] before:h-[30px] before:left-0 before:-bottom-7 before:shadow-buble-tag">
                <ul className="flex mb-[15px]">
                  <li className="mr-[5px]">
                    <img src={FiveStar} alt="FiveStar" className="w-4" />
                  </li>
                  <li className="mr-[5px]">
                    <img src={FiveStar} alt="FiveStar" className="w-4" />
                  </li>
                  <li className="mr-[5px]">
                    <img src={FiveStar} alt="FiveStar" className="w-4" />
                  </li>
                  <li className="mr-[5px]">
                    <img src={FiveStar} alt="FiveStar" className="w-4" />
                  </li>
                  <li className="mr-[5px]">
                    <img src={FiveStar} alt="FiveStar" className="w-4" />
                  </li>
                </ul>
                <p className="font-normal text-sm leading-[26px] text-[#141417] text-justify">
                  Kodachadri chit fund forms a very popular method of savings and borrowing and being ensure 100% safety and reliability and transference operations. It is the only one way of getting the money in zero rate of interest. Thanks for providing good service.
                </p>
              </div>
              <div className="flex">
                <img src={User1} alt="user1" className="w-[70px] h-[70px] rounded-full shadow-review-user mr-5" />
                <h4 className="font-semibold text-base text-[#141417] mt-2">Mr Prabakr V (Business Man)</h4>
              </div>
            </div>
            <div className="px-[15px]">
              <div className="bubble-tag relative p-10 pt-[35px] bg-white shadow-buble-content rounded-[10px] rounded-bl-none mb-[30px] before:absolute before:bg-white before:w-[30px] before:h-[30px] before:left-0 before:-bottom-7 before:shadow-buble-tag">
                <ul className="flex mb-[15px]">
                  <li className="mr-[5px]">
                    <img src={FiveStar} alt="FiveStar" className="w-4" />
                  </li>
                  <li className="mr-[5px]">
                    <img src={FiveStar} alt="FiveStar" className="w-4" />
                  </li>
                  <li className="mr-[5px]">
                    <img src={FiveStar} alt="FiveStar" className="w-4" />
                  </li>
                  <li className="mr-[5px]">
                    <img src={FiveStar} alt="FiveStar" className="w-4" />
                  </li>
                  <li className="mr-[5px]">
                    <img src={FiveStar} alt="FiveStar" className="w-4" />
                  </li>
                </ul>
                <p className="font-normal text-sm leading-[26px] text-[#141417] text-justify">
                  Kodachadri chit fund forms a very popular method of savings and borrowing and being ensure 100% safety and reliability and transference operations. It is the only one way of getting the money in zero rate of interest. Thanks for providing good service.
                </p>
              </div>
              <div className="flex">
                <img src={User1} alt="user1" className="w-[70px] h-[70px] rounded-full shadow-review-user mr-5" />
                <h4 className="font-semibold text-base text-[#141417] mt-2">Mr Prabakr V (Business Man)</h4>
              </div>
            </div>
            <div className="px-[15px]">
              <div className="bubble-tag relative p-10 pt-[35px] bg-white shadow-buble-content rounded-[10px] rounded-bl-none mb-[30px] before:absolute before:bg-white before:w-[30px] before:h-[30px] before:left-0 before:-bottom-7 before:shadow-buble-tag">
                <ul className="flex mb-[15px]">
                  <li className="mr-[5px]">
                    <img src={FiveStar} alt="FiveStar" className="w-4" />
                  </li>
                  <li className="mr-[5px]">
                    <img src={FiveStar} alt="FiveStar" className="w-4" />
                  </li>
                  <li className="mr-[5px]">
                    <img src={FiveStar} alt="FiveStar" className="w-4" />
                  </li>
                  <li className="mr-[5px]">
                    <img src={FiveStar} alt="FiveStar" className="w-4" />
                  </li>
                  <li className="mr-[5px]">
                    <img src={FiveStar} alt="FiveStar" className="w-4" />
                  </li>
                </ul>
                <p className="font-normal text-sm leading-[26px] text-[#141417] text-justify">
                  Kodachadri chit fund forms a very popular method of savings and borrowing and being ensure 100% safety and reliability and transference operations. It is the only one way of getting the money in zero rate of interest. Thanks for providing good service.
                </p>
              </div>
              <div className="flex">
                <img src={User1} alt="user1" className="w-[70px] h-[70px] rounded-full shadow-review-user mr-5" />
                <h4 className="font-semibold text-base text-[#141417] mt-2">Mr Prabakr V (Business Man)</h4>
              </div>
            </div>
            <div className="px-[15px]">
              <div className="bubble-tag relative p-10 pt-[35px] bg-white shadow-buble-content rounded-[10px] rounded-bl-none mb-[30px] before:absolute before:bg-white before:w-[30px] before:h-[30px] before:left-0 before:-bottom-7 before:shadow-buble-tag">
                <ul className="flex mb-[15px]">
                  <li className="mr-[5px]">
                    <img src={FiveStar} alt="FiveStar" className="w-4" />
                  </li>
                  <li className="mr-[5px]">
                    <img src={FiveStar} alt="FiveStar" className="w-4" />
                  </li>
                  <li className="mr-[5px]">
                    <img src={FiveStar} alt="FiveStar" className="w-4" />
                  </li>
                  <li className="mr-[5px]">
                    <img src={FiveStar} alt="FiveStar" className="w-4" />
                  </li>
                  <li className="mr-[5px]">
                    <img src={FiveStar} alt="FiveStar" className="w-4" />
                  </li>
                </ul>
                <p className="font-normal text-sm leading-[26px] text-[#141417] text-justify">
                  Kodachadri chit fund forms a very popular method of savings and borrowing and being ensure 100% safety and reliability and transference operations. It is the only one way of getting the money in zero rate of interest. Thanks for providing good service.
                </p>
              </div>
              <div className="flex">
                <img src={User1} alt="user1" className="w-[70px] h-[70px] rounded-full shadow-review-user mr-5" />
                <h4 className="font-semibold text-base text-[#141417] mt-2">Mr Prabakr V (Business Man)</h4>
              </div>
            </div>
            <div className="px-[15px]">
              <div className="bubble-tag relative p-10 pt-[35px] bg-white shadow-buble-content rounded-[10px] rounded-bl-none mb-[30px] before:absolute before:bg-white before:w-[30px] before:h-[30px] before:left-0 before:-bottom-7 before:shadow-buble-tag">
                <ul className="flex mb-[15px]">
                  <li className="mr-[5px]">
                    <img src={FiveStar} alt="FiveStar" className="w-4" />
                  </li>
                  <li className="mr-[5px]">
                    <img src={FiveStar} alt="FiveStar" className="w-4" />
                  </li>
                  <li className="mr-[5px]">
                    <img src={FiveStar} alt="FiveStar" className="w-4" />
                  </li>
                  <li className="mr-[5px]">
                    <img src={FiveStar} alt="FiveStar" className="w-4" />
                  </li>
                  <li className="mr-[5px]">
                    <img src={FiveStar} alt="FiveStar" className="w-4" />
                  </li>
                </ul>
                <p className="font-normal text-sm leading-[26px] text-[#141417] text-justify">
                  Kodachadri chit fund forms a very popular method of savings and borrowing and being ensure 100% safety and reliability and transference operations. It is the only one way of getting the money in zero rate of interest. Thanks for providing good service.
                </p>
              </div>
              <div className="flex">
                <img src={User1} alt="user1" className="w-[70px] h-[70px] rounded-full shadow-review-user mr-5" />
                <h4 className="font-semibold text-base text-[#141417] mt-2">Mr Prabakr V (Business Man)</h4>
              </div>
            </div>
          </Slider>
          <div className="flex">
            <div className="w-1/2 px-[15px]">
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/M7UBz7uuuEA" title="YouTube video player" frameborder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="rounded-[25px]"></iframe>
            </div>
            <div className="w-1/2 px-[15px]">
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/-yA0bnxyClA" title="YouTube video player" frameborder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="rounded-[25px]"></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto py-[100px] px-[15px]">
        <h2 class="relative font-bold text-3xl text-center before:absolute before:bg-info before:w-[100px] before:h-[2px] before:top-[50px] before:left-[45%] mb-[60px]">Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="px-[15px]">
            <Blog imgUrl={BlogUser} heading="Digitally Empowering Customers: Kodachadri Chit Funds' Tech-Driven Initiatives" content="In an era dominated by technological advancements, businesses across industries are embracing digital transformation to enhance customer experiences." />
          </div>
          <div className="px-[15px]">
            <Blog imgUrl={BlogUser} heading="Digitally Empowering Customers: Kodachadri Chit Funds' Tech-Driven Initiatives" content="In an era dominated by technological advancements, businesses across industries are embracing digital transformation to enhance customer experiences." />
          </div>
          <div className="px-[15px]">
            <Blog imgUrl={BlogUser} heading="Digitally Empowering Customers: Kodachadri Chit Funds' Tech-Driven Initiatives" content="In an era dominated by technological advancements, businesses across industries are embracing digital transformation to enhance customer experiences." />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;