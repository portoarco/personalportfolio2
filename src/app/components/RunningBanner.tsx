export default function RunningBanner() {
  const bannerContent = (
    <>
      <span className="text-white font-bold text-xl mx-8 drop-shadow-lg hover:text-blue-300 transition-all duration-300 hover:scale-105">
        🚀 Welcome to Arco's Portfolio - Fullstack Web Developer
      </span>
      <span className="text-white font-bold text-xl mx-8 drop-shadow-lg hover:text-purple-300 transition-all duration-300 hover:scale-105">
        ⭐ Available for Freelance Projects
      </span>
      <span className="text-white font-bold text-xl mx-8 drop-shadow-lg hover:text-cyan-300 transition-all duration-300 hover:scale-105">
        🏢 Company Profile Website
      </span>
      <span className="text-white font-bold text-xl mx-8 drop-shadow-lg hover:text-green-300 transition-all duration-300 hover:scale-105">
        😎 Personal Branding Portfolio
      </span>
      <span className="text-white font-bold text-xl mx-8 drop-shadow-lg hover:text-yellow-300 transition-all duration-300 hover:scale-105">
        💻 Software as Service (SaaS) Web Apps
      </span>
    </>
  );

  return (
    <div className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 py-4 overflow-hidden shadow-xl border-y border-blue-500/20">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15)_1px,transparent_1px)] bg-[length:25px_25px] opacity-40"></div>

      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.05)_50%,transparent_75%)] bg-[length:60px_60px] animate-pulse"></div>

      <div className="animate-marquee whitespace-nowrap relative z-10 flex">
        <div className="flex animate-marquee-content">{bannerContent}</div>
        <div className="flex animate-marquee-content">{bannerContent}</div>
      </div>

      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-900 to-transparent z-20 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-900 to-transparent z-20 pointer-events-none"></div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60"></div>
    </div>
  );
}
