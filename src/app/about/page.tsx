import Image from "next/image";
import styles from "../style";
import { robot } from "../../../public/assets";
import { ContactCard, Wrapper } from "@/app/components";
import { aboutText } from "@/app/constants";

export default function page() {
  const { title, description, about, mision, vision, pilares } = aboutText;
  return (
    <Wrapper>
      <main className={`${styles.container}`}>
        <section className={`${styles.boxWidth}`}>
          <section
            id="home"
            className={`flex md:flex-row flex-col ${styles.paddingY}`}
          >
            <section
              className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
            >
              <div className="flex flex-row justify-between items-center w-full">
                <h2 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[48px] ss:leading-[100px] leading-[75px] text-text dark:text-text-dark">
                  {title}
                </h2>
              </div>
              <p
                className={`${styles.paragraph} max-w-[470px] mt-5 font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[28px] leading-[21px] text-text-off dark:text-text-dark-off`}
              >
                {description}
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

          <section className={`flex flex-col gap-4 py-4 px-6 xl:p-0`}>
            <h2 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-text dark:text-text-dark">
              {about[0]}
            </h2>
            <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-text-off dark:text-text-dark-off">
              {about[1]}
            </p>

            <h3 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-text dark:text-text-dark">
              {mision[0]}
            </h3>
            <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-text-off dark:text-text-dark-off">
              {mision[1]}
            </p>
            <h3 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-text dark:text-text-dark">
              {vision[0]}
            </h3>
            <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-text-off dark:text-text-dark-off">
              {vision[1]}
            </p>
            <h3 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-text dark:text-text-dark">
              {pilares.title}
            </h3>
            <ul className="flex flex-col list-none font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-text-off dark:text-text-dark-off mb-6">
              {pilares.values.map((value, index) => (
                <li key={index} className="flex items-center gap-2 p-2">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </section>

          <ContactCard />
        </section>
      </main>
    </Wrapper>
  );
}
