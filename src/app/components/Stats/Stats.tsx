"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { stats } from "@/app/constants";
import { statsBg } from "../../../../public/assets";
import styles from "@/app/style";

interface Stat {
  id: string;
  value: string;
  title: string;
}

const Stats = () => (
  <motion.section
    className={`${styles.flexCenter} flex-col ss:flex-row flex-wrap relative h-80 mb-8 xl:rounded-md xl:h-[400px] xl:shadow-xl`}
  >
    <Image
      src={statsBg}
      alt="bg-image"
      fill
      loading="lazy"
      className="rounded-sm"
    />
    {stats.map((stat: Stat) => (
      <motion.div
        whileHover={{
          scale: 0.9,
          backgroundColor: "#1d1d1d",
          borderRadius: 10,
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
          transform: "translateY(-10px)",
          transition: { duration: 0.5 },
        }}
        key={stat.id}
        className={`w-full relative flex-1 flex justify-center items-center ${styles.paddingX}`}
      >
        <h3 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
          {stat.value}
        </h3>
        <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3 text-white">
          {stat.title}
        </p>
      </motion.div>
    ))}
  </motion.section>
);

export default Stats;
