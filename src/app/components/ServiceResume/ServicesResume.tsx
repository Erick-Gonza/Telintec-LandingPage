import { bgOffice } from "../../../../public/assets";
import { services } from "@/app/constants";
import styles from "@/app/style";
import Image from "next/image";

export default function ServicesResume() {
  return (
    <section
      className={`${styles.boxWidth} xl:shadow-xl rounded-sm mb-6 flex w-full justify-between relative h-auto overflow-hidden`}
    >
      <section className="w-full md:w-[45%] py-4 px-6">
        <h2 className="max-w-[500px] text-3xl font-bold leading-normal text-text dark:text-text-dark">
          Encuentre soluciones tecnologicas para su empresa.
        </h2>
        <p className="max-w-[400px] text-lg font-normal leading-normal text-text-off dark:text-text-dark-off">
          Encuentre e implemente soluciones tecnológicas innovadoras para su
          empresa con Telintec.
        </p>
        <ul className="w-full">
          {services.map((service) => (
            <li key={service.id} className="flex items-center my-4">
              <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
              <p className="text-base font-medium leading-normal text-text dark:text-text-dark">
                {service.title}
              </p>
            </li>
          ))}
        </ul>
      </section>
      <section className="w-[55%] relative hidden md:block">
        <Image
          src={bgOffice}
          alt="bg image"
          fill
          loading="lazy"
          className="rounded-sm bg-transparent object-fill"
        />
      </section>
    </section>
  );
}
