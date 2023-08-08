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
const Menu = ({ showCatMenu, setShowCatMenu }) => {
  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-black">
      {data.map((item) => {
        return (
          <div key={item.id}>
            {item?.subMenu ? (
              <li
                className="cursor-pointer flex items-center gap-2 relative"
                onMouseEnter={() => {
                  setShowCatMenu(true);
                }}
                onMouseLeave={() => {
                  setShowCatMenu(false);
                }}
              >
                {item.name}
                <BsChevronDown size={14} />

                {showCatMenu && (
                  <ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg">
                    {subMenuData.map((subMenu) => {
                      return (
                        <Link
                          href={subMenu.url}
                          key={subMenu.id}
                          onClick={() => setShowCatMenu(false)}
                        >
                          <li className="cursor-pointer flex justify-between gap-2 h-12 items-center hover:bg-black/[0.03] rounded-md">
                            {subMenu.name}
                            <span className="text-lg opacity-10">78</span>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="cursor-pointer">
                <Link href={item?.url}>{item.name}</Link>
              </li>
            )}
          </div>
        );
      })}
    </ul>
  );
};

export default Menu;
