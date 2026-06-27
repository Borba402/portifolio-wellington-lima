'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-navy-900 text-white flex flex-col items-center justify-center min-h-screen p-4">
        <div className="text-center max-w-md bg-navy-800 border border-gold-600/20 p-8 rounded-2xl shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-display font-black text-gold-400 mb-4">
            Algo deu errado!
          </h2>
          <p className="text-slate text-sm mb-6 leading-relaxed">
            Ocorreu um erro crítico do sistema. Por favor, tente reiniciar a aplicação.
          </p>
          <button
            onClick={() => reset()}
            className="bg-gradient-to-r from-gold-500 to-gold-400 text-navy-900 font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20 active:scale-95"
          >
            Tentar Novamente
          </button>
        </div>
      </body>
    </html>
  );
}
