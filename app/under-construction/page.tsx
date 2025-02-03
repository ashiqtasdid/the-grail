import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import React from "react";

const page = () => {
  return (
    <>
      <Nav />
      <div className="flex flex-col min-h-screen bg-[#252525] justify-center items-center gap-6 py-8 px-4">
        {/* Responsive Warning Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          className="w-16 h-16 sm:w-24 sm:h-24 text-red-400 drop-shadow-[0_0_15px_rgba(255,215,0,0.8)] animate-pulse"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2l10 18H2L12 2z"
          />
          <line
            x1="12"
            y1="9"
            x2="12"
            y2="13"
            strokeWidth={2.5}
            strokeLinecap="round"
          />
          <circle cx="12" cy="17" r="1" fill="currentColor" />
        </svg>

        <article className="prose space-y-5 text-white text-center max-w-md mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
            Under Construction
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl">
            This page is under construction. Please check back later.
          </p>
        </article>
      </div>
      <Footer />
    </>
  );
};

export default page;