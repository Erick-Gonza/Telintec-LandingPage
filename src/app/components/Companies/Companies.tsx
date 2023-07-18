import styles from "@/app/style";
import Image from "next/image";
import { cfe } from "@/app/assets";

export default function Companies() {
  return (
    <section className={`${styles.boxWidth} p-6 bg-black`}>
      <section className={`bg-white rounded-lg`}>
        <div>
          <Image src={cfe} alt="cfe-logo" loading="lazy" />
        </div>
      </section>
    </section>
  );
}
