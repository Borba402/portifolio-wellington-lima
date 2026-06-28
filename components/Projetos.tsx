"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GITHUB_USERNAME = "Borba402";
const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`;

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
  "Jupyter Notebook": "#DA5B0B",
  Shell: "#89E051",
  Rust: "#DEA584",
  Go: "#00ADD8",
};

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return "hoje";
  if (days === 1) return "ontem";
  if (days < 30) return `${days}d atrás`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}m atrás`;
  return `${Math.floor(months / 12)}a atrás`;
}

export default function Projetos() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=18`)
      .then((res) => {
        if (!res.ok) throw new Error("not found");
        return res.json();
      })
      .then((data: Repo[]) => {
        setRepos(data.filter((r) => !r.fork).slice(0, 6));
        setLoading(false);
      })
      .catch(() => { setError(true); setLoading(false); });
  }, []);

  return (
    <section id="projetos" className="bg-navy-900 py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(240,120,32,0.04) 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(240,120,32,0.03) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <div className="mb-20">
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
            transition={{ duration: 0.5 }}
            style={{ color: "#F07820", fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", display: "block", marginBottom: "14px" }}
          >
            Portfólio no GitHub
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(2.2rem, 5vw, 3.6rem)", lineHeight: "0.92", letterSpacing: "-0.03em", color: "#ffffff", marginBottom: "16px" }}
          >
            Projetos{" "}
            <span style={{ color: "#F07820" }}>Desenvolvidos</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ color: "#6B7280", fontFamily: "var(--font-inter)", fontWeight: 300, fontSize: "clamp(0.85rem, 1.3vw, 0.95rem)", maxWidth: "52ch", lineHeight: 1.7 }}
          >
            Repositórios públicos extraídos dinamicamente do GitHub — algoritmos de IA, processamento de dados e scripts Python.
          </motion.p>
        </div>

        {/* ── Loading ── */}
        {loading && (
          <div className="flex justify-center items-center py-32">
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
                  style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#F07820" }}
                />
              ))}
            </div>
          </div>
        )}

        {/* ── Error ── */}
        {error && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto text-center py-16"
          >
            <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: "rgba(240,120,32,0.10)", border: "1px solid rgba(240,120,32,0.25)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
              <svg width="24" height="24" fill="none" stroke="#F07820" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
            </div>
            <h3 style={{ color: "#ffffff", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "8px" }}>Erro ao conectar com o GitHub</h3>
            <p style={{ color: "#6B7280", fontFamily: "var(--font-inter)", fontSize: "13px", marginBottom: "20px" }}>
              Não foi possível carregar os repositórios de <code style={{ color: "#F07820" }}>@{GITHUB_USERNAME}</code>.
            </p>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#F07820", color: "#fff", fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: "13px", padding: "10px 20px", borderRadius: "10px", textDecoration: "none" }}>
              Acessar GitHub Direto →
            </a>
          </motion.div>
        )}

        {/* ── Grid de Cards ── */}
        {!loading && !error && repos.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, i) => {
              const langColor = LANG_COLORS[repo.language ?? ""] ?? "#6B7280";
              return (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.09 }}
                  whileHover={{ y: -6 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    background: "#111111",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "16px",
                    overflow: "hidden",
                    textDecoration: "none",
                    transition: "border-color 0.25s, box-shadow 0.25s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(240,120,32,0.35)";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.40), 0 0 0 1px rgba(240,120,32,0.10)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                  }}
                >
                  {/* Language color bar */}
                  <div style={{ height: "3px", background: `linear-gradient(90deg, ${langColor}, ${langColor}88)` }} />

                  <div style={{ padding: "22px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
                    {/* Top row: number + link icon */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                      <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "2.2rem", color: "rgba(240,120,32,0.20)", lineHeight: 1, letterSpacing: "-0.04em", userSelect: "none" }}>
                        {(i + 1).toString().padStart(2, "0")}
                      </span>
                      <div style={{ width: "32px", height: "32px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#4B5563", transition: "color 0.2s, border-color 0.2s" }}>
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 style={{ fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: "15px", color: "#ffffff", marginBottom: "8px", lineHeight: 1.3, wordBreak: "break-word" }}>
                      {repo.name.replace(/-/g, " ").replace(/_/g, " ")}
                    </h3>

                    {/* Description */}
                    <p style={{ fontFamily: "var(--font-inter)", fontWeight: 300, fontSize: "12px", color: "#6B7280", lineHeight: 1.7, marginBottom: "16px", flex: 1, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                      {repo.description ?? "Repositório sem descrição. Acesse para ver o código."}
                    </p>

                    {/* Topics */}
                    {repo.topics && repo.topics.length > 0 && (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                        {repo.topics.slice(0, 3).map((topic) => (
                          <span key={topic} style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B7280", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "999px", padding: "3px 10px" }}>
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Footer */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "14px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                      {/* Language */}
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        {repo.language && (
                          <>
                            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: langColor, flexShrink: 0 }} />
                            <span style={{ fontFamily: "var(--font-inter)", fontWeight: 500, fontSize: "11px", color: "#6B7280" }}>{repo.language}</span>
                          </>
                        )}
                      </div>
                      {/* Stars + updated */}
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        {repo.stargazers_count > 0 && (
                          <span style={{ display: "flex", alignItems: "center", gap: "4px", fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: "11px", color: "#F07820" }}>
                            <svg width="11" height="11" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            {repo.stargazers_count}
                          </span>
                        )}
                        <span style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "10px", color: "#374151" }}>
                          {timeAgo(repo.pushed_at)}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        )}

        {/* ── Empty ── */}
        {!loading && !error && repos.length === 0 && (
          <p style={{ color: "#6B7280", textAlign: "center", padding: "80px 0", fontFamily: "var(--font-inter)" }}>
            Nenhum repositório público encontrado.
          </p>
        )}

        {/* ── CTA GitHub ── */}
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center mt-14"
          >
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                border: "1px solid rgba(240,120,32,0.30)", color: "#F07820",
                fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: "13px",
                padding: "12px 24px", borderRadius: "10px", textDecoration: "none",
                letterSpacing: "0.04em", transition: "border-color 0.2s, background 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#F07820";
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(240,120,32,0.07)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 20px rgba(240,120,32,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(240,120,32,0.30)";
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
              }}
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Ver todos os projetos no GitHub
            </a>
          </motion.div>
        )}

      </div>
    </section>
  );
}
