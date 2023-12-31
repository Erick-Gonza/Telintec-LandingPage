"use client";

import { companies } from "@/app/constants";
import styles from "@/app/style";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Companies() {
  return (
    <section
      className={`${styles.boxWidth} ${styles.paddingX} ${styles.paddingY} bg-black xl:shadow-xl rounded-sm mb-8`}
    >
      <h2 className="text-xl md:text-4xl font-bold text-center mb-6 text-white">
        Empresas que confian en nosotros
      </h2>
      <section className={`bg-white rounded-lg`}>
        <div className="flex justify-center flex-wrap gap-4 py-4 px-5 md:gap-8 md:py-6 md:px-10">
          {companies.map((company) => (
            <Link
              key={company.id}
              href={company.link}
              target="_blank"
              className="cursor-pointer"
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.75)",
                  borderRadius: 10,
                  transition: { duration: 0.25 },
                }}
              >
                <Image
                  src={company.icon}
                  alt={`${company.id}-logo`}
                  loading="lazy"
                  className="w-32 h-32 md:w-48 md:h-48 object-contain border border-gray-400 rounded-lg p-2"
                />
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
}
