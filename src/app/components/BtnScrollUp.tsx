"use client";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface IBtnScrollUp {
  className?: string;
}
export default function BtnScrollUp({ className }: IBtnScrollUp) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            className={`bg-gradient-to-r from-amber-500 to-pink-500  border-4 border-white rounded-full  cursor-pointer ${className}`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileTap={{ scale: 1.5 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUp className="size-10 text-white" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
