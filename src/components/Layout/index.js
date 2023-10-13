import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Whatsapp from "../../assets/imgs/whatsapp.gif";
import Call from "../../assets/imgs/call.gif";
import ArrowUp from "../../assets/imgs/up-arrow.png";

const Layout = () => {
  const [showArrowUp, setShowArrowUp] = useState(false);
  useEffect(() => {
    window.onscroll = function() {
      console.log('scrolling...');
      console.log(window.scrollY);
      setShowArrowUp(window.scrollY >= 200);
    }
  }, []);
  const scrollToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  useEffect(() => {
    console.log(showArrowUp);
  }, [showArrowUp]);

  return <div>
    <Header />
    <Outlet />
    <Footer />
    <Link to="https://wa.me/+917090666444">
      <img src={Whatsapp} alt="whatsapp" className="fixed w-[60px] h-[60px] right-[10px] bottom-[50px]" />
    </Link>
    <Link to="tel:+917090666444">
      <img src={Call} alt="call" className="fixed w-[60px] h-[60px] left-[10px] bottom-[50px]" />
    </Link>
    <img src={ArrowUp} alt="arrow-up" className={`w-8 h-8 cursor-pointer transition-all fixed bottom-[10px] right-[10px] z-20 ${showArrowUp ? 'opacity-100' : 'opacity-0'}`} onClick={scrollToUp} />
  </div>
}
export default Layout;