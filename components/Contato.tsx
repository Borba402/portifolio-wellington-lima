"use client";
import { motion } from "framer-motion";

const LINKEDIN_URL = "https://www.linkedin.com/in/wellington-borba-lima-52455622b";
const GITHUB_URL = "https://github.com/Borba402";
const EMAIL = "wellingtonborbalima@gmail.com";

const contacts = [
  {
    label: "LinkedIn",
    value: "wellington-borba-lima",
    description: "Conecte-se profissionalmente",
    href: LINKEDIN_URL,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    accent: "#0077B5",
    accentRgb: "0,119,181",
    primary: true,
  },
  {
    label: "GitHub",
    value: "@Borba402",
    description: "Veja meus repositórios",
    href: GITHUB_URL,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    accent: "#e5e7eb",
    accentRgb: "229,231,235",
    primary: false,
  },
  {
    label: "E-mail",
    value: "wellingtonborbalima@gmail.com",
    description: "Envie uma mensagem direta",
    href: `mailto:${EMAIL}`,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    accent: "#F07820",
    accentRgb: "240,120,32",
    primary: false,
  },
];

export default function Contato() {
  return (
    <section id="contato" className="bg-navy-800 py-24 lg:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position: "absolute", top: "20%", left: "5%", width: "400px", height: "400px", background: "radial-gradient(ellipse, rgba(240,120,32,0.05) 0%, transparent 70%)", filter: "blur(40px)" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "5%", width: "300px", height: "300px", background: "radial-gradient(ellipse, rgba(240,120,32,0.04) 0%, transparent 70%)", filter: "blur(40px)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left — Título e contexto ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ width: "40px", height: "2px", background: "#F07820", marginBottom: "28px" }}
            />

            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ color: "#F07820", fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", display: "block", marginBottom: "16px" }}
            >
              Vamos nos Conectar
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(2.4rem, 5vw, 3.8rem)", lineHeight: "0.92", letterSpacing: "-0.03em", color: "#ffffff", marginBottom: "24px" }}
            >
              Vamos Construir<br />
              Algo{" "}
              <span style={{ color: "#F07820", textShadow: "0 0 40px rgba(240,120,32,0.25)" }}>
                Extraordinário
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{ color: "#9CA3AF", fontFamily: "var(--font-inter)", fontWeight: 300, fontSize: "clamp(0.9rem, 1.4vw, 1rem)", lineHeight: 1.75, maxWidth: "38ch", marginBottom: "36px" }}
            >
              Estou disponível para oportunidades em <strong style={{ color: "#e5e7eb", fontWeight: 600 }}>Inteligência Artificial</strong>, Engenharia de Prompt e Análise de Dados — em São Paulo ou remoto.
            </motion.p>

            {/* Disponibilidade badges */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(6,20,6,0.60)", border: "1px solid rgba(52,211,153,0.30)", borderRadius: "999px", padding: "7px 16px" }}>
                <span className="relative flex h-[7px] w-[7px]">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-[7px] w-[7px] bg-emerald-400" />
                </span>
                <span style={{ color: "#6ee7b7", fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: "11px" }}>Open to Work</span>
              </div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(240,120,32,0.20)", borderRadius: "999px", padding: "7px 16px" }}>
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="#F07820" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span style={{ color: "#9CA3AF", fontFamily: "var(--font-inter)", fontWeight: 500, fontSize: "11px" }}>Resposta em até 24h</span>
              </div>
            </motion.div>
          </div>

          {/* ── Right — Cards de contato ── */}
          <div className="flex flex-col gap-4">
            {contacts.map((c, idx) => (
              <motion.a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, duration: 0.5 }}
                whileHover={{ x: 6 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  background: c.primary ? `rgba(${c.accentRgb}, 0.08)` : "rgba(255,255,255,0.025)",
                  border: `1px solid rgba(${c.accentRgb}, ${c.primary ? "0.35" : "0.15"})`,
                  borderRadius: "16px",
                  padding: "20px 24px",
                  textDecoration: "none",
                  transition: "border-color 0.25s, background 0.25s, box-shadow 0.25s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = `rgba(${c.accentRgb}, 0.55)`;
                  (e.currentTarget as HTMLAnchorElement).style.background = `rgba(${c.accentRgb}, 0.10)`;
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 8px 32px rgba(${c.accentRgb}, 0.12)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = `rgba(${c.accentRgb}, ${c.primary ? "0.35" : "0.15"})`;
                  (e.currentTarget as HTMLAnchorElement).style.background = c.primary ? `rgba(${c.accentRgb}, 0.08)` : "rgba(255,255,255,0.025)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                }}
              >
                {/* Icon */}
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  width: "44px", height: "44px", borderRadius: "12px",
                  background: `rgba(${c.accentRgb}, 0.12)`,
                  color: c.accent,
                  flexShrink: 0,
                }}>
                  {c.icon}
                </div>

                {/* Text */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ color: "#ffffff", fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: "14px", marginBottom: "2px" }}>
                    {c.label}
                  </div>
                  <div style={{ color: "#6B7280", fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "12px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {c.value}
                  </div>
                  <div style={{ color: "#4B5563", fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "11px", marginTop: "2px" }}>
                    {c.description}
                  </div>
                </div>

                {/* Arrow */}
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" style={{ color: c.accent, opacity: 0.7, flexShrink: 0 }}>
                  <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.a>
            ))}

            {/* Main CTA */}
            <motion.a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                marginTop: "8px",
                padding: "16px 24px",
                background: "#F07820",
                borderRadius: "14px",
                color: "#ffffff",
                fontFamily: "var(--font-inter)",
                fontWeight: 700,
                fontSize: "14px",
                letterSpacing: "0.04em",
                textDecoration: "none",
                boxShadow: "0 8px 28px rgba(240,120,32,0.30)",
                transition: "box-shadow 0.25s, background 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 12px 40px rgba(240,120,32,0.50)";
                (e.currentTarget as HTMLAnchorElement).style.background = "#E06810";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 28px rgba(240,120,32,0.30)";
                (e.currentTarget as HTMLAnchorElement).style.background = "#F07820";
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Conectar no LinkedIn
            </motion.a>
          </div>

        </div>
      </div>
    </section>
  );
}
