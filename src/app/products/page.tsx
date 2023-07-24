import styles from "@/app/style";
import { Wrapper } from "@/app/components";

export default function page() {
  return (
    <Wrapper>
      <main className="w-full flex-grow">
        <section className={`${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <h2>Products</h2>
          </div>
        </section>
      </main>
    </Wrapper>
  );
}
