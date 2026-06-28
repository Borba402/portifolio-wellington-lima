"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/wellington-borba-lima-52455622b",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/Borba402",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:wellingtonborbalima@gmail.com",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 relative overflow-hidden">
      {/* Top orange accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-40" />

      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gold-500/3 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-14 md:py-16">

        {/* Main row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12">

          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <div>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "1.1rem",
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                }}
              >
                Wellington Borba Lima
              </span>
              <div
                style={{
                  width: "32px",
                  height: "2px",
                  background: "#F07820",
                  marginTop: "8px",
                }}
              />
            </div>
            <p style={{ color: "#9CA3AF", fontSize: "12px", fontFamily: "var(--font-inter)", fontWeight: 400, lineHeight: 1.7 }}>
              Discipline · Artificial Intelligence<br />
              Python · Innovation &amp; Technology
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-1">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "34px",
                    height: "34px",
                    borderRadius: "8px",
                    border: "1px solid rgba(240,120,32,0.25)",
                    color: "#9CA3AF",
                    background: "rgba(255,255,255,0.03)",
                    transition: "color 0.2s, border-color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#F07820";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(240,120,32,0.55)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(240,120,32,0.07)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#9CA3AF";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(240,120,32,0.25)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.03)";
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation column */}
          <div className="flex flex-col gap-3">
            <span style={{ color: "#F07820", fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: "10px", letterSpacing: "0.20em", textTransform: "uppercase" }}>
              Navegação
            </span>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: "#6B7280",
                  fontFamily: "var(--font-inter)",
                  fontWeight: 500,
                  fontSize: "13px",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#ffffff")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#6B7280")}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Status + back to top column */}
          <div className="flex flex-col gap-4 md:items-end">
            {/* Open to work badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(6,20,6,0.60)",
                border: "1px solid rgba(52,211,153,0.25)",
                borderRadius: "999px",
                padding: "6px 14px",
              }}
            >
              <span className="relative flex h-[7px] w-[7px]">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-[7px] w-[7px] bg-emerald-400" />
              </span>
              <span style={{ color: "#6ee7b7", fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: "11px", letterSpacing: "0.08em" }}>
                Open to Work
              </span>
            </div>

            <p style={{ color: "#4B5563", fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "12px", textAlign: "right", lineHeight: 1.6 }}>
              Disponível para oportunidades<br />
              em IA e Dados · São Paulo, SP
            </p>

            {/* Back to top */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                background: "transparent",
                border: "1px solid rgba(240,120,32,0.30)",
                borderRadius: "8px",
                padding: "8px 14px",
                color: "#F07820",
                fontFamily: "var(--font-inter)",
                fontWeight: 600,
                fontSize: "11px",
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#F07820";
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(240,120,32,0.07)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(240,120,32,0.30)";
                (e.currentTarget as HTMLButtonElement).style.background = "transparent";
              }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 10V2M6 2L2 6M6 2L10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Voltar ao topo
            </motion.button>
          </div>

        </div>

        {/* Bottom divider */}
        <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.05)", marginBottom: "20px" }} />

        {/* Copyright row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={{ color: "#374151", fontFamily: "var(--font-inter)", fontWeight: 500, fontSize: "11px" }}>
            © {currentYear} Wellington Borba Lima · Todos os direitos reservados
          </p>
          <p style={{ color: "#374151", fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "11px" }}>
            Desenvolvido em São Paulo, SP · Brasil
          </p>
        </div>

      </div>
    </footer>
  );
}
