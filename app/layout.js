import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PhotoFeed",
  description: "Creating photoFeed Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="container my-4 lg:my-8">
          {children}
        </div>
        <div id="modal-content" />
      </body>
    </html>
  );
}
