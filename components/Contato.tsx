"use client";
import { motion } from "framer-motion";

const LINKEDIN_URL = "https://www.linkedin.com/in/wellington-borba-lima-52455622b";
const GITHUB_URL = "https://github.com/wellingtonborbalima";
const EMAIL = "wellingtonborbalima@gmail.com";

const contacts = [
  {
    label: "LinkedIn",
    value: "wellington-borba-lima",
    href: LINKEDIN_URL,
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "text-[#0077B5]",
    border: "border-blue-500/20 hover:border-blue-500/40",
    bg: "hover:bg-blue-500/5",
  },
  {
    label: "GitHub",
    value: "@wellingtonborbalima",
    href: GITHUB_URL,
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    color: "text-white",
    border: "border-gold-600/15 hover:border-gold-500/40",
    bg: "hover:bg-white/5",
  },
  {
    label: "E-mail",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "text-gold-400",
    border: "border-gold-600/15 hover:border-gold-500/40",
    bg: "hover:bg-gold-500/5",
  },
];

export default function Contato() {
  return (
    <section id="contato" className="bg-navy-900 py-24 lg:py-32 circuit-bg relative overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header */}
        <div className="mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-gold-500 text-xs sm:text-sm font-bold tracking-[0.25em] uppercase block mb-3"
          >
            Vamos nos Conectar
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="font-display text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mt-1 mb-8"
          >
            Vamos Construir Algo <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400">
              Extraordinário
            </span>
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
            className="text-slate text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
          >
            Estou em busca de novos desafios em São Paulo ou em formato remoto nas áreas de Inteligência Artificial, Engenharia de Prompt e Análise de Dados.
          </motion.p>
        </div>

        {/* Highlighted Core CTA (LinkedIn) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-16"
        >
          <motion.a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3.5 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-400 text-white font-extrabold px-10 py-5 rounded-2xl transition-all duration-300 shadow-[0_10px_35px_rgba(240,120,32,0.25)] hover:shadow-[0_12px_40px_rgba(240,120,32,0.40)] text-base sm:text-lg"
          >
            <svg className="w-5.5 h-5.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Conectar no LinkedIn
          </motion.a>
        </motion.div>

        {/* Contact Cards Grid (Alternative social networks) */}
        <div className="grid sm:grid-cols-3 gap-6">
          {contacts.map((c, idx) => (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx, duration: 0.4 }}
              className={`bg-navy-800/80 border ${c.border} ${c.bg} rounded-2xl p-6.5 flex flex-col items-center gap-4 transition-all duration-300 group shadow-lg backdrop-blur-sm`}
            >
              <div className={`${c.color} p-3 rounded-xl bg-navy-900/60 border border-gold-600/5 group-hover:scale-110 transition-transform duration-300`}>
                {c.icon}
              </div>
              
              <div>
                <h4 className="text-white font-bold text-sm tracking-wide">{c.label}</h4>
                <p className="text-slate text-xs mt-1.5 break-all font-medium">{c.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Availability Badge / Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-14 text-slate/50 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          Disponível para trabalho híbrido em SP ou 100% Home Office
        </motion.p>

      </div>
    </section>
  );
}
