import "@/app/globals.css";
import { Header, Footer, Providers, ThemeSwitcher } from "@/app/components";

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
