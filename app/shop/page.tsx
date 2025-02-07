"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("https://store.thegrail.vip");
  }, [router]);

  return (
    <div className="bg-[#252525]">
      <Nav />
      <div className="flex text-white items-center justify-center h-screen">
        <p className="text-lg font-medium">Redirecting...</p>
      </div>
      <Footer />
    </div>
  );
};

export default Page;