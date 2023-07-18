import Image from "next/image";
import { stats } from "@/app/constants";
import { statsBg } from "@/app/assets";
import styles from "@/app/style";

interface Stat {
  id: string;
  value: string;
  title: string;
}

const Stats = () => (
  <section
    className={`${styles.flexCenter} flex-col ss:flex-row flex-wrap relative h-80 mb-4`}
  >
    <Image src={statsBg} alt="bg image" fill loading="lazy" />
    {stats.map((stat: Stat) => (
      <div
        key={stat.id}
        className={`w-full relative flex-1 flex justify-center items-center ${styles.paddingX}`}
      >
        <h3 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
          {stat.value}
        </h3>
        <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
