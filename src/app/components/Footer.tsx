"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footerElement = document.getElementById("footer");
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      id="footer"
      className={`bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700 mt-20 relative overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-red-500/5 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,165,0,0.1),transparent_50%)] animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div
            className={`md:col-span-2 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <p className="text-3xl text-white font-fraunces font-extrabold tracking-tighter bg-clip-text  mb-4 hover:scale-105 transition-transform duration-300 cursor-default ">
              ARC
              <span className="italic text-yellow-500 ">DEV</span>
            </p>
            <p className="text-slate-400 mb-6 max-w-md leading-relaxed hover:text-slate-300 transition-colors duration-300">
              Passionate full-stack developer creating innovative web solutions
              with modern technologies. Let's build something amazing together.
            </p>

            <div className="flex space-x-6">
              {[
                {
                  name: "github",
                  href: "https://github.com/portoarco",
                  path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
                },
                {
                  name: "linkedin",
                  href: "https://id.linkedin.com/in/arcoanggoro",
                  path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                },
                {
                  name: "whatsapp",
                  href: "https://api.whatsapp.com/send?phone=6285602907659",
                  path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488",
                },
              ].map((social, index) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className={`relative group transition-all duration-300 ${
                    hoveredIcon === social.name ? "scale-125" : "scale-100"
                  }`}
                  onMouseEnter={() => setHoveredIcon(social.name)}
                  onMouseLeave={() => setHoveredIcon(null)}
                  aria-label={`${social.name} Profile`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <svg
                    className={`w-7 h-7 relative z-10 text-slate-400 group-hover:text-white transition-all duration-300 ${
                      hoveredIcon === social.name ? "animate-bounce" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.path} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h4 className="text-white font-semibold mb-6 text-lg relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 transform origin-left transition-all duration-500 hover:w-full"></div>
            </h4>
            <ul className="space-y-3">
              {["About", "Portfolio", "Contact", "Blog"].map((item, index) => (
                <li
                  key={item}
                  className={`transition-all duration-300 delay-${index * 100}`}
                >
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-400 hover:text-orange-400 transition-all duration-300 group flex items-center"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`transition-all duration-700 delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h4 className="text-white font-semibold mb-6 text-lg relative">
              Services
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 transform origin-left transition-all duration-500 hover:w-full"></div>
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Web Development", icon: "🌐" },
                { name: "UI/UX Design", icon: "🎨" },
                { name: "Project Management", icon: "💻" },
                { name: "Consulting", icon: "💡" },
              ].map((service, index) => (
                <li
                  key={service.name}
                  className={`transition-all duration-300 delay-${
                    index * 100
                  } group cursor-pointer`}
                >
                  <div className="flex items-center space-x-2 text-slate-400 group-hover:text-white transition-colors duration-300">
                    <span className="text-lg group-hover:animate-pulse">
                      {service.icon}
                    </span>
                    <span>{service.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className={`border-t border-slate-700 mt-12 pt-8 transition-all duration-700 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm hover:text-slate-300 transition-colors duration-300">
              © 2025 Arco Dev. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              {["Privacy Policy", "Terms of Service"].map((item) => (
                <Link
                  key={item}
                  href={"/"}
                  className="text-slate-400 hover:text-orange-400 text-sm transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex items-center space-x-2 text-slate-400 hover:text-orange-400 transition-all duration-300 hover:scale-105"
            >
              <svg
                className="w-5 h-5 group-hover:animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
              <span className="text-sm">Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
