import styles from "@/app/style";
import Image from "next/image";
import { services } from "../constants";
import { Wrapper } from "@/app/components";

export default function page() {
  return (
    <Wrapper>
      <main className={`${styles.container}`}>
        <section className={`flex flex-col ${styles.paddingY}`}>
          {services.map((service, index) =>
            index % 2 === 0 ? (
              <section
                className="md:flex-row flex-col hidden sm:flex"
                key={service.id}
              >
                <section
                  className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
                >
                  <div className="flex flex-row justify-between items-center w-full">
                    <h2 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[48px] ss:leading-[100px] leading-[75px] text-text dark:text-text-dark">
                      {service.title}
                    </h2>
                  </div>
                  <p
                    className={`${styles.paragraph} max-w-[470px] mt-5 font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[28px] leading-[21px] text-text-off dark:text-text-dark-off`}
                  >
                    {service.description}
                  </p>
                </section>

                <section
                  className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
                >
                  <Image
                    src={service.image}
                    alt="billing"
                    className="w-[100%] h-[100%] relative z-[5] object-contain"
                  />
                </section>
              </section>
            ) : (
              <section
                className="md:flex-row flex-col hidden sm:flex"
                key={service.id}
              >
                <section
                  className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
                >
                  <Image
                    src={service.image}
                    alt="billing"
                    className="w-[100%] h-[100%] relative z-[5] object-contain"
                  />
                </section>
                <section
                  className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
                >
                  <div className="flex flex-row justify-between items-center w-full">
                    <h2 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[48px] ss:leading-[100px] leading-[75px] text-text dark:text-text-dark">
                      {service.title}
                    </h2>
                  </div>
                  <p
                    className={`${styles.paragraph} max-w-[470px] mt-5 font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[28px] leading-[21px] text-text-off dark:text-text-dark-off`}
                  >
                    {service.description}
                  </p>
                </section>
              </section>
            )
          )}

          {services.map((service) => (
            <section className="flex flex-col md:hidden" key={service.id}>
              <section
                className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
              >
                <div className="flex flex-row justify-between items-center w-full">
                  <h2 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[48px] ss:leading-[100px] leading-[75px] text-text dark:text-text-dark">
                    {service.title}
                  </h2>
                </div>
                <p
                  className={`${styles.paragraph} max-w-[470px] mt-5 font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[28px] leading-[21px] text-text-off dark:text-text-dark-off`}
                >
                  {service.description}
                </p>
              </section>

              <section
                className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
              >
                <Image
                  src={service.image}
                  alt="billing"
                  className="w-[100%] h-[100%] relative z-[5] object-contain"
                />
              </section>
            </section>
          ))}
        </section>
      </main>
    </Wrapper>
  );
}
