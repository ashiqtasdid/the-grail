'use client'
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import News from "@/components/News";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    
    if (hasVisited) {
      setIsLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem('hasVisited', 'true');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 z-50">
        <motion.img
          src="/assets/logo.png"
          alt="Logo"
          className="w-80"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, loop: Infinity, ease: "easeInOut" }}
        />
      </div>
    );
  }

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