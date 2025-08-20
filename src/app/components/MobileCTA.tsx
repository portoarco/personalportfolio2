interface IMobileCTA {
  className?: string;
}

export default function MobileCTA({ className }: IMobileCTA) {
  return (
    <section className={`${className}`}>
      <div className="w-[70vw] h-20 rounded-md bg-white/90 ">
        <p>hello</p>
      </div>
    </section>
  );
}
