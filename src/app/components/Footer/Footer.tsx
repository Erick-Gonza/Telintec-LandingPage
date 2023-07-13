import Image from "next/image";
import styles from "../../style";
import Link from "next/link";
import { logo } from "@/app/assets";
import { navLinks, socialMedia } from "@/app/constants";

const Footer = () => {
  return (
    <footer className={`${styles.flexCenter} flex flex-col`}>
      <section className="flex justify-between items-center">
        <section className="flex flex-col justify-center items-center w-1/2">
          <Link className="flex justify-center w-full" href="/">
            <Image src={logo} alt="logo" className="w-[50%] h-[50%]" />
          </Link>

          <section
            className={`${styles.paddingX} ${styles.flexCenter} flex flex-col`}
          >
            <h2>Nuestras Redes Sociales</h2>
            <div className="flex w-full">
              {socialMedia.map((item, index) => (
                <Link key={index} href={item.link}>
                  <Image
                    src={item.icon}
                    alt="logo"
                    className="w-[142px] h-[32px] lg:w-[200px] lg:h-[40px]"
                  />
                </Link>
              ))}
            </div>
          </section>
        </section>

        <section className="w-1/2 flex justify-between">
          <section>
            <h2 className="text-xl font-bold">Empresa</h2>
            <p>Mision</p>
            <p>Historia y valor personal</p>
            <p>Unete al equipo</p>
          </section>

          <section className="flex flex-col">
            <h2 className="text-xl font-bold">Mapa del sitio</h2>
            {navLinks.map((link, index) => (
              <Link href={`/${link.id}`} key={index}>
                {link.title}
              </Link>
            ))}
          </section>

          <section>
            <h2 className="text-xl font-bold">Info de contacto</h2>
            <p>info@telintec.com.mx</p>
            <p>Full Address</p>
            <p>+52 812 567 2045</p>
          </section>
        </section>
      </section>

      <section className="flex items-center justify-center gap-8 bg-black w-full h-[32px]">
        <h2>@ Copyrigth 2023 Telintec</h2>
        <div className="flex gap-4">
          <h2>Terminos y condiciones</h2>
          <h2>Politica de privacidad</h2>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
