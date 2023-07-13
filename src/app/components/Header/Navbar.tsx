"use client";

import Image from "next/image";
import Link from "next/link";
import { logo } from "@/app/assets";
import { navLinks } from "@/app/constants";

const Navbar = () => {
  return (
    <nav className="w-full py-6 justify-between items-center hidden sm:flex">
      <Image
        src={logo}
        alt="logo"
        className="w-[142px] h-[32px] lg:w-[200px] lg:h-[40px]"
      />
      <ul className="list-none flex justify-end items-center flex-1">
        {navLinks.map((link, index) => (
          <li
            key={index}
            className={`font-poppins font-semibold cursor-pointer text-[16px] text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <Link href={`/${link.id}`}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
