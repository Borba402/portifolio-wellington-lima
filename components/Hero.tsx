"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const roles = [
  "Técnico em Inteligência Artificial",
  "Desenvolvedor Python",
  "Especialista em IA Generativa",
  "Analista de Dados",
];

function TypingText() {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    if (waiting) return;
    const current = roles[roleIdx];
    const speed = deleting ? 28 : 55;
    const timer = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setWaiting(true);
          setTimeout(() => { setWaiting(false); setDeleting(true); }, 2600);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") { setDeleting(false); setRoleIdx((i) => (i + 1) % roles.length); }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [text, deleting, roleIdx, waiting]);

  return (
    <span className="text-gold-400" style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}>
      {text}
      <span className="inline-block w-[2px] h-[1.1em] bg-gold-400 ml-[3px] align-middle animate-blink" />
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-navy-900 overflow-hidden circuit-bg"
    >
      {/* ── Hard left mask so text is always legible ── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, #080808 0%, #080808 28%, rgba(8,8,8,0.88) 42%, rgba(8,8,8,0.35) 58%, transparent 78%)",
        }}
      />

      {/* ══════════════════════════════════════════
          PHOTO PANEL — right half, absolutely placed
      ══════════════════════════════════════════ */}
      <div className="absolute inset-y-0 right-0 w-[56%] z-0 hidden md:block">

        {/* ── Atmospheric glow — BELOW face level only ── */}
        {/* Large background halo (low, subtle) */}
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: "-5%", left: "0%",
            width: "100%", height: "70%",
            background:
              "radial-gradient(ellipse at 45% 90%, rgba(240,120,32,0.18) 0%, rgba(212,96,16,0.08) 38%, transparent 68%)",
            filter: "blur(28px)",
            zIndex: 1,
          }}
        />
        {/* Warm accent — waist/lower torso level (not the face!) */}
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: "15%", left: "15%",
            width: "55%", height: "40%",
            background:
              "radial-gradient(ellipse at 50% 60%, rgba(240,120,32,0.15) 0%, rgba(200,90,10,0.06) 50%, transparent 75%)",
            filter: "blur(20px)",
            zIndex: 1,
          }}
        />

        {/* The photo */}
        <div className="relative w-full h-full" style={{ zIndex: 2 }}>
          <Image
            src="/profile.png"
            alt="Wellington Lima"
            fill
            className="object-cover object-top"
            priority
            quality={95}
            sizes="56vw"
          />
          {/* Left gradient — dissolves photo edge into text zone */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.60) 18%, rgba(8,8,8,0.15) 40%, transparent 62%)",
            }}
          />
          {/* Bottom gradient — feet dissolve */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, #080808 0%, rgba(8,8,8,0.45) 20%, transparent 45%)",
            }}
          />
          {/* Top gradient — very subtle */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, rgba(8,8,8,0.30) 0%, transparent 15%)",
            }}
          />
        </div>

        {/* ── Floating badges — positioned AWAY from face ── */}

        {/* TECH STACK → far right, at shoulder/arm level (~40%), not the face zone */}
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute z-20"
          style={{ top: "42%", right: "4%" }}
        >
          <div className="bg-[rgba(8,8,8,0.88)] border border-[rgba(240,120,32,0.45)] rounded-xl px-4 py-3 shadow-2xl backdrop-blur-md">
            <div style={{ color: "#F07820", fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              Tech Stack
            </div>
            <div style={{ color: "#fff", fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: "11px", marginTop: "2px" }}>
              IA · Python · ML
            </div>
          </div>
        </motion.div>


        {/* OPEN TO WORK → bottom right */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3.5, delay: 1, repeat: Infinity, ease: "easeInOut" }}
          className="absolute z-20"
          style={{ bottom: "8%", right: "8%" }}
        >
          <div className="bg-[rgba(6,20,6,0.88)] border border-[rgba(52,211,153,0.35)] rounded-xl px-3 py-2 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span style={{ color: "#6ee7b7", fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                Open to Work
              </span>
            </div>
          </div>
        </motion.div>

        {/* Corner accent — top right (editorial bracket) */}
        <div className="absolute z-10 pointer-events-none" style={{ top: "8%", right: "5%" }}>
          <div style={{ width: "32px", height: "1px", background: "rgba(240,120,32,0.45)" }} />
          <div style={{ width: "1px", height: "32px", background: "rgba(240,120,32,0.45)" }} />
        </div>

        {/* Corner accent — bottom left */}
        <div className="absolute z-10 pointer-events-none flex flex-col items-start" style={{ bottom: "8%", left: "5%" }}>
          <div style={{ width: "1px", height: "32px", background: "rgba(240,120,32,0.45)" }} />
          <div style={{ width: "32px", height: "1px", background: "rgba(240,120,32,0.45)" }} />
        </div>
      </div>

      {/* ══════════════════════════════════════════
          TEXT CONTENT — left zone
      ══════════════════════════════════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 min-h-screen flex items-start md:items-center">
        <div className="w-full md:max-w-[50%] pt-20 pb-8 md:py-0 pr-[100px] sm:pr-0">

          {/* Editorial orange accent bar */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="origin-left mb-8"
            style={{ width: "40px", height: "2px", background: "#F07820" }}
          />

          {/* Open to Work pill */}
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2.5 mb-8"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(240,120,32,0.25)",
              borderRadius: "999px",
              padding: "7px 16px",
              backdropFilter: "blur(8px)",
            }}
          >
            <span className="relative flex h-[7px] w-[7px]">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-[7px] w-[7px] bg-emerald-400" />
            </span>
            <span style={{ color: "#9CA3AF", fontFamily: "var(--font-inter)", fontWeight: 500, fontSize: "12px", letterSpacing: "0.06em" }}>
              Open to Work · São Paulo, SP
            </span>
          </motion.div>

          {/* Sub-label "olá, eu sou" */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <span style={{
              color: "#9CA3AF",
              fontFamily: "var(--font-inter)",
              fontWeight: 400,
              fontSize: "11px",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
            }}>
              Olá, eu sou
            </span>
          </motion.div>

          {/* ── GIANT NAME — three lines for full name impact ── */}
          <h1
            className="select-none mb-6"
            style={{ fontFamily: "var(--font-display)", lineHeight: "0.90" }}
          >
            <motion.span
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.28, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="block text-white"
              style={{
                fontWeight: 900,
                fontSize: "clamp(2.2rem, 6vw, 4.8rem)",
                letterSpacing: "-0.035em",
              }}
            >
              Wellington
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.36, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="block text-white"
              style={{
                fontWeight: 900,
                fontSize: "clamp(2.2rem, 6vw, 4.8rem)",
                letterSpacing: "-0.035em",
              }}
            >
              Borba
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.44, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="block"
              style={{
                fontWeight: 900,
                fontSize: "clamp(2.2rem, 6vw, 4.8rem)",
                letterSpacing: "-0.035em",
                color: "#F07820",
                textShadow: "0 0 48px rgba(240,120,32,0.35), 0 0 90px rgba(240,120,32,0.12)",
              }}
            >
              Lima.
            </motion.span>
          </h1>

          {/* Typing role — Inter Light */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.52, duration: 0.5 }}
            className="mb-6"
            style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.2rem)", minHeight: "1.7rem" }}
          >
            <TypingText />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62, duration: 0.5 }}
            className="mb-10"
            style={{
              color: "#9CA3AF",
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              fontSize: "clamp(0.78rem, 1.4vw, 1rem)",
              lineHeight: 1.65,
              maxWidth: "38ch",
            }}
          >
            A mesma{" "}
            <strong style={{ color: "#e5e7eb", fontWeight: 600 }}>disciplina e método</strong>{" "}
            que estruturaram 8 anos no Exército Brasileiro agora impulsionam soluções robustas em IA e dados.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-3.5 mb-8 md:mb-14"
          >
            <Link
              href="#projetos"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "15px 32px",
                background: "#F07820",
                color: "#fff",
                fontFamily: "var(--font-inter)",
                fontWeight: 700,
                fontSize: "14px",
                letterSpacing: "0.05em",
                borderRadius: "12px",
                textDecoration: "none",
                transition: "all 0.25s ease",
                boxShadow: "0 4px 20px rgba(240,120,32,0.30)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 28px rgba(240,120,32,0.40)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 0 rgba(240,120,32,0)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              }}
            >
              Ver Projetos
            </Link>
            <Link
              href="#sobre"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "15px 32px",
                border: "1px solid rgba(240,120,32,0.45)",
                color: "#F07820",
                fontFamily: "var(--font-inter)",
                fontWeight: 600,
                fontSize: "14px",
                letterSpacing: "0.05em",
                borderRadius: "12px",
                textDecoration: "none",
                transition: "all 0.25s ease",
                background: "rgba(240,120,32,0.05)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#F07820";
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(240,120,32,0.08)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(240,120,32,0.40)";
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "#F07820";
              }}
            >
              Sobre Mim
            </Link>
          </motion.div>

          {/* ── Stats — Playfair numbers, Inter labels ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.86, duration: 0.6 }}
            className="grid grid-cols-3 pt-6 md:pt-8"
            style={{ borderTop: "1px solid rgba(240,120,32,0.15)" }}
          >
            {[
              { value: "8", label: "Anos Exército" },
              { value: "2024", label: "Início em IA" },
              { value: "SP", label: "São Paulo" },
            ].map((stat, i) => (
              <div key={i} style={{ paddingRight: i < 2 ? "12px" : "0", borderRight: i < 2 ? "1px solid rgba(240,120,32,0.10)" : "none", paddingLeft: i > 0 ? "12px" : "0" }}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    fontSize: "clamp(1.4rem, 4vw, 2rem)",
                    color: "#F07820",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 500,
                    fontSize: "9px",
                    color: "#6B7280",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginTop: "6px",
                    lineHeight: 1.3,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Mobile photo — no longer needed (photo now shows inline like desktop) */}
      <div className="hidden" style={{ height: "460px" }}>
        {/* Orange atmospheric glow at bottom */}
        <div
          className="absolute inset-0 z-[3] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 105%, rgba(240,120,32,0.22) 0%, transparent 55%)" }}
        />
        <Image
          src="/profile.png"
          alt="Wellington Lima"
          fill
          className="object-cover"
          style={{ objectPosition: "center 8%" }}
          quality={95}
          sizes="100vw"
        />
        {/* Bottom fade */}
        <div
          className="absolute inset-0 z-[2]"
          style={{ background: "linear-gradient(to top, #080808 0%, rgba(8,8,8,0.08) 28%, transparent 52%)" }}
        />
        {/* Top fade */}
        <div
          className="absolute inset-0 z-[2]"
          style={{ background: "linear-gradient(to bottom, rgba(8,8,8,0.38) 0%, transparent 18%)" }}
        />
        {/* Tech stack badge — top right */}
        <div className="absolute top-4 right-4 z-[4]">
          <div className="bg-[rgba(8,8,8,0.88)] border border-[rgba(240,120,32,0.50)] rounded-xl px-3 py-2 shadow-2xl backdrop-blur-md">
            <div style={{ color: "#F07820", fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: "8px", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              Tech Stack
            </div>
            <div style={{ color: "#fff", fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: "10px", marginTop: "2px" }}>
              IA · Python · ML
            </div>
          </div>
        </div>
        {/* Open to Work badge — bottom right */}
        <div className="absolute bottom-6 right-4 z-[4]">
          <div className="bg-[rgba(6,20,6,0.92)] border border-[rgba(52,211,153,0.40)] rounded-xl px-3 py-2 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span style={{ color: "#6ee7b7", fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                Open to Work
              </span>
            </div>
          </div>
        </div>
        {/* Corner accent — top left editorial bracket */}
        <div className="absolute top-4 left-4 z-[4]">
          <div style={{ width: "22px", height: "1px", background: "rgba(240,120,32,0.55)" }} />
          <div style={{ width: "1px", height: "22px", background: "rgba(240,120,32,0.55)" }} />
        </div>
      </div>

      {/* Mobile avatar — pequeno, circular, ao lado do nome */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="md:hidden absolute z-20"
        style={{ top: "172px", right: "20px" }}
      >
        <div style={{
          width: "88px", height: "88px",
          borderRadius: "50%",
          overflow: "hidden",
          border: "2px solid rgba(240,120,32,0.60)",
          boxShadow: "0 0 24px rgba(240,120,32,0.22), 0 4px 18px rgba(0,0,0,0.55)",
          position: "relative",
        }}>
          <Image
            src="/profile.png"
            alt="Wellington Lima"
            width={88}
            height={88}
            quality={90}
            style={{ objectFit: "cover", objectPosition: "center 5%", width: "100%", height: "100%" }}
          />
        </div>
        {/* Indicador Online */}
        <div style={{
          position: "absolute", bottom: "4px", right: "4px",
          width: "14px", height: "14px", borderRadius: "50%",
          background: "#34D399", border: "2px solid #080808",
        }} />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="hidden md:flex absolute bottom-8 z-10"
        style={{ left: "calc(25% - 20px)" }}
      >
        <Link href="#sobre" className="group flex flex-col items-center gap-2">
          <span
            style={{
              color: "#9CA3AF",
              fontFamily: "var(--font-inter)",
              fontWeight: 600,
              fontSize: "9px",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
            }}
          >
            Explorar
          </span>
          <div
            style={{
              width: "18px", height: "32px",
              borderRadius: "999px",
              border: "1px solid rgba(156,163,175,0.30)",
              display: "flex",
              justifyContent: "center",
              padding: "5px 0",
            }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ width: "4px", height: "6px", borderRadius: "999px", background: "#F07820" }}
            />
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
