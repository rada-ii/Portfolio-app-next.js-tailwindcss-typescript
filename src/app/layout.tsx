import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import { pages, contactMeLinks } from "./data/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio app",
  description: "Portfolio app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header pages={pages} />
        {children}
        <Footer contactMeLinks={contactMeLinks} />
      </body>
    </html>
  );
}
