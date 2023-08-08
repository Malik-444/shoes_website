import Image from "next/image";
import React from "react";
import { FaYoutube, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { IoMdContacts } from "react-icons/io";

export const metadata = {
  title: "Contact Us | Online Shoes Store",
  description: "This is contact Page",
};

const page = () => {
  return (
    <div className="text-center mt-8 md:mt-0 mx-auto max-w-[800px]">
      <div className="top my-6">
        <div className="text-[30px] md:text-[40px] mt-[32px] mb-5 p-5 font-semibold leading-tight ">
          Contact Us
        </div>
        <div className="text-[15px] md:text-[20px] font-light text-black/[0.5] mb-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          molestias id at perspiciatis quo, suscipit distinctio accusamus
          blanditiis.
        </div>
      </div>
      <div className="bot flex flex-col md:flex-row mb-8 mt-4 mr-2 space-x-4">
        <div className="flex-1 flex items-center justify-center p-7 md:p-0">
          <Image
            src="https://images.unsplash.com/photo-1562183241-b937e95585b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="pic"
            width={400}
            height={200}
            className="border-2 rounded-[100px]"
          />
        </div>
        <div className="right flex-1 justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 content-center ">
            <div className="bg-black/[0.5] flex flex-col items-center rounded-3xl p-6">
              <div className="p-3">
                <IoMdContacts size={15} />
              </div>
              <h1 className="font-bold text-2xl my-2">CONTACT</h1>
              <div className="icons flex flex-row gap-1 justify-evenly md:gap-2 p-4 font-medium">
                <div className="w-7 h-7 rounded-full bg-white/[0.5] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                  <Link
                    href="https://web.facebook.com/AzadZ4t7"
                    target="_blank"
                  >
                    <FaFacebook size={15} />
                  </Link>
                </div>
                <div className="w-7 h-7 rounded-full bg-white/[0.5] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                  <Link
                    href="https://www.instagram.com/talhamalik_jazzy/"
                    target="_blank"
                  >
                    <FaInstagram size={15} />
                  </Link>
                </div>
                <div className="w-7 h-7 rounded-full bg-white/[0.5] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                  <Link
                    href="https://www.youtube.com/@techreview588/featured"
                    target="_blank"
                  >
                    <FaYoutube size={15} />
                  </Link>
                </div>
                <div className="w-7 h-7 rounded-full bg-white/[0.5] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                  <Link
                    href="https://www.linkedin.com/in/talhahusnain/"
                    target="_blank"
                  >
                    <FaLinkedin size={15} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-black/[0.5] flex flex-col items-center rounded-3xl p-6">
              <div className="p-3">
                <SlLocationPin size={20} />
              </div>
              <h1 className="font-bold text-2xl mt-2">ADDRESS:</h1>
              <span className="font-normal text-sm">Okara, Pakistan</span>
            </div>
            <div className="bg-black/[0.5] flex flex-col items-center rounded-3xl p-6">
              <div className="p-3">
                <AiOutlineMail size={20} />
              </div>
              <h1 className="font-bold text-2xl mt-2">EMAIl:</h1>
              <span className="font-normal text-sm">abc@gmail.com</span>
              <span className="font-normal text-sm">OCJPY@gmail.com</span>
            </div>
            <div className="bg-black/[0.5] flex flex-col items-center rounded-3xl p-6 ">
              <div className="p-3">
                <FiPhoneCall size={20} />
              </div>
              <h1 className="font-bold text-2xl mt-2">Call Us:</h1>
              <span className="font-normal text-sm">123-456789</span>
              <span className="font-normal text-sm">092-896548</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
