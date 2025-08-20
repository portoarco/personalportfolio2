"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
interface IDesktopNavbar {
  className?: string;
}

export default function DekstopNavbar({ className }: IDesktopNavbar) {
  return (
    <nav className={`flex justify-between items-center ${className}`}>
      <div id="logo" className="flex items-center gap-x-2 2xl:gap-x-4">
        <div className="rounded-bl-xl rounded-tr-xl bg-white p-2">
          <Image
            src="/logo.svg"
            width={100}
            height={100}
            alt="logo"
            className="size-8 2xl:size-10 "
          />
        </div>
        <div>
          <p className="text-white font-fraunces font-extrabold text-4xl tracking-tighter ">
            ARC
            <span className="italic text-yellow-500 ">DEV</span>
          </p>
        </div>
      </div>
      <div id="menu-cta" className="flex items-center gap-x-10">
        <ul className="flex tracking-wider justify-between gap-x-10 text-white  text-lg 2xl:text-xl">
          <Link href="/">
            <li>Home</li>
          </Link>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="#testimonials">Testimonials</Link>
          </li>
        </ul>
        <div id="cta">
          <Link href="#contactme">
            <Button className="rounded-md p-6 text-lg 2xl:text-xl   3xl:p-4 bg-[#f3297d] hover:bg-[#f31370] cursor-pointer">
              Let's Talk
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
