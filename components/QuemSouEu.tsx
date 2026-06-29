"use client";
import React from "react";
import { motion } from "framer-motion";

const traits = [
  { emoji: "💍", label: "Esposo", detail: "10 anos com Queren" },
  { emoji: "👨‍👧", label: "Pai", detail: "Filho de 4 anos" },
  { emoji: "🎷", label: "Músico", detail: "Sax soprano · 15+ anos" },
  { emoji: "✝️", label: "Cristão", detail: "Fé como fundação" },
  { emoji: "📚", label: "Aprendiz", detail: "Curioso por natureza" },
  { emoji: "🎯", label: "Líder", detail: "Equipes & propósito" },
];

const paragraphs: React.ReactElement[] = [
  <>
    Meu nome é Wellington, tenho 29 anos, sou{" "}
    <strong style={{ color: "#e5e7eb", fontWeight: 600 }}>esposo da Queren há 10 anos</strong> e{" "}
    <strong style={{ color: "#e5e7eb", fontWeight: 600 }}>pai de um menino de 4 anos</strong>. A família é uma das bases mais
    importantes da minha vida e grande parte do que faço está ligada à responsabilidade, ao cuidado e ao
    desejo constante de construir algo melhor para quem está ao meu lado.
  </>,
  <>
    Sou uma pessoa reservada e seletiva nas minhas relações, valorizando{" "}
    <strong style={{ color: "#e5e7eb", fontWeight: 600 }}>conexões verdadeiras</strong> e pessoas que caminham com propósito.
    Apesar do meu jeito tranquilo, com quem tenho proximidade gosto de criar momentos leves, brincar, rir e
    compartilhar boas experiências.
  </>,
  <>
    Entre as características que mais me definem estão a{" "}
    <strong style={{ color: "#e5e7eb", fontWeight: 600 }}>responsabilidade, a dedicação e a vontade de aprender</strong>.
    Sempre acreditei que, quando assumimos algo, devemos fazer com comprometimento. Quando encontro algo novo
    para aprender, procuro me dedicar até entender, desenvolver e transformar conhecimento em prática.
  </>,
  <>
    Também gosto de{" "}
    <strong style={{ color: "#e5e7eb", fontWeight: 600 }}>liderar pessoas e equipes</strong>. Para mim, liderança não
    significa apenas estar à frente, mas ouvir, aprender com pessoas mais experientes, orientar e tomar
    decisões pensando no crescimento coletivo.
  </>,
  <>
    Além da vida profissional, a música faz parte da minha história há mais de{" "}
    <strong style={{ color: "#e5e7eb", fontWeight: 600 }}>15 anos através do sax soprano</strong>. Essa caminhada
    fortaleceu em mim disciplina, constância e compromisso. Minha formação pessoal e os princípios que construí
    ao longo da vida também influenciam diretamente a maneira como me relaciono com as pessoas e com o trabalho.
  </>,
  <>
    Meu interesse por tecnologia sempre existiu, mas durante muito tempo enxerguei esse universo como algo
    distante e difícil. Quando decidi mergulhar de verdade nessa área, percebi que a tecnologia me permitia
    algo que me motivou profundamente:{" "}
    <strong style={{ color: "#F07820", fontWeight: 600 }}>aprender, aplicar e ver resultados acontecendo na prática</strong>.
    Hoje sigo construindo essa trajetória com a mesma dedicação que sempre levei para minha vida pessoal e
    profissional, buscando evoluir continuamente e criar soluções que possam gerar impacto real na vida das pessoas.
  </>,
];

export default function QuemSouEu() {
  return (
    <section
      id="quem-sou-eu"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "#090909" }}
    >
      {/* Glow decorativo */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(240,120,32,0.05) 0%, transparent 65%)", filter: "blur(80px)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.03) 0%, transparent 65%)", filter: "blur(80px)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <div className="mb-14">
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
            style={{
              color: "#F07820",
              fontFamily: "var(--font-inter)",
              fontWeight: 700,
              fontSize: "11px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "14px",
            }}
          >
            Além do Profissional
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
              lineHeight: "0.92",
              letterSpacing: "-0.03em",
              color: "#ffffff",
              marginBottom: "16px",
            }}
          >
            Quem Sou{" "}
            <span style={{ color: "#F07820", textShadow: "0 0 40px rgba(240,120,32,0.20)" }}>
              Eu
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              color: "#6B7280",
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              fontSize: "clamp(0.85rem, 1.3vw, 0.95rem)",
              maxWidth: "50ch",
              lineHeight: 1.7,
            }}
          >
            Por trás do código e das habilidades, existe uma pessoa — e essa parte também importa.
          </motion.p>
        </div>

        {/* ── Layout 2 colunas ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── Esquerda: Cards de facetas + quote ── */}
          <div>
            {/* Trait cards */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3 mb-10"
            >
              {traits.map((trait, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  style={{
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(240,120,32,0.12)",
                    borderRadius: "14px",
                    padding: "16px 18px",
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
                  <div style={{ fontSize: "22px", marginBottom: "8px", lineHeight: 1 }}>
                    {trait.emoji}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontWeight: 700,
                      fontSize: "13px",
                      color: "#ffffff",
                      marginBottom: "3px",
                    }}
                  >
                    {trait.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontWeight: 400,
                      fontSize: "11px",
                      color: "#4B5563",
                      lineHeight: 1.4,
                    }}
                  >
                    {trait.detail}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Quote em destaque */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              style={{
                borderLeft: "3px solid #F07820",
                paddingLeft: "20px",
                paddingTop: "4px",
                paddingBottom: "4px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
                  color: "#e5e7eb",
                  lineHeight: 1.55,
                  fontStyle: "italic",
                }}
              >
                "Quando assumimos algo, devemos fazer com comprometimento."
              </p>
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                  fontSize: "11px",
                  color: "#4B5563",
                  marginTop: "10px",
                  display: "block",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Wellington Lima
              </span>
            </motion.div>
          </div>

          {/* ── Direita: Parágrafos ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {paragraphs.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                style={{
                  color: "#9CA3AF",
                  fontFamily: "var(--font-inter)",
                  fontWeight: 300,
                  fontSize: "clamp(0.88rem, 1.4vw, 1rem)",
                  lineHeight: 1.85,
                }}
              >
                {para}
              </motion.p>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
