import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "V-logs",
  description: "This is a social media where people can see latest posts that are uploaded by the users on the platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
