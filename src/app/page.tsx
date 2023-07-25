import styles from "@/app/style";
import {
  Companies,
  Hero,
  ServicesResume,
  Stats,
  Wrapper,
} from "@/app/components";

import CustomWrapper from "./components/Wrapper/CustomWrapper";

export default function Home() {
  return (
    <Wrapper>
      <section className={`${styles.container}`}>
        <section className={`${styles.boxWidth}`}>
          <CustomWrapper position={20} delay={0.25}>
            <Hero />
          </CustomWrapper>

          <CustomWrapper position={-20} delay={0.25}>
            <Stats />
          </CustomWrapper>

          <CustomWrapper position={20} delay={0.25}>
            <Companies />
          </CustomWrapper>

          <CustomWrapper position={-20} delay={0.25}>
            <ServicesResume />
          </CustomWrapper>
        </section>
      </section>
    </Wrapper>
  );
}
