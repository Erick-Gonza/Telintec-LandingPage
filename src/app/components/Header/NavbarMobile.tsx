"use client";

import { AiOutlineClose, AiOutlineMenu, logo } from "@/app/assets";
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
        className={`bg-bg dark:bg-bg-dark ${
          toggle === true ? "fixed" : "hidden"
        } -left-0 lg:left-0 top-0 w-[100%] h-full p-8 flex flex-col justify-center gap-16 overflow-y-scroll z-10`}
      >
        {navLinks.map((link, index) => (
          <Link
            href={`/${link.id}`}
            key={index}
            className="flex flex-row justify-center items-center gap-1 px-2 py-1 font-bold text-[18px]"
            onClick={() => setToggle((prev) => !prev)}
          >
            <p className="w-auto text-center hover:border-b-2 hover:border-primary  dark:hover:border-primary-dark transition-all text-text dark:text-text-dark">
              {link.title}
            </p>
          </Link>
        ))}
      </section>
      <button
        className="cursor-pointer z-20"
        onClick={() => setToggle((prev) => !prev)}
      >
        {!toggle ? (
          <AiOutlineMenu className="w-[32px] h-[32px] object-contain" />
        ) : (
          <AiOutlineClose className="w-[32px] h-[32px] object-contain" />
        )}
      </button>
    </nav>
  );
}
