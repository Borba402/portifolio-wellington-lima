"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GITHUB_USERNAME = "wellingtonborbalima";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  pushed_at: string;
  fork: boolean;
}

const LANG_COLORS: Record<string, string> = {
  Python: "#3776AB",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  HTML: "#E34C26",
  CSS: "#563D7C",
  Jupyter: "#DA5B0B",
  Notebook: "#DA5B0B",
  Shell: "#89E051",
};

function LanguageDot({ lang }: { lang: string | null }) {
  if (!lang) return null;
  const color = LANG_COLORS[lang] ?? "#A8B8D0";
  return (
    <div className="flex items-center gap-1.5">
      <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
      <span className="text-slate text-xs font-semibold">{lang}</span>
    </div>
  );
}

export default function Projetos() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=12`
    )
      .then((res) => {
        if (!res.ok) throw new Error("not found");
        return res.json();
      })
      .then((data: Repo[]) => {
        const filtered = data
          .filter((r) => !r.fork)
          .slice(0, 6);
        setRepos(filtered);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projetos" className="bg-navy-800 py-24 lg:py-32 relative overflow-hidden">
      {/* Background vectors */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gold-600/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-navy-700/50 rounded-full blur-3xl pointer-events-none" />

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
            Portfólio em Construção
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-1 mb-6"
          >
            Projetos <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-500">Desenvolvidos</span>
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
            className="text-slate text-base sm:text-lg max-w-xl mx-auto"
          >
            Abaixo estão expostos os repositórios públicos extraídos dinamicamente do GitHub contendo algoritmos de IA, processamento de dados e scripts Python.
          </motion.p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-24">
            <div className="flex gap-2.5">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
                  className="w-3.5 h-3.5 bg-gold-400 rounded-full shadow-lg shadow-gold-500/20"
                />
              ))}
            </div>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-16 bg-navy-900/50 border border-gold-600/10 rounded-2xl p-8 max-w-lg mx-auto">
            <div className="text-5xl mb-4">🔧</div>
            <h3 className="text-white text-lg font-bold mb-2">Erro ao conectar com o GitHub</h3>
            <p className="text-slate text-sm mb-6">
              Não conseguimos encontrar repositórios para o usuário <code className="text-gold-400">@{GITHUB_USERNAME}</code>.
            </p>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-900 font-bold px-6 py-3 rounded-xl text-sm transition-all hover:shadow-lg hover:shadow-gold-500/20"
            >
              Acessar GitHub Direto
            </a>
          </div>
        )}

        {/* Grid Display (Editorial style: Index node + name + desc + tags + details + arrow) */}
        {!loading && !error && repos.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo, i) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative flex flex-col justify-between bg-navy-700/40 border border-gold-600/15 hover:border-gold-500/55 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_36px_rgba(240,192,64,0.06)] backdrop-blur-sm z-10"
              >
                
                {/* Visual Number Indicator & Link Icon on Top Row */}
                <div className="flex justify-between items-start mb-6">
                  <span className="font-display font-black text-3xl sm:text-4xl text-gold-600/35 transition-colors duration-300 group-hover:text-gold-500/70 select-none">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  
                  <div className="w-9 h-9 rounded-full bg-navy-800/80 border border-gold-600/10 flex items-center justify-center text-slate group-hover:text-gold-400 group-hover:border-gold-400 transition-all duration-300 group-hover:scale-105">
                    <svg className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="mb-6">
                    <h3 className="font-display font-black text-white text-lg sm:text-xl leading-tight group-hover:text-gold-400 transition-colors duration-300 mb-3 break-all">
                      {repo.name}
                    </h3>
                    <p className="text-slate text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                      {repo.description ?? "Sem descrição fornecida no repositório público."}
                    </p>
                  </div>

                  {/* Topics Tags */}
                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {repo.topics.slice(0, 3).map((topic) => (
                        <span
                          key={topic}
                          className="text-[9px] font-bold uppercase tracking-wider bg-navy-800 border border-gold-600/15 text-slate px-2.5 py-1 rounded-full group-hover:border-gold-500/35 transition-colors duration-300"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Footer (Language + Stars) */}
                <div className="flex items-center justify-between pt-4 border-t border-gold-600/10">
                  <LanguageDot lang={repo.language} />
                  
                  <div className="flex items-center gap-3.5 text-slate/75 text-xs font-semibold">
                    {repo.stargazers_count > 0 && (
                      <span className="flex items-center gap-1.5 text-gold-400">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {repo.stargazers_count}
                      </span>
                    )}
                    {repo.forks_count > 0 && (
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                        {repo.forks_count}
                      </span>
                    )}
                  </div>
                </div>

              </motion.a>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && repos.length === 0 && (
          <div className="text-center py-20 text-slate">
            Nenhum repositório público encontrado.
          </div>
        )}

        {/* Global CTA - Link to GitHub profile */}
        {!loading && !error && (
          <div className="text-center mt-16">
            <motion.a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3.5 border border-gold-600/35 hover:border-gold-400 text-gold-400 hover:bg-gold-500/10 px-8 py-4 rounded-xl text-sm sm:text-base font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(240,192,64,0.15)]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Ver Todos os Projetos no GitHub
            </motion.a>
          </div>
        )}
      </div>
    </section>
  );
}
