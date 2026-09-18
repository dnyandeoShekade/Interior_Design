import Header from "../src/components/Header";
import Hero from "../src/components/Hero";
import IntroSection from "../src/components/IntroSection";
import FeaturedProjects from "../src/components/FeaturedProjects";
import TransformationSection from "../src/components/TransformationSection";
import { DesignExpertise, Process } from "../src/components/DarkSections";
import Gallery from "../src/components/Gallery";
import Testimonials from "../src/components/Testimonials";
import FAQ from "../src/components/FAQ";
import FilmSection from "../src/components/FilmSection";
import FinalCTA from "../src/components/FinalCTA";
import ContactForm from "../src/components/ContactForm";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <IntroSection />
        <FeaturedProjects />
        <TransformationSection />
        <DesignExpertise />
        <Process />
        <Gallery />
        <Testimonials />
        <FAQ />
        <FilmSection />
        <FinalCTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
