import styles from "../../style";
import { robot } from "../../assets";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      {/*Hero - Left Section - Content  */}
      <section
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px] text-text dark:text-text-dark">
            Servicios
          </h1>
        </div>

        <h2 className="font-poppins font-semibold ss:text-[64px] text-[48px] ss:leading-[100px] leading-[75px] w-full text-text dark:text-text-dark">
          Inteligencia Artificial
        </h2>
        <h2 className="font-poppins font-semibold ss:text-[64px] text-[48px] ss:leading-[100px] leading-[75px] w-full text-text dark:text-text-dark">
          Infraestructura
        </h2>
        <p
          className={`${styles.paragraph} max-w-[470px] mt-5 text-text-off dark:text-text-dark-off`}
        >
          Servicios y soluciones de IA e Infraestructura para ayudarte a obtener
          mas valor en tecnologia.
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
  );
};

export default Hero;
