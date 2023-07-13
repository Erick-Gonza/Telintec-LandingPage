import React from "react";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import styles from "@/app/style";

export default function Header() {
  return (
    <header className={`${styles.paddingX} ${styles.flexCenter}`}>
      <Navbar />
      <NavbarMobile />
    </header>
  );
}
