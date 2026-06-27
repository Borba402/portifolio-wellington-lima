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
  title: "Wellington Lima | Inteligência Artificial & Python",
  description:
    "Técnico em Inteligência Artificial em transição da carreira militar. Especializado em Python, IA Generativa e Machine Learning. São Paulo, SP.",
  keywords: ["Inteligência Artificial", "Python", "Machine Learning", "IA Generativa", "Wellington Lima", "São Paulo"],
  authors: [{ name: "Wellington Borba Lima" }],
  openGraph: {
    title: "Wellington Lima | IA & Python Developer",
    description: "Discipline · Artificial Intelligence · Python · Innovation & Technology",
    type: "website",
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
