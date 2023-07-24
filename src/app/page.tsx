import styles from "@/app/style";
import {
  Companies,
  Hero,
  ServicesResume,
  Stats,
  Wrapper,
} from "@/app/components";

export default function Home() {
  return (
    <Wrapper>
      <main className={`${styles.container}`}>
        <section className={`${styles.boxWidth}`}>
          <Hero />
          <Stats />
          <Companies />
          <ServicesResume />
        </section>
      </main>
    </Wrapper>
  );
}
