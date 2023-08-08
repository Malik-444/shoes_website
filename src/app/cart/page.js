"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import CartItem from "../../../components/CartItem";

export const metadata = {
  title: "Cart Page | Online Shoes Store",
  description: "This is Cart Page",
};

const Cart = () => {
  return (
    <div className="md:py-20 w-full max-w-[1280px] px-5 md:px-10 mx-auto">
      <div className="title text-[30px] max-w-[800px] mx-auto font-bold text-center md:text-[40px] leading-tight">
        Shopping cart
      </div>
      <div className="flex py-10 flex-col md:flex-row gap-12 ">
        <div className="left flex-[2] ">
          <div className="text-lg font-bold">Cart Items</div>
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="right flex-1 ">
          <div className="text-lg font-bold">Summary</div>
          <div className="p-5 my-5 bg-black/[0.5] rounded-xl">
            <div className="flex justify-between">
              <div className="uppercase text-md md:text-lg font-medium text-black">
                SubTotal
              </div>
              <div className="uppercase text-sm md:text-base  font-normal text-black">
                $ 800
              </div>
            </div>

            <div className="text-sm font-normal capitalize mt-5 py-3 border-t text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              asperiores ducimus possimus aliquam quod harum molestias accusamus
              incidunt facere totam eveniet nihil molestiae
            </div>
          </div>
          <button className="uppercase w-full rounded-full text-xl bg-black text-white cursor-pointer py-3 transition-transform hover:opacity-75 active:scale-95">
            Checkout
          </button>
        </div>
      </div>
      <div className="flex flex-col flex-[2] items-center justify-center pb-[50px] md:mt-14">
        <Image
          src="/empty-cart.jpg"
          alt="emptyimg"
          width={300}
          height={300}
          className="w-[300px] md:w-[400px]"
        ></Image>
        <span className="font-bold text-xl capitalize">Your Cart is Empty</span>
        <span className="text-center mt-4">
          Looks Like You have not added anything in your cart <br /> Go Ahead
          and explore something
        </span>
        <Link href="/">
          <button className="uppercase rounded-full text-xl mt-8 bg-black text-white cursor-pointer py-4 px-8 transition-transform hover:opacity-75 active:scale-95">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
