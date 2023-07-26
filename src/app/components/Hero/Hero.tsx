import styles from "@/app/style";
import { Carrousel } from "@/app/components";
import { heroText } from "@/app/constants";

const Hero = () => {
  const { title, offTitle, description } = heroText;
  return (
    <section className={`${styles.flexCol} ${styles.paddingY}`}>
      <section
        className={`flex-1 ${styles.flexStart} flex-col ${styles.paddingX}`}
      >
        <h2 className={`${styles.heading}`}>{title}</h2>
        <h2 className={`${styles.subHeading}`}>{offTitle[0]}</h2>
        <h2 className={`${styles.subHeading}`}>{offTitle[1]}</h2>
        <p className={`${styles.paragraph} max-w-[600px] mt-4`}>
          {description}
        </p>
      </section>

      <section className={`max-w-[600px] h-[600px] w-full m-auto p-6 ss:py-4`}>
        <Carrousel />
      </section>
    </section>
  );
};

export default Hero;
