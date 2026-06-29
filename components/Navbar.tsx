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
          <div className="hidden md:flex items-center gap-3">
            {/* Carta de Referência */}
            <a
              href="/carta-de-referencia.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 14px",
                border: "1px solid rgba(240,120,32,0.35)",
                borderRadius: "8px",
                background: "rgba(240,120,32,0.06)",
                color: "#F07820",
                fontFamily: "var(--font-inter)",
                fontWeight: 600,
                fontSize: "12px",
                letterSpacing: "0.02em",
                textDecoration: "none",
                transition: "background 0.2s, border-color 0.2s, box-shadow 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(240,120,32,0.14)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(240,120,32,0.65)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 16px rgba(240,120,32,0.20)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(240,120,32,0.06)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(240,120,32,0.35)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 2v6h6M9 13h6M9 17h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Carta de Referência
            </a>

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
            className="md:hidden overflow-hidden border-b border-gold-600/15"
            style={{ background: "rgba(8,8,8,0.97)", backdropFilter: "blur(24px)" }}
          >
            <div className="px-4 pt-3 pb-5 max-w-7xl mx-auto">
              {/* Nav links */}
              <div className="space-y-1 mb-4">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-[15px] font-semibold transition-all ${
                        isActive
                          ? "bg-[rgba(240,120,32,0.10)] border border-[rgba(240,120,32,0.30)]"
                          : "border border-transparent hover:bg-[rgba(255,255,255,0.04)]"
                      }`}
                      style={{ color: isActive ? "#F07820" : "#9CA3AF" }}
                      onClick={() => {
                        setMenuOpen(false);
                        setActiveSection(link.href.substring(1));
                      }}
                    >
                      {isActive && (
                        <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#F07820", flexShrink: 0 }} />
                      )}
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              {/* Divider */}
              <div style={{ height: "1px", background: "rgba(240,120,32,0.10)", marginBottom: "16px" }} />

              {/* CTA buttons */}
              <div className="flex flex-col gap-3">
                <a
                  href="/carta-de-referencia.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "13px",
                    border: "1px solid rgba(240,120,32,0.30)",
                    borderRadius: "12px",
                    background: "rgba(240,120,32,0.06)",
                    color: "#F07820",
                    fontFamily: "var(--font-inter)",
                    fontWeight: 600,
                    fontSize: "13px",
                    textDecoration: "none",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 2v6h6M9 13h6M9 17h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  Carta de Referência
                </a>
                <Link
                  href="#contato"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "14px",
                    background: "#F07820",
                    borderRadius: "12px",
                    color: "#fff",
                    fontFamily: "var(--font-inter)",
                    fontWeight: 700,
                    fontSize: "14px",
                    textDecoration: "none",
                    boxShadow: "0 4px 20px rgba(240,120,32,0.30)",
                  }}
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
