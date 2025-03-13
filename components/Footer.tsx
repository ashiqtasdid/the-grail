"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const [playerCount, setPlayerCount] = useState({ current: 0, max: 0 });
  const serverIP = "eu.thegrail.vip";

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("/api/playercount")
        .then((res) => res.json())
        .then((data) => {
          setPlayerCount({ current: data.current, max: data.max });
        })
        .catch((error) => {
          console.error("Error fetching player count:", error);
        });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(serverIP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-[#252525] text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left relative">
          {/* Vertical Dividers */}
          <div className="hidden md:block absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-500/20 to-transparent"></div>
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-500/20 to-transparent"></div>
          <div className="hidden md:block absolute left-3/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-500/20 to-transparent"></div>

          <div className="space-y-6 p-4 rounded-lg  transition-colors">
            <h3 className="font-bold text-2xl tracking-wide">About Us</h3>
            <ul className="space-y-3">
              <Link href={"/under-construction"}>
                <li className="hover:text-gray-300 transition-colors duration-200 cursor-pointer text-gray-200">
                  Our Story
                </li>
              </Link>
              <Link href={"/staff"}>
                <li className="hover:text-gray-300 transition-colors duration-200 cursor-pointer text-gray-200">
                  Staff
                </li>
              </Link>
              <Link href={"/under-construction"}>
                <li className="hover:text-gray-300 transition-colors duration-200 cursor-pointer text-gray-200">
                  Contact
                </li>
              </Link>
              <Link href={"https://store.thegrail.vip"}>
                <li className="hover:text-gray-300 transition-colors duration-200 cursor-pointer text-gray-200">
                  Store
                </li>
              </Link>
            </ul>
          </div>

          <div className="space-y-6 p-4 rounded-lg  transition-colors">
            <h3 className="font-bold text-2xl tracking-wide">Socials</h3>
            <ul className="space-y-3">
              <Link href={"https://discord.gg/EC3KUy6x9u"}>
                <li className="hover:text-gray-300 transition-colors duration-200 cursor-pointer text-gray-200">
                  Discord
                </li>
              </Link>
              <Link href={"/under-construction"}>
                <li className="hover:text-gray-300 transition-colors duration-200 cursor-pointer text-gray-200">
                  Tiktok
                </li>
              </Link>
              <Link href={"/under-construction"}>
                <li className="hover:text-gray-300 transition-colors duration-200 cursor-pointer text-gray-200">
                  Instagram
                </li>
              </Link>
              <Link href={"/under-construction"}>
                <li className="hover:text-gray-300 transition-colors duration-200 cursor-pointer text-gray-200">
                  YouTube
                </li>
              </Link>
            </ul>
          </div>

          <div className="space-y-6 p-4 rounded-lg  transition-colors">
            <h3 className="font-bold text-2xl tracking-wide">Server</h3>
            <ul className="space-y-3">
              <Link href={"/under-construction"}>
                <li className="hover:text-gray-300 transition-colors duration-200 cursor-pointer text-gray-200">
                  Status
                </li>
              </Link>
              <Link href={"/rules"}>
                <li className="hover:text-gray-300 transition-colors duration-200 cursor-pointer text-gray-200">
                  Rules
                </li>
              </Link>
              <Link href={"/#FAQ"}>
                <li className="hover:text-gray-300 transition-colors duration-200 cursor-pointer text-gray-200">
                  FAQ
                </li>
              </Link>
              <Link href={"https://discord.com/invite/EC3KUy6x9u"}>
                <li className="hover:text-gray-300 transition-colors duration-200 cursor-pointer text-gray-200">
                  Support
                </li>
              </Link>
            </ul>
          </div>

          <div className="space-y-6 p-4 rounded-lg  transition-colors">
            <h3 className="font-bold text-2xl tracking-wide">How to play?</h3>
            <Dialog>
              <DialogTrigger className="px-6 py-2 rounded-md bg-gradient-to-br from-red-600 to-red-700 hover:scale-105 transition-transform shadow-lg shadow-red-500/50">
                Join Now
              </DialogTrigger>
              <DialogContent className="bg-gradient-to-b from-[#252525] to-[#1a1a1a] text-white border-red-500/20 shadow-xl">
                <DialogHeader className="border-b border-red-500/20 pb-4">
                  <DialogTitle className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    Join The Grail
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-8 pt-6">
                  {/* Server Status */}
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-500/10 to-transparent rounded-lg border border-green-500/20">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-green-400 font-medium">
                        Server Online
                      </span>
                    </div>
                    <span className="text-gray-400">
                      {" "}
                      {playerCount.current}/{playerCount.max} Players
                    </span>
                  </div>

                  {/* Server IP Section */}
                  <div className="space-y-3">
                    <p className="text-gray-400 font-medium">
                      Connect using the server IP below:
                    </p>
                    <div className="flex items-center space-x-2 bg-[#111] rounded-lg p-3 border border-red-500/20 hover:border-red-500/40 transition-colors">
                      <input
                        type="text"
                        value={serverIP}
                        readOnly
                        className="bg-transparent flex-1 outline-none text-gray-200 px-2 font-mono text-lg select-all"
                      />
                      <button
                        onClick={handleCopy}
                        className="px-6 py-2.5 bg-gradient-to-br from-red-600 to-red-700 rounded-md hover:scale-105 active:scale-95 transition-all duration-200 font-medium relative overflow-hidden group"
                      >
                        <span
                          className={`absolute inset-0 bg-white/20 transition-transform duration-200 ${
                            copied ? "translate-y-0" : "translate-y-full"
                          }`}
                        />
                        {copied ? "Copied!" : "Copy IP"}
                      </button>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <p className="text-gray-400">Version</p>
                      <p className="text-white font-medium">1.20.4</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-400">Region</p>
                      <p className="text-white font-medium">Europe</p>
                    </div>
                  </div>
                  {/* Quick Links */}
                  <div className="flex items-center justify-center space-x-4 pt-4 border-t border-red-500/20">
                    <Link href={"https://discord.gg/EC3KUy6x9u"}>
                      <button className="text-gray-400 hover:text-white transition-colors">
                        Discord Support
                      </button>
                    </Link>
                    <span className="text-gray-600">•</span>
                    <Link href={"/rules"}>
                      <button className="text-gray-400 hover:text-white transition-colors">
                        Server Rules
                      </button>
                    </Link>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-gradient-to-r from-transparent via-red-500/20 to-transparent">
          <p className="text-sm text-gray-400">
            © 2025 The Grail. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
