import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Sales", url: "/sales" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
  { id: 1, name: "Jordan", url: "category/categories" },
  { id: 2, name: "Sneakers", url: "category/categories" },
  { id: 3, name: "Running shoes", url: "category/categories" },
  { id: 4, name: "Football shoes", url: "category/categories" },
];
const MenuMobile = ({ showCatMenu, setShowCatMenu, setMobileMenu }) => {
  return (
    <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
      {data.map((item) => {
        return (
          <div key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="cursor-pointer py-4 px-5 relative border-b flex flex-col"
                onClick={()=>{setShowCatMenu(!showCatMenu)}}
              >
                <div className="flex justify-between items-center">
                  {item.name}
                  <BsChevronDown size={14} />
                </div>

                {showCatMenu && (
                  <ul className="bg-black/[0.05] -mx-5 -mb-4 mt-5]">
                    {subMenuData.map((submenu) => {
                      return (
                        <Link
                          href={submenu.url}
                          key={submenu.id}
                          onClick={() => {
                            setShowCatMenu(false);
                            setMobileMenu(false);
                          }}
                        >
                          <li className="py-4 px-8 border-t flex justify-between">
                            {submenu.name}
                            <span className="text-lg opacity-10">78</span>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="py-4 px-5 border-b">
                <Link onClick={() => setMobileMenu(false)} href={item?.url}>
                  {item.name}
                </Link>
              </li>
            )}
          </div>
        );
      })}
    </ul>
  );
};

export default MenuMobile;
