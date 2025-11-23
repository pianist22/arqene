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
  { name: "Catelog", href: "/products" },
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
      <div className="mx-auto flex max-w-7xl flex-col px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
        {/* Top row */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          {/* Left: logo + copy + socials */}
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
            <p className="mt-4 max-w-sm text-[1rem] leading-relaxed text-slate-700">
              Crafted interiors and spaces that feel timeless, tailored, and
              quietly extravagant.
            </p>

            {/* Social icons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
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

          {/* Right: Navigation + Contact */}
          <div className="flex w-full flex-col gap-10 sm:flex-row sm:justify-end sm:gap-16 lg:w-[52%]">
            {/* Navigation column */}
            <div className="min-w-44">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 sm:text-[0.95rem]">
                Navigation
              </p>
              <ul className="mt-5 space-y-2.5">
                {navItems.map((item) => (
                  <li
                    key={item.name}
                    className="footer-item footer-link-row group cursor-pointer"
                  >
                    <Link href={item.href}>
                      <TextRoll className="text-[1.02rem] md:text-[1.06rem]">
                        {item.name}
                      </TextRoll>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          
            {/* Contact column */}
            <div className="min-w-52">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 sm:text-[0.95rem]">
                Contact
              </p>

              <div className="mt-5 space-y-3 text-[1rem] leading-relaxed text-slate-700">
                {/* Address – no TextRoll here */}
                <div className="max-w-xs">
                  <p className="text-[1.02rem] md:text-[1.06rem] tracking-wider">
                    5180 Demo Street, Suite 203 Arqené City, 400 001
                  </p>
                </div>

                <div className="mt-3 space-y-2">
                  {/* Phone – keep TextRoll */}
                  <div className="footer-item footer-link-row">
                    <a href="tel:+919876543210">
                      <TextRoll className="text-[1.02rem] md:text-[1.06rem]">
                        +91 98765 43210
                      </TextRoll>
                    </a>
                  </div>

                  {/* Email – clean string, still animated */}
                  <div className="footer-item footer-link-row">
                    <a href="mailto:hello@arqene.studio">
                      <TextRoll className="text-[1.02rem] md:text-[1.06rem]">
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
          <p className="text-sm tracking-wide sm:text-[0.95rem]">
            © {year} Arqené Studio. All rights reserved.
          </p>
          <p className="mt-2 text-sm tracking-wide sm:text-[0.95rem] md:mt-0">
            Website by{" "}
            <span className="font-semibold text-slate-700">Arqené</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default ArqeneFooter;
