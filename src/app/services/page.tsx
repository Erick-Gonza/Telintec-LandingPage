import styles from "@/app/style";
import Link from "next/link";
import { robot, statsBg } from "../assets";
import Image from "next/image";

export default function page() {
  return (
    <main className="w-full flex-grow xl:flex xl:flex-col items-center">
      <section className={`flex flex-col ${styles.paddingY}`}>
        <section className="flex md:flex-row flex-col">
          <section
            className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
          >
            <div className="flex flex-row justify-between items-center w-full">
              <h2 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[48px] ss:leading-[100px] leading-[75px] text-text dark:text-text-dark">
                Un poco sobre Telintec
              </h2>
            </div>
            <p
              className={`${styles.paragraph} max-w-[470px] mt-5 font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[28px] leading-[21px] text-text-off dark:text-text-dark-off`}
            >
              El objetivo principal de TELINTEC S.A. de C.V. es brindarle a sus
              clientes un servicio de calidad, eficiente y especializado a las
              necesidades de cada servicio y requerimientos del cliente.
            </p>
          </section>

          <section
            className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
          >
            <Image
              src={robot}
              alt="billing"
              className="w-[100%] h-[100%] relative z-[5] object-contain"
            />
          </section>
        </section>

        <section className="flex md:flex-row flex-col">
          <section
            className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
          >
            <Image
              src={robot}
              alt="billing"
              className="w-[100%] h-[100%] relative z-[5] object-contain"
            />
          </section>

          <section
            className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
          >
            <div className="flex flex-row justify-between items-center w-full">
              <h2 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[48px] ss:leading-[100px] leading-[75px] text-text dark:text-text-dark">
                Un poco sobre Telintec
              </h2>
            </div>
            <p
              className={`${styles.paragraph} max-w-[470px] mt-5 font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[28px] leading-[21px] text-text-off dark:text-text-dark-off`}
            >
              El objetivo principal de TELINTEC S.A. de C.V. es brindarle a sus
              clientes un servicio de calidad, eficiente y especializado a las
              necesidades de cada servicio y requerimientos del cliente.
            </p>
          </section>
        </section>

        <section className="flex md:flex-row flex-col">
          <section
            className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
          >
            <div className="flex flex-row justify-between items-center w-full">
              <h2 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[48px] ss:leading-[100px] leading-[75px] text-text dark:text-text-dark">
                Un poco sobre Telintec
              </h2>
            </div>
            <p
              className={`${styles.paragraph} max-w-[470px] mt-5 font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[28px] leading-[21px] text-text-off dark:text-text-dark-off`}
            >
              El objetivo principal de TELINTEC S.A. de C.V. es brindarle a sus
              clientes un servicio de calidad, eficiente y especializado a las
              necesidades de cada servicio y requerimientos del cliente.
            </p>
          </section>

          <section
            className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
          >
            <Image
              src={robot}
              alt="billing"
              className="w-[100%] h-[100%] relative z-[5] object-contain"
            />
          </section>
        </section>

        <section className="flex md:flex-row flex-col">
          <section
            className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
          >
            <Image
              src={robot}
              alt="billing"
              className="w-[100%] h-[100%] relative z-[5] object-contain"
            />
          </section>

          <section
            className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
          >
            <div className="flex flex-row justify-between items-center w-full">
              <h2 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[48px] ss:leading-[100px] leading-[75px] text-text dark:text-text-dark">
                Un poco sobre Telintec
              </h2>
            </div>
            <p
              className={`${styles.paragraph} max-w-[470px] mt-5 font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[28px] leading-[21px] text-text-off dark:text-text-dark-off`}
            >
              El objetivo principal de TELINTEC S.A. de C.V. es brindarle a sus
              clientes un servicio de calidad, eficiente y especializado a las
              necesidades de cada servicio y requerimientos del cliente.
            </p>
          </section>
        </section>
      </section>
    </main>
  );
}
