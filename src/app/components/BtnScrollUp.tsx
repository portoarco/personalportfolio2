import { ArrowUp } from "lucide-react";

interface IBtnScrollUp {
  className?: string;
}
export default function BtnScrollUp({ className }: IBtnScrollUp) {
  return (
    <button
      className={`bg-orange-500  border-2 rounded-full animate-bounce cursor-pointer ${className}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp className="size-10 text-white" />
    </button>
  );
}
