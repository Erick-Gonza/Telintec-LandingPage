import { companies } from "@/app/constants";
import styles from "@/app/style";
import Image from "next/image";
import Link from "next/link";

export default function Companies() {
  return (
    <section
      className={`${styles.boxWidth} p-6 bg-black xl:shadow-xl rounded-sm mb-6`}
    >
      <h2 className="text-xl md:text-2xl font-bold text-center mb-4">
        Companias que confian en nuestra experiencia
      </h2>
      <section className={`bg-white rounded-lg`}>
        <div className="flex justify-center flex-wrap gap-4 py-4 px-5 md:gap-8 md:py-6 md:px-10">
          {companies.map((company) => (
            <Link
              key={company.id}
              href={company.link}
              target="_blank"
              className="cursor-pointer hover:bg-slate-200"
            >
              <Image
                src={company.icon}
                alt={`${company.id}-logo`}
                loading="lazy"
                className="w-32 h-32 md:w-40 md:h-40 object-contain border border-gray-400 rounded-lg p-2"
              />
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
}
