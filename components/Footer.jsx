import React from "react";
import {  
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-14 pb-3">
      <div className="Main flex justify-between flex-col gap-[50px] ml-10 md:ml-0 md:pl-8">
        <div className="Top_Footer flex flex-col md:flex-row justify-evenly  gap-[50px] md:gap-[75px] lg:gap-[100px]">
          <div className="Mainmenu">
            <ul className="font-bold gap-3 flex flex-col shrink-0">
              <li className="font-medium font-serif uppercase text-sm hover:underline hover:underline-offset-8 cursor-pointer">
                Find a Store
              </li>
              <li className="font-medium font-serif uppercase text-sm hover:underline hover:underline-offset-8 cursor-pointer">
                become a partner
              </li>
              <li className="font-medium font-serif uppercase text-sm hover:underline hover:underline-offset-8 cursor-pointer">
                signup for email
              </li>
              <li className="font-medium font-serif uppercase text-sm hover:underline hover:underline-offset-8 cursor-pointer">
                send us feedback
              </li>
              <li className="font-medium font-serif uppercase text-sm hover:underline hover:underline-offset-8 cursor-pointer">
                student discount
              </li>
            </ul>
          </div>

          <div className="SubMenu">
            <ul className="font-medium gap-3 flex flex-col shrink-0">
              <li className="font-light capitalize text-sm cursor-pointer hover:underline hover:underline-offset-8">
                get help
              </li>
              <li className="font-light capitalize text-sm cursor-pointer hover:underline hover:underline-offset-8">
                order status
              </li>
              <li className="font-light capitalize text-sm cursor-pointer hover:underline hover:underline-offset-8">
                Delivery
              </li>
              <li className="font-light capitalize text-sm cursor-pointer hover:underline hover:underline-offset-8">
                Returns
              </li>
              <li className="font-light capitalize text-sm cursor-pointer hover:underline hover:underline-offset-8">
                Payment Option
              </li>
              <li className="font-light capitalize text-sm cursor-pointer hover:underline hover:underline-offset-8">
                Contact Us
              </li>
            </ul>
          </div>
          <div className="SubMenu">
            <ul className="font-medium gap-3 flex flex-col shrink-0">
              <li className="font-light capitalize text-sm cursor-pointer hover:underline hover:underline-offset-8">
                About us
              </li>
              <li className="font-light capitalize text-sm cursor-pointer hover:underline hover:underline-offset-8">
                News
              </li>
              <li className="font-light capitalize text-sm cursor-pointer hover:underline hover:underline-offset-8">
                Careers
              </li>
              <li className="font-light capitalize text-sm cursor-pointer hover:underline hover:underline-offset-8">
                Investor
              </li>
              <li className="font-light capitalize text-sm cursor-pointer hover:underline hover:underline-offset-8">
                Affiliate
              </li>
            </ul>
          </div>
          <div className="icons flex flex-row gap-3px justify-evenly md:gap-5">
            <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
              <Link href="https://web.facebook.com/AzadZ4t7" target="_blank"><FaFacebook size={20} /></Link>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
              <Link href="https://www.instagram.com/talhamalik_jazzy/" target="_blank"><FaInstagram size={20} /></Link>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
              <Link href="https://www.youtube.com/@techreview588/featured" target="_blank"><FaYoutube size={20} /></Link>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
              <Link href="https://www.linkedin.com/in/talhahusnain/" target="_blank"><FaLinkedin size={20} /></Link>
            </div>
          </div>
        </div>

        <div className="bottom-Footer flex flex-col md:flex-row md:items-center justify-evenly  text-sm ">
          <div className="opacity-25 flex flex-col md:flex-row ">
           <span className="cursor-pointer mx-2"> © 2023 All rights reserved.</span>
           <span className="cursor-pointer mx-2"> Developed by Team jazZy </span>
          </div>
          <div className="opacity-25 flex flex-col md:flex-row ">
            <span className="cursor-pointer hover:underline mx-2 hover: underline-offset-4">Privacy Policy</span>
            <span className="hidden md:block "> | </span>
            <span className="cursor-pointer hover:underline mx-2 hover: underline-offset-4">Term Of Use</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
