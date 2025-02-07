
import React from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import News from "@/components/News";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {

  return (
    <main>
      <Nav />
      <Hero />
      <News />
      <div className="bg-[#252525] text-white">
        <FAQ />
      </div>
      <Footer />
    </main>
  );
}
