"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";


const HeroSlide = () => {
 
  return (
    <div className="container relative text-white text-[20px] w-full max-w-[1360px] mx-auto ">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        width="100%"
        showStatus={false}
        showIndicators={false}
      >
        <div>
          <Image
            className="aspect-[16/10] md:aspect-auto object-cover w-9/12 h-fit flex items-center justify-center rounded-xl "
            src="/1.png"
            alt="slide"
            width={1000}
            height={100}
          />
          <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] bg-white rounded-r-2xl absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            Shop Now
          </div>
        </div>
        <div>
          <Image
            className="aspect-[16/10] md:aspect-auto object-cover w-9/12 h-fit flex items-center justify-center rounded-xl "
            src="/2.png"
            alt="slide"
            width={1000}
            height={100}
          />
          <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] bg-white rounded-r-2xl absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            Shop Now
          </div>
        </div>
        <div>
          <Image
            className="aspect-[16/10] md:aspect-auto object-cover w-9/12 h-fit flex items-center justify-center rounded-xl "
            src="/3.png"
            alt="slide"
            width={1000}
            height={100}
          />
          <div className="px-[10px] md:px-[40px] py-[6px] md:py-[25px] bg-white rounded-r-2xl absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            Shop Now
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroSlide;
