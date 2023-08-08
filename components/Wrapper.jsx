import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";

const Wrapper = ({ Children, className }) => {
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div
      className={`w-full max-w-[1280px] px-5 md:px-10 mx-auto ${
        className || ""
      }`}
    >
      <Link href="/">
        <Image
          className="w-[40px] md:w-[60px]"
          src="/logo.svg"
          alt="logo"
          width={300}
          height={300}
        />
      </Link>
      <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />
      {mobileMenu && (
        <MenuMobile
          showCatMenu={showCatMenu}
          setShowCatMenu={setShowCatMenu}
          setMobileMenu={setMobileMenu}
        />
      )}

      {/* ICONS */}
      <div className="flex items-center gap-2 text-black">
        <Link href="/fav">
        <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
          <IoMdHeartEmpty className="text-[15px] md:text-[20px]" />
          <div className="h-[14px] md:h-[18px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px] ">
            5
          </div>
        </div>
        </Link>
        <Link href="/cart">
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            <BsCart className="text-[15px] md:text-[20px]" />
            <div className="h-[14px] md:h-[18px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px] ">
              5
            </div>
          </div>
        </Link>
        <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
          {mobileMenu ? (
            <VscChromeClose
              className="text-[16px]"
              onClick={() => {
                setMobileMenu(false);
              }}
            />
          ) : (
            <BiMenuAltRight
              className="text-[20px]"
              onClick={() => {
                setMobileMenu(true);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
