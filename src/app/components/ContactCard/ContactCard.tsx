import styles from "@/app/style";
import Image from "next/image";
import Link from "next/link";
import { statsBg } from "../../../../public/assets";
import { contactText } from "@/app/constants";

export default function ContactCard() {
  const { title, description, prhase } = contactText;
  return (
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
          {title}
        </h2>
        <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-text-dark-off">
          {description}
        </p>
        <Link
          href={"/contact"}
          className="w-full md:w-1/3 font-poppins font-semibold xs:text-lg text-base bg-bg-off text-text px-2 py-3 rounded-md cursor-pointer"
        >
          <p className="text-center">{prhase}</p>
        </Link>
      </div>
    </section>
  );
}
