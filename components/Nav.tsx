"use client";
import React from "react";
import CountdownTimer from "./CountdownTimer";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { AlignLeftIcon } from "lucide-react";

const Nav = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Leaderboards", href: "/under-construction" },
    { name: "Rules", href: "/under-construction" },
    { name: "Staff", href: "/staff" },
    { name: "Bans", href: "/under-construction" },
    { name: "Blog", href: "/blog" },
    { name: "Store", href: "https://store.thegrail.vip" },
  ];
  return (
    <nav className="flex flex-col items-center text-white bg-gradient-to-b from-[#AA1111] to-[#8a0e0e]">
      {/* Top countdown bar */}
      <div className="w-full bg-black backdrop-blur-sm py-2.5">
        <div className="max-w-6xl bg-black mx-auto px-4 flex justify-center items-center space-x-4">
          <span className="font-medium text-sm tracking-wide">
            New Season Starting In:
          </span>
          <CountdownTimer />
        </div>
      </div>

      <div className="md:hidden">
        <Sheet>
          <div className="shadow-md rounded flex items-center justify-start ml-0">
            <SheetTrigger asChild className="py-2 px-3">
              <Button variant="ghost" size="icon" aria-label="Open Navigation">
                <AlignLeftIcon className="h-10 w-10 text-white" />
              </Button>
            </SheetTrigger>
          </div>
          <SheetContent
            side="left"
            className="flex flex-col h-screen w-72 bg-red-600 p-6 overflow-y-auto shadow-lg"
          >
            {navItems.map(({ name, href }) => (
              <SheetClose key={name}>
                <Link
                  href={href}
                  className="block py-4 text-white text-xl hover:text-gray-300 transition duration-300"
                >
                  {name}
                </Link>
              </SheetClose>
            ))}
          </SheetContent>
        </Sheet>
      </div>

      {/* Navigation items */}
      <div className="max-w-6xl hidden md:block font-bold w-full mx-auto px-4 py-4">
        <ul className="flex font-bold justify-center space-x-12 ">
          <Link href="/">
            <li className="relative group">
              <a className="py-2 px-1 inline-block transition-colors hover:text-white text-gray-100">
                Home
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </a>
            </li>
          </Link>
          <Link href={"/under-construction"}>
            <li className="relative group">
              <a className="py-2 px-1 inline-block transition-colors hover:text-white text-gray-100">
                Leaderboards
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </a>
            </li>
          </Link>
          <Link href={"/under-construction"}>
            <li className="relative group">
              <a className="py-2 px-1 inline-block transition-colors hover:text-white text-gray-100">
                Rules
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </a>
            </li>
          </Link>
          <Link href={"/under-construction"}>
            <li className="relative group">
              <Link
                href={"/staff"}
                className="py-2 px-1 inline-block transition-colors hover:text-white text-gray-100"
              >
                Staff
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
            </li>
          </Link>
          <Link href={"/under-construction"}>
            <li className="relative group">
              <a className="py-2 px-1 inline-block transition-colors hover:text-white text-gray-100">
                Bans
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </a>
            </li>
          </Link>
          <Link href={"/blog"}>
            <li className="relative group">
              <a className="py-2 px-1 inline-block transition-colors hover:text-white text-gray-100">
                Blog
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </a>
            </li>
          </Link>
          <Link href={"https://store.thegrail.vip"}>
            <li className="relative group">
              <a className="py-2 px-1 inline-block transition-colors hover:text-white text-gray-100">
                Store
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </a>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
