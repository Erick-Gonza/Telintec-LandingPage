import { Footer, Navbar } from "../components";
import styles from "../style";

export default function page() {
  return (
    <main className="w-full flex-grow">
      <section className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <h2>Products</h2>
        </div>
      </section>
    </main>
  );
}
