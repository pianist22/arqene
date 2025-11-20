// components/navbar/ArqeneNavbar.jsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import HamburgerToggle from "./HamburgerToggle";
import FullscreenMenu from "./FullscreenMenu";
import Button from "./AnimatedButton";

function ArqeneNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  // Choose logo based on navbar state
  const logoSrc = isOpen
    ? "/Arqene-Final-Logo_Black.png" // menu open -> dark logo
    : "/Arqene-Final-Logo_Black.png"; // initial -> light logo

  return (
    <>
      {/* Sticky top navbar */}
      <motion.header
        className="navbar-bg fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 py-3 md:px-8 md:py-4"
        style={{
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
        }}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Left: Logo (changes with state) */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-7 w-auto md:h-9">
            <Image
              src={logoSrc}
              alt="Arqené"
              width={180}
              height={40}
              className="  h-10        
  md:h-12      
  w-auto 
  object-contain"
              priority
            />
          </div>
        </Link>

        {/* Right: Join Community + Hamburger */}
        <div className="flex items-center gap-3 md:gap-5">
          {/* Join button visible only when menu closed */}
          {!isOpen && (
            <div className="hidden sm:block">
              <Button label="Join Community" variant="dark"/>
            </div>
          )}

          <button
            type="button"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            className="relative flex items-center justify-center rounded-full border border-transparent bg-transparent p-1.5 transition-colors hover:border-zinc-700"
            onClick={handleToggle}
          >
            <HamburgerToggle isOpen={isOpen} onToggle={handleToggle} />
          </button>
        </div>
      </motion.header>

      {/* Fullscreen animated menu overlay */}
      <FullscreenMenu isOpen={isOpen} onClose={handleCloseMenu} />
    </>
  );
}

export default ArqeneNavbar;
