// components/footer/ArqeneFooter.jsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Catelog", href: "/catalog" },
  { name: "Contact Us", href: "/contact" },
];

const STAGGER = 0.035;

function TextRoll({ children, className = "" }) {
  const text = String(children || "");

  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className={`footer-link-roll relative block overflow-hidden ${className}`}
      style={{ lineHeight: 0.9 }}
    >
      <div>
        {text.split("").map((letter, index) => {
          const delay = STAGGER * Math.abs(index - (text.length - 1) / 2);
          return (
            <motion.span
              key={`top-${index}`}
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              transition={{ ease: "easeInOut", delay }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          );
        })}
      </div>
      <div className="absolute inset-0">
        {text.split("").map((letter, index) => {
          const delay = STAGGER * Math.abs(index - (text.length - 1) / 2);
          return (
            <motion.span
              key={`bottom-${index}`}
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              transition={{ ease: "easeInOut", delay }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          );
        })}
      </div>
    </motion.span>
  );
}

function ArqeneFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-bg mt-20 border-t border-border/60">
      <div className="mx-auto flex max-w-7xl flex-col py-12 lg:py-16">
        {/* Top row */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          {/* Left: logo + copy + socials – pinned left */}
          <div className="w-full lg:max-w-md">
            <div className="relative h-10 w-auto md:h-12">
              <Image
                src="/Arqene-Final-Logo_Black.png"
                alt="Arqené"
                width={240}
                height={60}
                className="h-full w-auto object-contain"
              />
            </div>
            <p className="mt-4 max-w-sm text-[0.95rem] leading-relaxed text-slate-700">
              Crafted interiors and spaces that feel timeless, tailored, and
              quietly extravagant.
            </p>

            {/* Social icons aligned bottom-left */}
            <div className="mt-8 flex items-center gap-3">
              <Link href="#" aria-label="Arqené on Instagram">
                <span className="footer-social-icon">
                  <FaInstagram />
                </span>
              </Link>
              <Link href="#" aria-label="Arqené on Facebook">
                <span className="footer-social-icon">
                  <FaFacebookF />
                </span>
              </Link>
              <Link href="#" aria-label="Arqené on LinkedIn">
                <span className="footer-social-icon">
                  <FaLinkedinIn />
                </span>
              </Link>
              <Link href="#" aria-label="Arqené on X">
                <span className="footer-social-icon">
                  <FaXTwitter />
                </span>
              </Link>
            </div>
          </div>

          {/* Right: Navigation + Contact – pinned right */}
          <div className="flex w-full flex-col gap-10 sm:flex-row sm:justify-end sm:gap-16 lg:w-[52%]">
            {/* Navigation column */}
            <div className="min-w-44">
              <p className="text-[0.95rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Navigation
              </p>
              <ul className="mt-5 space-y-2.5">
                {navItems.map((item) => (
                  <li
                    key={item.name}
                    className="footer-item footer-link-row group cursor-pointer"
                  >
                    <Link href={item.href}>
                      <TextRoll className="text-[1rem] md:text-base">
                        {item.name}
                      </TextRoll>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact column */}
            <div className="min-w-52">
              <p className="text-[0.95rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Contact
              </p>

              <div className="mt-5 space-y-3 text-[0.98rem] leading-relaxed text-slate-700">
                    <div className="footer-item footer-link-row">
                    <TextRoll className="text-[1rem] md:text-base tracking-wider">
                        5180 Demo Street, Suite 203 Arqené City, 400 001
                    </TextRoll>
                    </div>
                <div className="mt-3 space-y-2">
                  {/* Phone – clickable with hover roll */}
                  <div className="footer-item footer-link-row">
                    <a href="tel:+919876543210">
                      <TextRoll className="text-[0.98rem] md:text-base">
                        +91 98765 43210
                      </TextRoll>
                    </a>
                  </div>

                  {/* Email – clickable with hover roll */}
                  <div className="footer-item footer-link-row">
                    <a href="mailto:hello@arqene.studio">
                      <TextRoll className="text-[0.98rem] md:text-base">
                        hello@arqene.studio
                      </TextRoll>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider + bottom row */}
        <div className="mt-10 border-t border-slate-400 pt-4 text-xs text-slate-500 md:flex md:items-center md:justify-between">
          <p className="text-[1rem] tracking-wide">
            © {year} Arqené Studio. All rights reserved.
          </p>
          <p className="mt-2 text-[1rem] tracking-wide md:mt-0">
            Website by <span className="font-semibold text-slate-700">Arqené</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default ArqeneFooter;
