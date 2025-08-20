import { Menu, SquareChevronDown } from "lucide-react";
import Image from "next/image";

interface IMobileNavbar {
  className?: string;
}

export default function MobileNavbar({ className }: IMobileNavbar) {
  return (
    <nav className={`${className} flex justify-between items-center `}>
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
      <div>
        <p className="text-white font-fraunces font-extrabold text-2xl tracking-tighter ">
          ARC
          <span className="italic text-yellow-500 ">DEV</span>
        </p>
      </div>
      <div id="dropdown">
        <Menu className="text-white" />
      </div>
    </nav>
  );
}
