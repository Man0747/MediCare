import { Inter } from "next/font/google";
import Header from "./_components/Header";
import "./globals.css";
import SideBar from "./_components/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MediCare",
  description: "We are here for you, Always!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/MediCareLogoRound.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100&family=Manrope:wght@200..800&display=swap" rel="stylesheet"/>
      <body className="font-manrope" >
      <div className="flex">
        <div>
          <SideBar></SideBar>
          </div>
        <div className='flex-1 h-screen'>
        <Header></Header>
        {children}
        </div>
      </div>
      </body>
    </html>
  );
}
