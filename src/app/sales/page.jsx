import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="p-2 m-3 md:p-10 md:m-10 ">
      <Image
        src="https://media.istockphoto.com/id/1424000231/photo/travel-accessories-costumes-the-cost-of-travel-maps-prepared-for-the-trip-travel-planning.jpg?s=612x612&w=0&k=20&c=t97NZ44QthsdEMlpHuHvQZHt4BUnMLguj7OUpuVmpbM="
        alt=""
        image
        width={1000}
        height={500}
        className="w-full h-[40vh] md:h-[70vh] md:w-[90%] rounded-tl-[100%] rounded-br-[20%]"
      />
      <div className="absolute hidden md:block top-[7rem] left-[21rem] leading-none lg:leading-tight p-2 text-black/[0.8] hover:opacity-95 ">
        <h1 className=" text-green-300 text-[40px] lg:text-[75px] font-bold font-Mynerve  cursor-pointer">
          Get 30% Off
        </h1>
        <span className="text-green-300 text-[40px] lg:text-[75px] font-bold  font-Mynerve cursor-pointer">
          New Collection
        </span>
      </div>
      <div className="absolute top-[6rem] left-[6rem] md:top-[17rem] md:right-[13rem] leading-tight text-black">
        <div className="text-green-500 text-[40px] font-normal md:text-[70px] md:font-extrabold font-Lumanosimo cursor-pointer">
          NEW
        </div>
        <div className="text-green-500 text-[40px] font-normal md:text-[70px] md:font-extrabold font-Lumanosimo cursor-pointer">
          NEW
        </div>
        <div className="text-green-500 text-[40px] font-normal md:text-[70px] md:font-extrabold font-Lumanosimo cursor-pointer">
          NEW
        </div>
      </div>
    </div>
  );
};

export default page;
