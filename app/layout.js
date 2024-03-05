import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"


const inter = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Raghavendra J",
  description: "Designer,Developer,Gamer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning="true">
    
      <body className={inter.className}>
        <Navbar/>   
        {children}
        <SpeedInsights/>
        <Footer/>
        </body>
    </html>
  );
}
