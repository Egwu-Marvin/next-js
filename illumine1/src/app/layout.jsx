import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";


const inter = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Illumine demo page",
  description: "Trying to build Illumine web interface",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

      <div className="container">
          
        <Navbar/> 
        {children}
        <Footer/>
        </div>

      </body>

    </html>
  );
}
