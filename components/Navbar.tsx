"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section on scroll
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-900/90 backdrop-blur-xl border-b border-gold-600/15 py-4 shadow-2xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link
            href="#inicio"
            className="flex items-center gap-3 group flex-shrink-0"
            onClick={() => setActiveSection("inicio")}
          >
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-gold-400/40 p-0.5 transition-all duration-300 group-hover:border-gold-400 group-hover:scale-105 gold-glow">
              <Image
                src="/profile.png"
                alt="Wellington Lima"
                width={36}
                height={36}
                className="rounded-full object-cover w-full h-full"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-white text-sm tracking-wide group-hover:text-gold-400 transition-colors duration-300">
                Wellington Borba Lima
              </span>
              <span className="text-[10px] text-slate tracking-widest uppercase font-medium">
                AI &amp; Data Specialist
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold tracking-wide transition-colors duration-300 relative py-2 ${
                    isActive ? "text-gold-400" : "text-slate hover:text-white"
                  }`}
                  onClick={() => setActiveSection(link.href.substring(1))}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA desktop */}
          <div className="hidden md:flex">
            <Link
              href="#contato"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-bold text-navy-900 rounded-lg group bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 hover:text-white dark:text-navy-900 focus:ring-4 focus:outline-none focus:ring-gold-500/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(240,192,64,0.3)] hover:scale-105"
            >
              <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-gold-400 rounded-md group-hover:bg-opacity-0 group-hover:text-white">
                Fale comigo
              </span>
            </Link>
          </div>

          {/* Hamburger button (Mobile) */}
          <button
            className="md:hidden text-slate hover:text-white p-2.5 rounded-xl border border-gold-600/10 hover:border-gold-600/30 transition-all duration-300 bg-navy-800/40"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            <svg
              className="w-6 h-6 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-navy-900/95 backdrop-blur-2xl border-b border-gold-600/15"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 max-w-7xl mx-auto">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                      isActive
                        ? "text-gold-400 bg-navy-800/60 border-l-2 border-gold-400"
                        : "text-slate hover:text-white hover:bg-navy-800/30"
                    }`}
                    onClick={() => {
                      setMenuOpen(false);
                      setActiveSection(link.href.substring(1));
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-4 px-4">
                <Link
                  href="#contato"
                  className="block text-center bg-gradient-to-r from-gold-500 to-gold-400 text-navy-900 font-bold py-3.5 rounded-xl hover:shadow-[0_0_20px_rgba(240,192,64,0.25)] transition-all duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Fale comigo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
