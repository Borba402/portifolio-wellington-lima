"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "Python", level: 65, category: "Python" },
  { name: "Machine Learning", level: 55, category: "IA" },
  { name: "Deep Learning", level: 50, category: "IA" },
  { name: "IA Generativa", level: 60, category: "IA" },
  { name: "Redes Neurais", level: 50, category: "IA" },
  { name: "Processamento de Linguagem Natural (PLN)", level: 45, category: "IA" },
  { name: "Análise de Dados", level: 62, category: "Dados" },
  { name: "Business Intelligence (BI)", level: 55, category: "Dados" },
  { name: "Visão Computacional", level: 45, category: "IA" },
  { name: "Gestão de Projetos & Processos", level: 85, category: "Gestão" },
];

const certifications = [
  { name: "Técnico em Inteligência Artificial", institution: "Senac São Paulo", year: "2024 – Atual", status: "Em curso" },
  { name: "Programação em IA Generativa (40h)", institution: 'SENAI "Ary Torres"', year: "Mai 2026", status: "Concluído" },
  { name: "Fundamentos do Python 1 (30h)", institution: 'SENAI "Ary Torres"', year: "Mar 2026", status: "Concluído" },
  { name: "Tecnólogo em Gestão e Empreendedorismo", institution: "Universidade Cruzeiro do Sul", year: "2023", status: "Concluído" },
  { name: "Gestão de Processos", institution: "ENAP", year: "2019", status: "Concluído" },
  { name: "Técnico em Computação Gráfica", institution: "Centro Universitário Senac", year: "2016", status: "Concluído" },
];

const militarySoftSkills = [
  "Disciplina",
  "Liderança Militar",
  "Foco Sob Pressão",
  "Organização Logística",
  "Resiliência e Adaptabilidade",
  "Atenção a Detalhes",
  "Gestão de Equipes",
  "Tomada de Decisão Crítica",
];

const categoryColors: Record<string, string> = {
  Python: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  IA: "bg-purple-500/10 text-purple-400 border-purple-500/30",
  Dados: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  Gestão: "bg-gold-500/10 text-gold-400 border-gold-500/30",
};

export default function Habilidades() {
  return (
    <section id="habilidades" className="bg-navy-900 py-24 lg:py-32 relative overflow-hidden">
      {/* Visual background decorations */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-navy-800/60 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] bg-gold-600/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-gold-500 text-xs sm:text-sm font-bold tracking-[0.25em] uppercase block mb-3"
          >
            Competências e Formação
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="font-display text-4xl sm:text-5xl font-black text-white mt-1 mb-6"
          >
            Habilidades &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-500">Certificações</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="gold-line w-28 mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate text-base sm:text-lg max-w-2xl mx-auto"
          >
            Habilidades técnicas refinadas e certificações estruturadas na área de tecnologia e dados, integradas com fortes soft skills corporativas.
          </motion.p>
        </div>

        {/* Core Layout Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Tech Skills (Animated Progress Bars) */}
          <div className="space-y-7 bg-navy-800/40 border border-gold-600/10 p-6 sm:p-8 rounded-2xl backdrop-blur-sm shadow-xl">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="h-6 w-1 bg-gold-400 rounded-full inline-block" />
              Competências Técnicas
            </h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="text-white text-sm sm:text-base font-semibold group-hover:text-gold-400 transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span
                        className={`text-[9px] font-bold px-2 py-0.5 rounded-full border tracking-wide uppercase ${
                          categoryColors[skill.category]
                        }`}
                      >
                        {skill.category}
                      </span>
                    </div>
                    <span className="text-slate text-xs font-semibold">{skill.level}%</span>
                  </div>
                  
                  {/* Outer track bar */}
                  <div className="h-2 bg-navy-900 rounded-full overflow-hidden p-0.5 border border-gold-600/5">
                    {/* Inner animated fill bar */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.05 }}
                      className="h-full bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Certifications */}
          <div className="space-y-7 bg-navy-800/40 border border-gold-600/10 p-6 sm:p-8 rounded-2xl backdrop-blur-sm shadow-xl">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="h-6 w-1 bg-gold-400 rounded-full inline-block" />
              Educação &amp; Certificações
            </h3>

            <div className="space-y-4 max-h-[520px] overflow-y-auto pr-2 custom-scrollbar">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex items-start gap-4 bg-navy-900/60 border border-gold-600/10 rounded-xl p-4.5 hover:border-gold-500/40 transition-all duration-300 group shadow-md"
                >
                  {/* Left Status Marker Dot */}
                  <div className="flex-shrink-0 mt-1">
                    {cert.status === "Em curso" ? (
                      <span className="relative flex h-2.5 w-2.5 mt-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                      </span>
                    ) : (
                      <svg className="w-5 h-5 text-gold-400 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  
                  {/* Central Text Information */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white text-sm sm:text-base font-bold leading-snug group-hover:text-gold-400 transition-colors duration-300">
                      {cert.name}
                    </h4>
                    <p className="text-slate text-xs mt-1 font-medium">{cert.institution}</p>
                  </div>
                  
                  {/* Right Badges */}
                  <div className="flex-shrink-0 text-right flex flex-col items-end justify-between self-stretch">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase border tracking-wider ${
                        cert.status === "Em curso"
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/25"
                          : "bg-gold-500/10 text-gold-400 border-gold-500/25"
                      }`}
                    >
                      {cert.status}
                    </span>
                    <span className="text-slate/60 text-[10px] sm:text-xs font-semibold mt-auto">
                      {cert.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Soft Skills Section (Military Background highlights) */}
        <div className="mt-20">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white text-center mb-8 flex items-center justify-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            Diferenciais Forjados na Carreira Militar
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
          </h3>
          
          <div className="flex flex-wrap gap-3.5 justify-center max-w-4xl mx-auto">
            {militarySoftSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-navy-800/80 border border-gold-600/25 hover:border-gold-500/50 hover:bg-gold-500/5 text-slate hover:text-white text-xs sm:text-sm font-semibold px-4.5 py-2.5 rounded-full transition-all duration-300 cursor-default shadow-sm select-none"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
