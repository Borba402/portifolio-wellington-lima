"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "Python", level: 55, category: "Python", color: "#3776AB" },
  { name: "IA Generativa", level: 50, category: "IA", color: "#8B5CF6" },
  { name: "Machine Learning", level: 45, category: "IA", color: "#8B5CF6" },
  { name: "Deep Learning", level: 35, category: "IA", color: "#8B5CF6" },
  { name: "PLN — Linguagem Natural", level: 35, category: "IA", color: "#8B5CF6" },
  { name: "Visão Computacional", level: 30, category: "IA", color: "#8B5CF6" },
  { name: "Gestão de Projetos", level: 85, category: "Gestão", color: "#F07820" },
];

const certifications = [
  {
    name: "Técnico em Inteligência Artificial",
    institution: "Senac São Paulo",
    year: "2026 – Atual",
    status: "Em curso",
  },
  {
    name: "Programação em IA Generativa",
    institution: 'SENAI "Ary Torres"',
    year: "Mai 2026",
    status: "Concluído",
  },
  {
    name: "Aplicações com IA Generativa — Google Antigravity",
    institution: 'SENAI "Ary Torres"',
    year: "Jun 2026",
    status: "Concluído",
  },
  {
    name: "Fundamentos do Python 1",
    institution: 'SENAI "Ary Torres"',
    year: "Mar 2026",
    status: "Concluído",
  },
  {
    name: "Tecnólogo em Gestão e Empreendedorismo",
    institution: "Universidade Cruzeiro do Sul",
    year: "2023",
    status: "Concluído",
  },
  {
    name: "Gestão de Processos",
    institution: "ENAP",
    year: "2019",
    status: "Concluído",
  },
  {
    name: "Técnico em Computação Gráfica",
    institution: "Centro Universitário Senac",
    year: "2016",
    status: "Concluído",
  },
];

const toolkit = [
  { name: "Python", color: "#3776AB", bg: "rgba(55,118,171,0.12)" },
  { name: "Machine Learning", color: "#8B5CF6", bg: "rgba(139,92,246,0.12)" },
  { name: "IA Generativa", color: "#EC4899", bg: "rgba(236,72,153,0.12)" },
  { name: "LangChain", color: "#10B981", bg: "rgba(16,185,129,0.12)" },
  { name: "Pandas", color: "#3776AB", bg: "rgba(55,118,171,0.12)" },
  { name: "Power BI", color: "#F59E0B", bg: "rgba(245,158,11,0.12)" },
  { name: "SQL", color: "#6B7280", bg: "rgba(107,114,128,0.12)" },
  { name: "Git", color: "#F05032", bg: "rgba(240,80,50,0.12)" },
];

const militarySkills = [
  { label: "Disciplina", icon: "◆" },
  { label: "Liderança", icon: "◆" },
  { label: "Foco Sob Pressão", icon: "◆" },
  { label: "Organização Logística", icon: "◆" },
  { label: "Resiliência", icon: "◆" },
  { label: "Atenção a Detalhes", icon: "◆" },
  { label: "Gestão de Equipes", icon: "◆" },
  { label: "Decisão Crítica", icon: "◆" },
];

const categoryLabel: Record<string, string> = {
  Python: "PY",
  IA: "IA",
  Dados: "BD",
  Gestão: "GT",
};

export default function Habilidades() {
  return (
    <section id="habilidades" className="bg-navy-800 py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.04) 0%, transparent 65%)", filter: "blur(60px)" }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(240,120,32,0.04) 0%, transparent 65%)", filter: "blur(60px)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <div className="mb-16">
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="origin-left mb-6"
            style={{ width: "40px", height: "2px", background: "#F07820" }}
          />
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ color: "#F07820", fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", display: "block", marginBottom: "14px" }}
          >
            Competências e Formação
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(2.2rem, 5vw, 3.6rem)", lineHeight: "0.92", letterSpacing: "-0.03em", color: "#ffffff", marginBottom: "16px" }}
          >
            Habilidades &{" "}
            <span style={{ color: "#F07820" }}>Certificações</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: "#6B7280", fontFamily: "var(--font-inter)", fontWeight: 300, fontSize: "clamp(0.85rem, 1.3vw, 0.95rem)", maxWidth: "50ch", lineHeight: 1.7 }}
          >
            Competências técnicas em evolução contínua, integradas às soft skills forjadas em 8 anos de carreira militar.
          </motion.p>
        </div>

        {/* ── Toolkit badges ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap gap-3 mb-16"
        >
          {toolkit.map((t, i) => (
            <motion.span
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.3 }}
              whileHover={{ y: -3, scale: 1.05 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: "7px",
                background: t.bg, border: `1px solid ${t.color}33`,
                borderRadius: "999px", padding: "7px 16px",
                fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: "12px",
                color: t.color, cursor: "default", userSelect: "none",
                transition: "box-shadow 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = `0 4px 20px ${t.color}25`)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "none")}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: t.color, flexShrink: 0 }} />
              {t.name}
            </motion.span>
          ))}
        </motion.div>

        {/* ── Two columns: Skills + Certs ── */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-16">

          {/* Left — Skill bars */}
          <div className="p-5 sm:p-7 lg:p-8" style={{ background: "rgba(8,8,8,0.50)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "20px" }}>
            <h3 style={{ fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: "13px", color: "#ffffff", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "28px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ width: "3px", height: "18px", background: "#F07820", borderRadius: "2px" }} />
              Competências Técnicas
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: "13px", color: "#e5e7eb" }}>
                        {skill.name}
                      </span>
                      <span style={{
                        fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: "8px",
                        letterSpacing: "0.14em", textTransform: "uppercase",
                        color: skill.color, background: `${skill.color}18`,
                        border: `1px solid ${skill.color}35`,
                        borderRadius: "4px", padding: "2px 6px",
                      }}>
                        {categoryLabel[skill.category]}
                      </span>
                    </div>
                    <span style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: "11px", color: "#4B5563" }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div style={{ height: "5px", background: "rgba(255,255,255,0.05)", borderRadius: "999px", overflow: "hidden" }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.06 }}
                      style={{
                        height: "100%", borderRadius: "999px",
                        background: `linear-gradient(90deg, ${skill.color}CC, ${skill.color})`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Certifications */}
          <div className="p-5 sm:p-7 lg:p-8" style={{ background: "rgba(8,8,8,0.50)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "20px" }}>
            <h3 style={{ fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: "13px", color: "#ffffff", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "28px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ width: "3px", height: "18px", background: "#F07820", borderRadius: "2px" }} />
              Educação & Certificações
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  style={{
                    display: "flex", alignItems: "flex-start", gap: "12px",
                    background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.05)",
                    borderRadius: "12px", padding: "14px 16px",
                    transition: "border-color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,120,32,0.25)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(240,120,32,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.05)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.025)";
                  }}
                >
                  {/* Status indicator */}
                  <div style={{ flexShrink: 0, paddingTop: "2px" }}>
                    {cert.status === "Em curso" ? (
                      <span className="relative flex h-[9px] w-[9px] mt-1">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-[9px] w-[9px] bg-emerald-500" />
                      </span>
                    ) : (
                      <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(240,120,32,0.15)", border: "1px solid rgba(240,120,32,0.35)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="9" height="9" fill="none" stroke="#F07820" strokeWidth={2.5} viewBox="0 0 12 12">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Text */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: "13px", color: "#e5e7eb", lineHeight: 1.3, marginBottom: "3px" }}>
                      {cert.name}
                    </div>
                    <div style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "11px", color: "#4B5563" }}>
                      {cert.institution}
                    </div>
                  </div>

                  {/* Year + status */}
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px" }}>
                    <span style={{
                      fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: "9px",
                      letterSpacing: "0.12em", textTransform: "uppercase",
                      color: cert.status === "Em curso" ? "#6ee7b7" : "#F07820",
                      background: cert.status === "Em curso" ? "rgba(52,211,153,0.10)" : "rgba(240,120,32,0.10)",
                      border: `1px solid ${cert.status === "Em curso" ? "rgba(52,211,153,0.25)" : "rgba(240,120,32,0.25)"}`,
                      borderRadius: "4px", padding: "2px 7px",
                    }}>
                      {cert.status}
                    </span>
                    <span style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "10px", color: "#374151" }}>
                      {cert.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Military soft skills ── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8"
          >
            <div>
              <h3 style={{ fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: "13px", color: "#ffffff", letterSpacing: "0.08em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ width: "3px", height: "18px", background: "#F07820", borderRadius: "2px" }} />
                Diferenciais Forjados na Carreira Militar
              </h3>
              <p style={{ fontFamily: "var(--font-inter)", fontWeight: 300, fontSize: "12px", color: "#4B5563", marginTop: "6px", marginLeft: "13px" }}>
                8 anos de Exército Brasileiro — habilidades que a tecnologia não ensina
              </p>
            </div>
          </motion.div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {militarySkills.map((skill, index) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                whileHover={{ y: -3 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  background: "rgba(255,255,255,0.03)", border: "1px solid rgba(240,120,32,0.18)",
                  borderRadius: "10px", padding: "10px 18px", cursor: "default",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,120,32,0.45)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(240,120,32,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,120,32,0.18)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                }}
              >
                <span style={{ fontSize: "7px", color: "#F07820" }}>◆</span>
                <span style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: "13px", color: "#9CA3AF" }}>
                  {skill.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
