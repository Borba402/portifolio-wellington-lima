import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wellingtonborbalima.com.br"),
  title: "Wellington Borba Lima | Inteligência Artificial & Python",
  description:
    "Técnico em Inteligência Artificial em transição da carreira militar. Especializado em Python, IA Generativa e Machine Learning. São Paulo, SP.",
  keywords: ["Inteligência Artificial", "Python", "Machine Learning", "IA Generativa", "Wellington Borba Lima", "Wellington Lima", "São Paulo"],
  authors: [{ name: "Wellington Borba Lima" }],
  openGraph: {
    title: "Wellington Borba Lima | IA & Python",
    description: "Técnico em IA em transição da carreira militar. Python · IA Generativa · Machine Learning · São Paulo, SP.",
    url: "https://wellingtonborbalima.com.br",
    siteName: "Wellington Borba Lima",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/banner.png",
        width: 2172,
        height: 724,
        alt: "Wellington Lima — Discipline | Artificial Intelligence | Python | Innovation & Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wellington Borba Lima | IA & Python",
    description: "Técnico em IA em transição da carreira militar. Python · IA Generativa · Machine Learning.",
    images: ["/banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="bg-navy-900 text-white antialiased">{children}</body>
    </html>
  );
}
