import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Barlow, Fraunces } from "next/font/google";
import "./globals.css";
import { ToastContainer, toast } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppinsFont = Poppins({
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900", // normal
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900", // italic
  ],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const barlow = Barlow({
  variable: "--font-barlow",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "Personal Portfolio by Arco",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  ${poppinsFont.variable} ${barlow.variable} ${fraunces.variable} antialiased`}
      >
        <main>{children}</main>
        <ToastContainer position="top-center" autoClose={2000} />
      </body>
    </html>
  );
}
