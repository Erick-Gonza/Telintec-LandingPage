import styles from "@/app/style";
import { Carrousel } from "@/app/components";

const Hero = () => {
  return (
    <section className={`${styles.flexCol} ${styles.paddingY}`}>
      <section
        className={`flex-1 ${styles.flexStart} flex-col ${styles.paddingX}`}
      >
        <h2 className={`${styles.heading}`}>Servicios</h2>
        <h2 className={`${styles.subHeading}`}>Inteligencia Artificial</h2>
        <h2 className={`${styles.subHeading}`}>Infraestructura</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-4`}>
          Servicios y soluciones de IA e Infraestructura para ayudarte a obtener
          mas valor en tecnologia.
        </p>
      </section>

      <section className={`max-w-[650px] h-[500px] w-full m-auto p-6 ss:p-0`}>
        <Carrousel />
      </section>
    </section>
  );
};

export default Hero;
