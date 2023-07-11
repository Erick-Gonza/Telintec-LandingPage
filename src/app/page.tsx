import Image from "next/image";
import styles from "./style";
import { Hero, Stats } from "./components";

export default function Home() {
  return (
    <main className="w-full">
      <section className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </section>

      <section className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
        </div>
      </section>
    </main>
  );
}
