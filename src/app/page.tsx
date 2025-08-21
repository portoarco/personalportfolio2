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
import { motion, useScroll } from "motion/react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <section className=" bg-[#12023f]">
      {/* Scroll Indicator */}
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          zIndex: 50,
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          // backgroundColor: "white",
        }}
        className="max-md:hidden bg-gradient-to-r from-amber-500 to-pink-500 "
      />

      {/* Navbar */}
      <nav className=" ">
        <DekstopNavbar className="max-lg:hidden px-15 py-8"></DekstopNavbar>
        <MobileNavbar className="lg:hidden p-8"></MobileNavbar>
      </nav>

      <header id="header" className="p-7 lg:p-10 bg-[#12023f] ">
        {/* Header Section */}
        <div className="max-lg:mt-20">
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
