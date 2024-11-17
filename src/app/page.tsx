import Image from "next/image";
import Navbar from "./components/navbar";
import HeroSection from "./components/herosection";
import CategoriesSection from "./components/category";
import BestSellerSection from "./components/bestseller";
import Footer from "./components/footer";
import Testimonials from "./components/testimonials";
import Features from "./components/features";
import Deals from "./components/deals";


export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <BestSellerSection />
      <Testimonials />
      <Features />
      <Deals />
      <Footer />
    </div>
  );
}
