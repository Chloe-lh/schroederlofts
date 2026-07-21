"use client";

import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed z-10 w-full bg-(--color-nav) text-(--color-nav-text) shadow-lg">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="text-sm font-semibold uppercase tracking-[0.25em]">
          Lofts
        </div>

        <h1 className="text-xl md:text-4xl">
          The Lofts at Schroeder Creek
        </h1>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-3 text-lg">
          <Link href="/">Book</Link>
          <Link href="/location">Location</Link>
          <Link href="/contact">Explore</Link>
        </div>

        {/* Mobile button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="flex flex-col px-6 pb-4 md:hidden">
          <Link href="/">Book</Link>
          <Link href="/location">Location</Link>
          <Link href="/contact">Explore</Link>
        </div>
      )}
    </nav>
  );
}