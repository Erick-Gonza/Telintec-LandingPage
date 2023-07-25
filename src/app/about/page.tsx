import Image from "next/image";
import styles from "../style";
import { robot, statsBg } from "../../../public/assets";
import Link from "next/link";
import { Wrapper } from "@/app/components";

export default function page() {
  return (
    <Wrapper>
      <main className={`${styles.container}`}>
        <section
          id="home"
          className={`flex md:flex-row flex-col ${styles.paddingY}`}
        >
          {/*Hero - Left Section - Content  */}
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

          {/*Hero - Right Section - Gradients  */}
          <section
            className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
          >
            <Image
              src={robot}
              alt="billing"
              className="w-[100%] h-[100%] relative z-[5] object-contain"
            />

            {/* gradient start */}
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            {/* gradient end */}
          </section>
        </section>

        <section
          className={`flex flex-col gap-4 ${styles.paddingY} ${styles.paddingX}`}
        >
          <h2 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-text dark:text-text-dark">
            Quienes somos
          </h2>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-text-off dark:text-text-dark-off">
            Somos una compañía con más de 8 años de experiencia en el sector, un
            gran número de proyectos ejecutados con éxito demuestran que nuestro
            objetivo principal es ayudar a nuestros clientes a mejorar la
            calidad, seguridad y disponibilidad de su información, a través de
            la consultoría especializada, ingeniería e implementación de
            sistemas de comunicación y soluciones inteligentes de vídeo y
            control deacceso. Todo esto es posible gracias al apoyo de un gran
            equipo de trabajo cuya motivación es la colaboración y el servicio
            al cliente.
          </p>

          <h3 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-text dark:text-text-dark">
            Mision
          </h3>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-text-off dark:text-text-dark-off">
            Ser la mejor opción de nuestros clientes para que puedan sentirse
            respaldados ensus áreas de desarrollo tecnológico. Que nuestro
            capital humano, logre desarrollar su objetivos profesionales para su
            beneficio personal, familiar y social.
          </p>
          <h3 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-text dark:text-text-dark">
            Vision
          </h3>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-text-off dark:text-text-dark-off">
            Consolidarnos como los socios estratégicos de las empresas líderes
            en elmercado mundial a través de la optimización e innovación en el
            campo de las telecomunicaciones.
          </p>
          <h3 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-text dark:text-text-dark">
            Valores
          </h3>
          <ul className="flex flex-col list-none font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-text-off dark:text-text-dark-off">
            <li>Responsabilidad</li>
            <li>Compromiso</li>
            <li>Respeto</li>
            <li>Confianza</li>
            <li>Lealtad</li>
            <li>Trabajo en equipo</li>
            <li>Calidad</li>
            <li>Mejora continua</li>
          </ul>
        </section>

        <section
          className={`${styles.flexCenter} ${styles.paddingX} flex-col ss:flex-row flex-wrap relative h-80 mb-8 xl:rounded-md xl:h-[400px] xl:shadow-xl`}
        >
          <Image
            src={statsBg}
            alt="bg image"
            fill
            loading="lazy"
            className="rounded-sm"
          />
          <div className="relative flex flex-col items-center space-y-6 md:space-y-4">
            <h2 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-text-dark">
              Ponte en contacto con nosotros
            </h2>
            <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-text-dark-off">
              Nuestro equipo de profesionales estará a tu disposición para
              brindarte la asesoría que garantizará el éxito de tu negocio
            </p>
            <Link
              href={"/contact"}
              className="w-full md:w-1/3 font-poppins font-semibold xs:text-lg text-base bg-bg-off text-text px-2 py-3 rounded-md cursor-pointer"
            >
              <p className="text-center">Contactanos</p>
            </Link>
          </div>
        </section>
      </main>
    </Wrapper>
  );
}
