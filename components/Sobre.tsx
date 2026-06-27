"use client";
import { motion } from "framer-motion";

const timelineSteps = [
  {
    year: "2016",
    title: "Ingresso no Exército",
    subtitle: "Soldado - Ibirapuera",
    description: "Ingresso nas Forças Armadas. Destacado por desempenho exemplar e selecionado para o Gabinete do CMSE.",
  },
  {
    year: "2017",
    title: "Destaque & Confiança",
    subtitle: "1º Colocado no CFC",
    description: "Primeiro lugar no Curso de Formação de Cabos. Designado para funções de alta confiança da chefia direta.",
  },
  {
    year: "2019",
    title: "Liderança e Promoção",
    subtitle: "Promovido a 3º Sargento",
    description: "Conclusão do CFST. Supervisão de logística, gestão de equipes e coordenação de grandes eventos institucionais.",
  },
  {
    year: "2024",
    title: "IA e Transição",
    subtitle: "Licenciamento & Início",
    description: "Licenciado com Carta de Referência. Início no Senac São Paulo para estudar IA, Machine Learning e Python.",
  },
  {
    year: "2026",
    title: "Tecnologia de Impacto",
    subtitle: "Evolução Contínua",
    description: "Especialização prática em IA Generativa, processamento de dados e desenvolvimento de sistemas inteligentes.",
  },
];

export default function Sobre() {
  return (
    <section id="sobre" className="bg-navy-800 py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold-600/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-navy-700/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-gold-500 text-xs sm:text-sm font-bold tracking-[0.25em] uppercase block mb-3"
          >
            Trajetória de Evolução
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-1 mb-6"
          >
            Da Disciplina Militar à <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-500">Inteligência Artificial</span>
          </motion.h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="gold-line w-28 mx-auto mb-8 origin-center"
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate text-base sm:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            A mesma dedicação, foco em resultados e resiliência que estruturaram 8 anos de carreira no Exército Brasileiro agora direcionam minha jornada na tecnologia. Não foi uma mudança de rumo, mas sim a aplicação de um método de trabalho rigoroso na vanguarda da Inteligência Artificial.
          </motion.p>
        </div>

        {/* Timeline Component */}
        <div className="relative mt-12 md:mt-24">
          
          {/* Desktop Line (Horizontal) */}
          <div className="hidden md:block absolute top-[39px] left-8 right-8 h-0.5 bg-gradient-to-r from-gold-600/30 via-gold-400/40 to-transparent z-0" />

          {/* Mobile Line (Vertical) */}
          <div className="md:hidden absolute left-6 top-2 bottom-2 w-0.5 bg-gradient-to-b from-gold-500/50 via-gold-500/20 to-transparent z-0" />

          {/* Grid Layout (Desktop) / Vertical List (Mobile) */}
          <div className="grid md:grid-cols-5 gap-12 md:gap-6 relative z-10">
            {timelineSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="flex flex-col md:items-center text-left md:text-center relative group"
              >
                
                {/* Milestone Node */}
                <div className="flex-shrink-0 mb-6 md:mb-8 flex items-center md:justify-center relative z-20 pl-4 md:pl-0">
                  {/* Outer breathing ring */}
                  <div className="w-11 h-11 rounded-full bg-navy-900 border-2 border-gold-500/30 flex items-center justify-center transition-all duration-300 group-hover:border-gold-400 group-hover:scale-105 shadow-xl relative">
                    <span className="text-gold-400 font-bold text-sm tracking-tighter">
                      {step.year.split(" ")[0]}
                    </span>
                    
                    {/* Ring glow on hover */}
                    <div className="absolute -inset-1 rounded-full bg-gold-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                  </div>
                </div>

                {/* Mobile Anchor Point Indicator */}
                <div className="absolute left-5 top-4 md:hidden w-3.5 h-3.5 rounded-full bg-gold-500 border-4 border-navy-800 z-10 -translate-x-1/2" />

                {/* Step Info Content */}
                <div className="pl-14 md:pl-0 flex-1">
                  <span className="text-gold-400 font-bold text-xs uppercase tracking-widest block mb-1">
                    {step.year}
                  </span>
                  
                  <h3 className="font-display font-bold text-white text-lg sm:text-xl mb-1.5 transition-colors group-hover:text-gold-400 duration-300">
                    {step.title}
                  </h3>
                  
                  <div className="text-slate text-xs font-semibold uppercase tracking-wider mb-3 block">
                    {step.subtitle}
                  </div>
                  
                  <p className="text-slate/85 text-xs sm:text-sm leading-relaxed max-w-sm md:mx-auto">
                    {step.description}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
