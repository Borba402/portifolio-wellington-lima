"use client";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 border-t border-gold-600/10 py-10 md:py-14 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          
          {/* Logo Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-white text-base tracking-wide">
                Wellington Lima
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
              <span className="text-slate text-xs font-semibold uppercase tracking-wider">
                Especialista em IA &amp; Dados
              </span>
            </div>
            <p className="text-slate/60 text-xs mt-2 font-medium">
              Discipline · Artificial Intelligence · Python · Innovation &amp; Technology
            </p>
          </div>

          {/* Social and Navigation Quicklinks */}
          <div className="flex items-center gap-6">
            <Link
              href="#inicio"
              className="text-slate/70 hover:text-gold-400 text-xs font-semibold uppercase tracking-wider transition-colors duration-300"
            >
              Início
            </Link>
            <Link
              href="#sobre"
              className="text-slate/70 hover:text-gold-400 text-xs font-semibold uppercase tracking-wider transition-colors duration-300"
            >
              Sobre
            </Link>
            <Link
              href="#habilidades"
              className="text-slate/70 hover:text-gold-400 text-xs font-semibold uppercase tracking-wider transition-colors duration-300"
            >
              Habilidades
            </Link>
            <Link
              href="#projetos"
              className="text-slate/70 hover:text-gold-400 text-xs font-semibold uppercase tracking-wider transition-colors duration-300"
            >
              Projetos
            </Link>
            <Link
              href="#contato"
              className="text-slate/70 hover:text-gold-400 text-xs font-semibold uppercase tracking-wider transition-colors duration-300"
            >
              Contato
            </Link>
          </div>

        </div>

        {/* Divider line */}
        <div className="w-full h-px bg-gold-600/5 my-8" />

        {/* Copyleft and info credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-slate/40 text-xs font-semibold tracking-wide">
            © {currentYear} Wellington Borba Lima. Todos os direitos reservados.
          </p>
          <p className="text-slate/30 text-[10px] sm:text-xs">
            Desenvolvido em São Paulo, SP · Brasil
          </p>
        </div>

      </div>
    </footer>
  );
}
