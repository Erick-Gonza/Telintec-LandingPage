import Image from "next/image";
import styles from "./style";
import {
  Billing,
  Business,
  Button,
  CTA,
  CardDeal,
  Clients,
  FeedbackCard,
  Footer,
  GetStarted,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "./components";

export default function Home() {
  return (
    <main className="bg-primary w-full overflow-hidden">
      <section className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </section>

      <section className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </section>

      <section className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </section>
    </main>
  );
}
