"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MobileCTA from "../MobileCTA";
import { motion } from "motion/react";

export default function Header() {
  return (
    <header className="relative flex max-sm:flex-col justify-around align-middle items-center mt-5">
      <div id="greetings" className=" text-white  lg:w-[50%] ">
        <div className="flex flex-col gap-y-5 max-md:items-center">
          <div className="flex gap-x-2 max-md:items-center">
            <div className=" ">
              <p className="max-md:text-center text-4xl md:text-5xl font-barlow font-extrabold">
                Hello <span className="text-6xl text-orange-500">.</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col max-md:items-center max-md:justify-center">
            <p className="text-5xl max-md:text-center lg:text-6xl font-semibold mt-3 ">
              I'm <span className="text-yellow-300">Arco</span>
            </p>
            <div className="w-35 md:w-50 h-1 mt-2  bg-orange-500"></div>
          </div>
          <div className="mt-5 flex max-md:items-center max-md:justify-center">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
              className=" text-xl max-md:text-center lg:text-4xl bg-gradient-to-r from-red-500 to-orange-500 font-bold px-1 xl:px-5 py-3 "
            >
              Fullstack Web Developer
            </motion.span>
          </div>
          <p className="max-md:text-center text-xs lg:text-lg text-gray-200 lg:text-md">
            I'm Fullstack Web Developer Based in Indonesia. Specialized in
            ReactJS and NodeJS. Experienced in various projects with many
            clients around the world
          </p>
        </div>

        <div className="flex items-center flex-col md:flex-row md:gap-x-5 max-md:justify-center gap-y-8 max-md:items-center mt-10 ">
          <motion.div
            className=" bg-[#f3297d] hover:bg-[#f31370]   w-35 h-12 rounded-md relative hover:shadow-gray-100 cursor-pointer "
            whileTap={{ scale: 1.2 }}
            whileHover={{ scale: 0.9 }}
          >
            <a href="/cv/arco.pdf" download>
              <Button className=" absolute  bg-gray-100 hover:bg-white rounded-none rounded-tl-md rounded-bl-md text-black text-md font-semibold cursor-pointer w-23 h-12">
                View CV
              </Button>
              <Download className="text-white absolute top-2 right-3 size-7 cursor-pointer" />
            </a>
          </motion.div>
          <div className="flex gap-x-2  ">
            <Link href="https://github.com/portoarco" target="blank">
              <Avatar className="bg-white p-1 rounded-md size-10 cursor-pointer">
                <AvatarImage src="/sosmed/github.svg"></AvatarImage>
              </Avatar>
            </Link>
            <Link
              href="https://www.instagram.com/arcoanggoro123"
              target="blank"
            >
              <Avatar className="bg-white p-1 rounded-md size-10 cursor-pointer">
                <AvatarImage src="/sosmed/instagram.svg"></AvatarImage>
              </Avatar>{" "}
            </Link>
            <Link href="https://id.linkedin.com/in/arcoanggoro" target="blank">
              <Avatar className="bg-white p-1 rounded-md size-10 cursor-pointer">
                <AvatarImage src="/sosmed/linkedin.svg"></AvatarImage>
              </Avatar>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex  items-center max-lg:flex-col gap-x-3 px-5 ">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-15" />

          {/* Main image container */}
          <div className="relative">
            <div className=" relative mt-20 w-50 h-50 md:w-60 xl:w-90 xl:h-90 md:h-60 rounded-br-2xl rounded-tl-2xl overflow-hidden  shadow-2xl bg-gradient-to-r from-amber-400 to-orange-500 border-4 border-white  shadow-indigo-500/50 ">
              <Image
                src="/photo.png"
                alt="Arco - Fullstack Web Developer"
                fill
                className="object-cover hover:scale-130 transition duration-300 ease-in-out "
                priority
              />
            </div>
            {/* Mobile CTA Image */}
            {/* <MobileCTA className="md:hidden absolute -bottom-10 -left-10" /> */}
          </div>
          {/* Main Techstack Icons */}
          <div className="max-lg:hidden">
            <Avatar className=" p-1  size-16 absolute top-5 -left-25 xl:-left-30  border-4 border-white rounded-xl bg-white">
              <AvatarImage src="/techicons/react.svg"></AvatarImage>
            </Avatar>
            <Avatar className=" p-1 size-16 absolute top-15 -right-23 xl:-right-25  border-4 border-white rounded-xl bg-white">
              <AvatarImage src="/techicons/postgre.svg"></AvatarImage>
            </Avatar>
            <Avatar className=" p-1 size-16 absolute bottom-5 -right-22  border-4 border-white rounded-xl bg-white">
              <AvatarImage src="/techicons/nextjs.svg"></AvatarImage>
            </Avatar>
            <Avatar className=" p-1 size-16 absolute bottom-5 -left-22 xl:-left-30  border-4 border-white rounded-xl bg-white">
              <AvatarImage
                src="/techicons/typescript.svg"
                className="rounded-md"
              ></AvatarImage>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
}
