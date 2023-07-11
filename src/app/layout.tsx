import { Footer, Navbar } from "./components";
import "./globals.css";
import Providers from "./Providers";
import styles from "./style";
import ThemeSwitcher from "./components/ThemeSwitcher";

export const metadata = {
  title: "Telintec",
  description: "...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative bg-white dark:bg-slate-900 w-full overflow-x-hidden">
        <Providers>
          <ThemeSwitcher />
          <header className={`${styles.paddingX} ${styles.flexCenter}`}>
            <Navbar />
          </header>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
