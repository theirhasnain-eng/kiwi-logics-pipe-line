import Hero from '../components/Hero';
import Navebar from '../components/Navebar';
import Footer from  '../components/Footer';
import Stats from '../components/Stats';
import Feature from '../components/Feature';
import Testomonolies from '../components/Testomonolies';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import CTABand from '../components/CTABand';

export default function Home() {
  
  return(
    <>
    <Navebar/>
    <Hero/>
    <Stats/>
    <Feature/>
    <Testomonolies/>
    <Contact/>
    <FAQ/>
    <CTABand/>
    <Footer/>
  
    </>
  ) ;
}
