import { Footer, Navbar } from "../components";
import styles from "../style";

export default function page() {
  return (
    <main className="w-full">
      <section className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <h2>Contact</h2>
        </div>
      </section>
    </main>
  );
}