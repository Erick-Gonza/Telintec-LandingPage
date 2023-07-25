"use client";

import Image from "next/image";
import Link from "next/link";
import { logo } from "../../../../public/assets";
import { navLinks } from "@/app/constants";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  return (
    <nav className="w-full py-6 justify-between items-center hidden sm:flex bg-transparent">
      <Image
        src={logo}
        alt="logo"
        className="w-[142px] h-[32px] lg:w-[200px] lg:h-[40px]"
      />
      <ul className="list-none flex justify-end items-center flex-1">
        {navLinks.map((link, index) => (
          <li
            key={index}
            className={`font-poppins font-semibold cursor-pointer text-[16px] text-text dark:text-text-dark ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <motion.div
              whileHover={{
                scale: 1.1,
                opacity: 0.75,
              }}
            >
              <Link href={link.id} className="group relative">
                <span
                  className={`${
                    link.id === path
                      ? "text-cyan-600 dark:text-cyan-300 font-bold"
                      : ""
                  } group relative`}
                >
                  {link.title}
                </span>
                <span className="absolute -bottom-2 left-0 w-0 h-[4px] bg-primary dark:bg-primary-dark transition-all group-hover:w-full"></span>
              </Link>
            </motion.div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
