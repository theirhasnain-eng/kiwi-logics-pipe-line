import Hero from "../components/Hero";
import Navebar from "../components/Navebar";
import Footer from "../components/Footer";
import Stats from "../components/Stats";
import Feature from "../components/Feature";
import Testomonolies from "../components/Testomonolies";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import CTABand from "../components/CTABand";
import { useInView } from "react-intersection-observer";
import LazySection from "../components/LazySection";

export default function Home() {
  return (
    <>
      <Hero />

      <LazySection>
        <Stats />
      </LazySection>

      <LazySection>
        <Feature />
      </LazySection>

      <LazySection>
        <Testomonolies />
      </LazySection>

      <LazySection>
        <Contact />
      </LazySection>

      <LazySection>
        <FAQ />
      </LazySection>

      <LazySection>
        <CTABand />
      </LazySection>
    </>
  );
}
