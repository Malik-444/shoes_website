import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProductCard = () => {
  return (
    <Link href="/product/1" className="hover:scale-105 transform overflow-hidden bg-white delay-75 duration-200 mx-5 md:mx-10">
      <Image
        src="/product-1.png"
        alt="Product Image"
        width={600}
        height={100}
      />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium mb-4 hover:underline">
          Prodct Name
        </h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">20$</p>
          <p className="text-base font-medium line-through">25$</p>
          <p className="ml-auto text-base font-medium text-green-500">20% off</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
