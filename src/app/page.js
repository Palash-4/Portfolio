import About from "@/component/about";
import Hero from "@/component/hero";
import Portfolio from "@/component/portfolio";

export default function Home() {
  return (
    <main className="overflow-hidden">

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <Portfolio />

    </main>
  );
}