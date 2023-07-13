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
      <body className="flex flex-col h-screen relative bg-white dark:bg-slate-900 w-full overflow-x-hidden">
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
