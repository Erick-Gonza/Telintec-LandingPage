import styles from "@/app/style";
import { Companies, Hero, ServicesResume, Stats } from "@/app/components";

export default function Home() {
  return (
    <main className="w-full flex-grow xl:flex xl:flex-col items-center">
      <section className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </section>

      <Stats />
      <Companies />
      <ServicesResume />
    </main>
  );
}
