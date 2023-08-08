"use client";

import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
// import {IoMdHeartEmpty} from "react-icons/io"
// import { BsCart } from "react-icons/bs";
// import {BiMenuAltRight} from "react-icons/bi"
// import {VscChromeClose} from "react-icons/vsc"

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  //   const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center"></Wrapper>
    </header>
  );
};

export default Header;
