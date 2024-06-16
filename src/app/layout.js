import { Inter } from "next/font/google";
import "./globals.css";
import { Dashboard } from "@/components/Dashboard";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "View Your Result for B.Tech 4th Sem and 6th Sem centurion university of technology and management",
  description: "=View your result for B.Tech 4th Sem and 6th Sem centurion university of technology and management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={`${inter.className}  `}>
       <Dashboard>
        {children}
        </Dashboard>
        </body>
    </html>
  );
}
