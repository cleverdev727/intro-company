import React from "react";
import Slider from "react-slick";
import Banner1 from "../assets/imgs/banner1.jpg";
import Banner2 from "../assets/imgs/banner2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  return (
    <>
      <Slider {...settings}>
        <img src={Banner1} alt="banner1" className="w-full" />
        <img src={Banner2} alt="banner2" className="w-full" />
      </Slider>
    </>
  );
};
export default Home;