import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";


const inter = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Raghavendra J",
  description: "Designer,Developer,Gamer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning="true">
      <meta name="google-site-verification" content="n-_jc5dEY_FZHpfP5K8deY0kAOOeeUZWWo-_z-7sjhc" />
      <body className={inter.className}>
        <Navbar/>   
        {children}
        <Footer/>
        </body>
    </html>
  );
}
