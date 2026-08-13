import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Collection } from "@/components/collection";
import { About } from "@/components/about";
import { Journal } from "@/components/journal";
import { Newsletter } from "@/components/newsletter";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Collection />
        <About />
        <Journal />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
