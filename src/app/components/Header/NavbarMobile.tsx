"use client";

import { logo, menu, close } from "@/app/assets";
import { navLinks } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavbarMobile() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex w-full justify-between items-center h-auto px-3 py-6 sm:hidden">
      <Image
        src={logo}
        alt="logo"
        className="w-[142px] h-[32px] lg:w-[200px] lg:h-[40px] object-contain"
      />

      <section
        className={`bg-slate-950 ${
          toggle === true ? "fixed" : "hidden"
        } -left-0 lg:left-0 top-0 w-[100%] h-full p-8 flex flex-col justify-center gap-16 overflow-y-scroll z-10 border-r border-black`}
      >
        {navLinks.map((link, index) => (
          <Link
            href={`/${link.id}`}
            key={index}
            className="flex flex-row justify-center items-center gap-1 px-2 py-1 font-bold text-[18px] text-white"
            onClick={() => setToggle((prev) => !prev)}
          >
            {link.title}
          </Link>
        ))}
      </section>

      <Image
        src={toggle ? close : menu}
        alt="menu"
        className="w-[32px] h-[32px] object-contain cursor-pointer z-20"
        onClick={() => setToggle((prev) => !prev)}
      />
    </nav>
  );
}
