"use client";
import { motion } from "framer-motion";

const timelineSteps = [
  {
    year: "2016",
    title: "Ingresso no Exército",
    subtitle: "Soldado · Base Ibirapuera",
    description: "Ingressou nas Forças Armadas. Destacado por desempenho exemplar e selecionado para o Gabinete do CMSE.",
    highlight: false,
  },
  {
    year: "2017",
    title: "1º Colocado no CFC",
    subtitle: "Curso de Formação de Cabos",
    description: "Primeiro lugar no CFC. Designado para funções de alta confiança da chefia direta.",
    highlight: true,
  },
  {
    year: "2019",
    title: "Promovido a 3º Sargento",
    subtitle: "Liderança & Logística",
    description: "Conclusão do CFST. Supervisão de aprovisionamento, gestão de equipes e coordenação de eventos institucionais.",
    highlight: false,
  },
  {
    year: "2024",
    title: "Transição para IA",
    subtitle: "Carta de Referência · Senac SP",
    description: "Licenciado com Carta de Referência do Cel. Cesar Augusto Moura. Início da formação em IA, Machine Learning e Python.",
    highlight: true,
  },
  {
    year: "2026",
    title: "Tecnologia de Impacto",
    subtitle: "Em Evolução Contínua",
    description: "Especialização em IA Generativa, análise de dados e desenvolvimento de sistemas inteligentes.",
    highlight: false,
  },
];

const stats = [
  { value: "8", label: "Anos no Exército Brasileiro" },
  { value: "1º", label: "Colocado no Curso de Formação" },
  { value: "3º", label: "Sargento — Carreira Militar" },
  { value: "2024", label: "Início da jornada em IA" },
];

export default function Sobre() {
  return (
    <section id="sobre" className="bg-navy-900 py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(240,120,32,0.04) 0%, transparent 65%)", filter: "blur(80px)" }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.03) 0%, transparent 65%)", filter: "blur(80px)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── Left — Texto + Stats ── */}
          <div>
            {/* Accent line */}
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
              style={{ color: "#F07820", fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", display: "block", marginBottom: "16px" }}
            >
              Trajetória de Evolução
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(2.2rem, 5vw, 3.6rem)", lineHeight: "0.92", letterSpacing: "-0.03em", color: "#ffffff", marginBottom: "24px" }}
            >
              Da Disciplina<br />
              Militar à{" "}
              <span style={{ color: "#F07820", textShadow: "0 0 40px rgba(240,120,32,0.20)" }}>
                Inteligência
              </span>
              <br />
              <span style={{ color: "#F07820", textShadow: "0 0 40px rgba(240,120,32,0.20)" }}>
                Artificial
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{ color: "#9CA3AF", fontFamily: "var(--font-inter)", fontWeight: 300, fontSize: "clamp(0.875rem, 1.4vw, 1rem)", lineHeight: 1.8, maxWidth: "42ch", marginBottom: "16px" }}
            >
              A mesma <strong style={{ color: "#e5e7eb", fontWeight: 600 }}>dedicação e método</strong> que estruturaram 8 anos no Exército Brasileiro agora direcionam minha jornada na tecnologia.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.5 }}
              style={{ color: "#6B7280", fontFamily: "var(--font-inter)", fontWeight: 300, fontSize: "clamp(0.85rem, 1.3vw, 0.95rem)", lineHeight: 1.8, maxWidth: "42ch", marginBottom: "40px" }}
            >
              Não foi uma mudança de rumo — foi a aplicação de um método de trabalho rigoroso na vanguarda da Inteligência Artificial.
            </motion.p>

            {/* Quote highlight */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              style={{ borderLeft: "3px solid #F07820", paddingLeft: "20px", marginBottom: "20px" }}
            >
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1rem, 1.6vw, 1.15rem)", color: "#e5e7eb", lineHeight: 1.5, fontStyle: "italic" }}>
                "Licenciado com Carta de Referência — Coronel Cesar Augusto Moura, CMSE"
              </p>
              <p style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "11px", color: "#4B5563", marginTop: "8px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Exército Brasileiro · Fevereiro 2024
              </p>
            </motion.div>

            {/* PDF button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.45 }}
              style={{ marginBottom: "44px" }}
            >
              <a
                href="/carta-de-referencia.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "rgba(240,120,32,0.07)",
                  border: "1px solid rgba(240,120,32,0.30)",
                  borderRadius: "10px",
                  padding: "11px 20px",
                  textDecoration: "none",
                  transition: "background 0.2s, border-color 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(240,120,32,0.13)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(240,120,32,0.60)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 20px rgba(240,120,32,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(240,120,32,0.07)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(240,120,32,0.30)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                }}
              >
                {/* PDF icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ color: "#F07820", flexShrink: 0 }}>
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14 2v6h6M9 13h6M9 17h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: "12px", color: "#F07820", letterSpacing: "0.04em" }}>
                  Ver Carta de Referência
                </span>
                {/* Official badge */}
                <span style={{ fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: "9px", color: "#6B7280", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "4px", padding: "2px 6px", letterSpacing: "0.10em", textTransform: "uppercase" }}>
                  Oficial · PDF
                </span>
                {/* External arrow */}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ color: "#4B5563", flexShrink: 0 }}>
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + i * 0.08, duration: 0.4 }}
                  style={{
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(240,120,32,0.12)",
                    borderRadius: "14px",
                    padding: "18px 20px",
                    transition: "border-color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,120,32,0.35)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(240,120,32,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,120,32,0.12)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.025)";
                  }}
                >
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#F07820", letterSpacing: "-0.03em", lineHeight: 1 }}>
                    {stat.value}
                  </div>
                  <div style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "11px", color: "#6B7280", marginTop: "6px", lineHeight: 1.4 }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── Right — Timeline vertical ── */}
          <div className="relative">
            {/* Vertical connecting line */}
            <div
              className="absolute left-[19px] top-3 bottom-3 w-px"
              style={{ background: "linear-gradient(to bottom, #F07820, rgba(240,120,32,0.20) 80%, transparent)" }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {timelineSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex gap-6"
                  style={{ paddingBottom: i < timelineSteps.length - 1 ? "32px" : "0" }}
                >
                  {/* Node */}
                  <div style={{ flexShrink: 0, position: "relative", zIndex: 10 }}>
                    <div style={{
                      width: "38px", height: "38px", borderRadius: "50%",
                      background: step.highlight ? "#F07820" : "#111111",
                      border: `2px solid ${step.highlight ? "#F07820" : "rgba(240,120,32,0.35)"}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: step.highlight ? "0 0 20px rgba(240,120,32,0.35)" : "none",
                      transition: "all 0.3s",
                    }}>
                      <span style={{
                        fontFamily: "var(--font-inter)", fontWeight: 800, fontSize: "9px",
                        color: step.highlight ? "#ffffff" : "#F07820",
                        letterSpacing: "0.05em",
                      }}>
                        {step.year.slice(2)}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    style={{
                      flex: 1, background: "rgba(255,255,255,0.02)",
                      border: `1px solid ${step.highlight ? "rgba(240,120,32,0.25)" : "rgba(255,255,255,0.05)"}`,
                      borderRadius: "14px", padding: "16px 20px",
                      transition: "border-color 0.25s, background 0.25s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,120,32,0.35)";
                      (e.currentTarget as HTMLElement).style.background = "rgba(240,120,32,0.04)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = step.highlight ? "rgba(240,120,32,0.25)" : "rgba(255,255,255,0.05)";
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
                      <span style={{ fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: "10px", color: "#F07820", letterSpacing: "0.16em", textTransform: "uppercase" }}>
                        {step.year}
                      </span>
                      {step.highlight && (
                        <span style={{ fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: "8px", color: "#F07820", background: "rgba(240,120,32,0.12)", border: "1px solid rgba(240,120,32,0.30)", borderRadius: "4px", padding: "2px 7px", letterSpacing: "0.10em", textTransform: "uppercase" }}>
                          Destaque
                        </span>
                      )}
                    </div>
                    <h3 style={{ fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "3px", lineHeight: 1.3 }}>
                      {step.title}
                    </h3>
                    <div style={{ fontFamily: "var(--font-inter)", fontWeight: 500, fontSize: "10px", color: "#6B7280", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
                      {step.subtitle}
                    </div>
                    <p style={{ fontFamily: "var(--font-inter)", fontWeight: 300, fontSize: "12px", color: "#6B7280", lineHeight: 1.65 }}>
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
