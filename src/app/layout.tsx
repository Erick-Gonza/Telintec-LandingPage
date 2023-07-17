import "./globals.css";
import styles from "./style";
import Providers from "./Providers";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Header from "./components/Header/Header";
import { Footer } from "./components";

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
      <body className="flex flex-col h-screen relative w-full overflow-x-hidden bg-bg dark:bg-bg-dark">
        <Providers>
          <ThemeSwitcher />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
