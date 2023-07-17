import Image from "next/image";
import styles from "../../style";
import Link from "next/link";
import { logo } from "@/app/assets";
import { navLinks, socialMedia } from "@/app/constants";

const Footer = () => {
  return (
    <footer className={`${styles.flexCenter} flex flex-col bg-transparent`}>
      <section className="flex flex-col md:flex-row md:w-1/2 w-full items-center py-2 md:py-4 gap-4 md:gap-8">
        <section className="flex flex-col justify-center items-center">
          <Link className="flex justify-center items-center w-full" href="/">
            <Image
              src={logo}
              alt="logo"
              className="w-[75%] h-[75%] lg:w-[60%] md:h-[60%]"
            />
          </Link>

          <section
            className={`${styles.paddingX} py-2 ${styles.flexCenter} flex flex-col gap-4 md:gap-5`}
          >
            <h2 className="font-bold text-md md:text-xl">
              Nuestras Redes Sociales
            </h2>
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

        <section className="w-full px-4 flex justify-between gap-4">
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold md:text-xl">Empresa</h2>
            <p className="text-md md:text-lg">Mision</p>
            <p className="text-md md:text-lg">Historia y valor personal</p>
            <p className="text-md md:text-lg">Unete al equipo</p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold md:text-xl">Navegacion</h2>
            {navLinks.map((link, index) => (
              <Link
                href={`/${link.id}`}
                key={index}
                className="text-md md:text-lg"
              >
                {link.title}
              </Link>
            ))}
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold md:text-xl">Contacto</h2>
            <p className="text-md md:text-lg">info@telintec.com.mx</p>
            <p className="text-md md:text-lg">Full Address</p>
            <p className="text-md md:text-lg">+52 812 567 2045</p>
          </section>
        </section>
      </section>

      <section className="flex items-center justify-center gap-4 md:gap-12 w-full px-4 py-3 border-t border-black dark:border-white">
        <h2 className="text-sm font-semibold md:text-lg">
          @ Copyrigth 2023 Telintec
        </h2>
        <div className="flex gap-4 md:gap-8">
          <h2 className="text-sm font-semibold md:text-lg">
            Terminos y condiciones
          </h2>
          <h2 className="text-sm font-semibold md:text-lg">
            Politica de privacidad
          </h2>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
