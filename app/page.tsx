import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import QuemSouEu from "@/components/QuemSouEu";
import Habilidades from "@/components/Habilidades";
import Projetos from "@/components/Projetos";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <QuemSouEu />
        <Habilidades />
        <Projetos />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
