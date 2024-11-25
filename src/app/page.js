import { Banner } from "./components/Banner";
import { Hero } from "./components/Hero";
import { LogoTicker } from "./components/LogoTicker";
import { Navbar } from "./components/Navbar";
import { Features } from "./components/Features";
import { ProductShowCase } from "./components/ProductShowCase";
import { Faqs } from "./components/Faqs";
import { CallToAction } from "./components/CTA";
import { Footer } from "./components/Footer";
export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowCase/>
      <Faqs/>
      <CallToAction/>
      <Footer/>
    </>
  );
}
