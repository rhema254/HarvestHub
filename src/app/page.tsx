import Image from "next/image";
import Navbar from "./components/navbar";
import HeroSection from "./components/herosection";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <HeroSection />
    </div>
  );
}
