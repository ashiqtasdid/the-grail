"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div
      className="relative w-full h-[50vh] min-h-[400px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/banner.jpg')",
      }}
    >
      {/* Dark overlay with gradient and blur */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#252525] backdrop-blur-sm" />

      {/* Logo container */}
      <div className="relative z-10 container mx-auto h-full flex justify-center items-center">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <Link href="/" className="transition-transform hover:scale-105">
            <Image
              src="/assets/logo.png"
              alt="The Grail Logo"
              width={350}
              height={90}
              priority
              className="h-auto w-auto"
            />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
