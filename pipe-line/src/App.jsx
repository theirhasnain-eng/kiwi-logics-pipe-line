import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import Integrations from "./pages/Integrations";
import Blog from "./pages/Blog";
import Article from "./pages/Article";
import Navebar from "./components/Navebar";
import Footer from "./components/Footer";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Style from "./pages/Style";

import ScrollToTop from "./components/ScrollToTop";
import MobileCTA from "./components/MobileCTA";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:slug" element={<Article />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/style" element={<Style />} />
      </Routes>

      <Footer />
      <MobileCTA />
    </>
  );
}
