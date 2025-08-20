"use client";
import Image from "next/image";
import DekstopNavbar from "./components/Navbar/DesktopNavbar";
import MobileNavbar from "./components/Navbar/MobileNavbar";
import Header from "./components/Header/Header";
import RunningBanner from "./components/RunningBanner";
import About from "./components/Aboutme/About";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import { ArrowUp, ArrowUpCircle } from "lucide-react";
import Link from "next/link";
import BtnScrollUp from "./components/BtnScrollUp";

export default function Home() {
  return (
    <section className=" bg-[#12023f]">
      {/* Navbar */}
      <nav className=" ">
        <DekstopNavbar className="max-lg:hidden px-15 py-8"></DekstopNavbar>
        <MobileNavbar className="lg:hidden p-8"></MobileNavbar>
      </nav>

      <header id="header" className="p-7 lg:p-10 bg-[#12023f] ">
        {/* Header Section */}
        <div className="">
          <Header></Header>
        </div>
      </header>
      {/* Running banner */}
      <div id="running-banner" className="w-full mt-15">
        <RunningBanner></RunningBanner>
      </div>
      <main className="p-7 lg:p-8 relative">
        {/* Button scroll up */}
        <div className="fixed bottom-5 right-5 z-50">
          <BtnScrollUp />
        </div>
        <About />
        <Skills />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </section>
  );
}
