import styles from "@/app/style";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";

export default function Header() {
  return (
    <header className={`${styles.paddingX} ${styles.flexCenter}`}>
      <Navbar />
      <NavbarMobile />
    </header>
  );
}
