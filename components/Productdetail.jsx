"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Image from "next/image";

const Productdetail = () => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        <img src="/product-1.png" alt="img1" />
        <img src="/12.jpeg" alt="img2" />
        <img src="/11.png" alt="img3" />
        <img src="/13.jpeg" alt="img4" />
        <img src="/14.jpeg" alt="img5" />
        <img src="/15.jpeg" alt="img6" />
        <img src="/16.jpeg" alt="img7" />
      </Carousel>
    </div>
  );
};

export default Productdetail;
