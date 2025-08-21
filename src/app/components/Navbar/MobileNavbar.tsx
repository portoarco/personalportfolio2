"use client";
import { Button } from "@/components/ui/button";
import { Download, Menu, Phone, SquareChevronDown, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface IMobileNavbar {
  className?: string;
}

export default function MobileNavbar({ className }: IMobileNavbar) {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${className} ${
        open || isScrolled ? "bg-[#f2f2f2]" : "bg-transparent"
      }  fixed w-[100vw] z-60 rounded-b-xl `}
    >
      <div className="flex justify-between items-center ">
        <div id="logo">
          <div className="rounded-md bg-gray-100 p-1">
            <Image
              src="/logo.svg"
              width={100}
              height={100}
              alt="logo"
              className="size-7  "
            />
          </div>
        </div>
        <div id="logo-profile">
          <p
            className={` ${
              open || isScrolled ? "text-[#4D2D8C]" : "text-white"
            } font-fraunces font-extrabold text-2xl tracking-tighter`}
          >
            ARC
            <span className="italic text-yellow-500 ">DEV</span>
          </p>
        </div>
        <div id="btn">
          {open ? (
            <button
              onClick={() => setOpen(false)}
              className="border-2 border-[#4D2D8C] rounded-lg"
            >
              <X className={`text-[#4D2D8C]`}></X>
            </button>
          ) : (
            <button onClick={() => setOpen(true)}>
              <Menu
                className={`${isScrolled ? "text-[#4D2D8C]" : "text-white"} `}
              ></Menu>
            </button>
          )}
        </div>
      </div>
      <div id="dropdown" className="">
        {open && (
          <>
            {/* Main Menu */}
            <div>
              <ul className=" flex flex-col">
                <li
                  className="border-b border-gray-300 font-barlow font-light p-3  "
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Home
                </li>

                <Link href="#about">
                  <li className="border-b border-gray-300 font-barlow font-light p-3  ">
                    About
                  </li>
                </Link>
                <Link href="#portfolio">
                  <li className="border-b border-gray-300 font-barlow font-light p-3  ">
                    Portfolio
                  </li>
                </Link>
                <Link href="#testimonials">
                  <li className="border-b border-gray-300 font-barlow font-light p-3  ">
                    Testimonials
                  </li>
                </Link>
              </ul>
            </div>
            {/* Button */}
            <div className="flex  gap-x-5 mt-5">
              <Link href="#contactme">
                <Button className="md:p-5 rounded-lg bg-blue-600 hover:bg-blue-700">
                  <Phone />
                  Let's Talk
                </Button>
              </Link>
              <Link href="/">
                <Button className="md:p-5 rounded-lg" variant={"outline"}>
                  <Download />
                  Download CV
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
