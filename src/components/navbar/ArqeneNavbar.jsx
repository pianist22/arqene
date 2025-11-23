

// // components/navbar/ArqeneNavbar.jsx
// "use client";

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import HamburgerToggle from "./HamburgerToggle";
// import FullscreenMenu from "./FullScreenMenu";
// import Button from "./AnimatedButton";

// /**
//  * Behaviour:
//  *  - At top (scrollY <= threshold):
//  *      • Full-width light navbar
//  *      • Logo + Join Community + Hamburger
//  *  - After scrolling past threshold:
//  *      • Compact pill centered at top
//  *      • Only logo + hamburger
//  *      • Remains compact until user scrolls back to top
//  *  - Fullscreen menu uses the same navbar on top; scroll behaviour
//  *    continues to work while menu is open.
//  */

// const NAV_SCROLL_THRESHOLD = 120;

// // Inner container animation for smooth transitions
// const navVariants = {
//   top: {
//     width: "100%",
//     maxWidth: "100%",
//     borderRadius: 0,
//     marginTop: 0,
//     paddingTop: 12,
//     paddingBottom: 12,
//     paddingLeft: 16,
//     paddingRight: 16,
//     backgroundColor: "rgba(248,249,252,0.98)", // soft solid, no glass
//     borderBottom: "1px solid rgba(209,213,219,0.7)",
//     boxShadow: "0 0 0 rgba(0,0,0,0)",
//     transition: { duration: 0.55, ease: [0.23, 1, 0.32, 1] },
//   },
//   scrolled: {
//     width: "auto",
//     maxWidth: 340, // just enough for logo + icon
//     borderRadius: 999,
//     marginTop: 10,
//     paddingTop: 8,
//     paddingBottom: 8,
//     paddingLeft: 18,
//     paddingRight: 18,
//     backgroundColor: "rgba(248,249,252,0.98)",
//     borderBottom: "1px solid rgba(209,213,219,0.0)",
//     boxShadow: "0 18px 40px rgba(15,23,42,0.22)",
//     transition: { duration: 0.55, ease: [0.23, 1, 0.32, 1] },
//   },
// };

// function ArqeneNavbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   // Initialise from current scroll position on the client to avoid flicker
//   const [isScrolled, setIsScrolled] = useState(() => {
//     if (typeof window === "undefined") return false;
//     return window.scrollY > NAV_SCROLL_THRESHOLD;
//   });

//   // Scroll listener to toggle between full and compact navbar
//   useEffect(() => {
//     const handleScroll = () => {
//       const offset = window.scrollY || window.pageYOffset || 0;
//       setIsScrolled(offset > NAV_SCROLL_THRESHOLD);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleToggle = () => setIsOpen((prev) => !prev);
//   const handleCloseMenu = () => setIsOpen(false);

//   const logoSrc = "/Arqene-Final-Logo_Black.png";
//   const logoHeightClass = isScrolled ? "h-8 md:h-9" : "h-10 md:h-12";

//   return (
//     <>
//       {/* Sticky wrapper – no glass, just transparent container */}
//       <motion.header
//         className="fixed inset-x-0 top-0 z-50 flex justify-center"
//         initial={{ y: -60, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
//       >
//         {/* Animated inner container that morphs between full bar and pill */}
//         <motion.div
//           className="flex items-center justify-between"
//           variants={navVariants}
//           initial={isScrolled ? "scrolled" : "top"}   // start in correct state
//           animate={isScrolled ? "scrolled" : "top"}   // animate only on scroll
//           layout
//         >
//           {/* Left: Logo */}
//           <Link href="/" className="flex items-center gap-2">
//             <div className={`relative w-auto ${logoHeightClass}`}>
//               <Image
//                 src={logoSrc}
//                 alt="Arqené"
//                 width={200}
//                 height={48}
//                 className={`${logoHeightClass} w-auto object-contain`}
//                 priority
//               />
//             </div>
//           </Link>

//           {/* Right: Join Community (only in full navbar) + Hamburger */}
//           <div className="flex items-center gap-3 md:gap-5">
//             {!isOpen && !isScrolled && (
//               <div className="hidden sm:block">
//                 {/* Light / top-state button */}
//                 <Button label="Join Community" variant="dark" />
//               </div>
//             )}

//             <button
//               type="button"
//               aria-label={isOpen ? "Close navigation" : "Open navigation"}
//               className="relative flex items-center justify-center rounded-full border border-transparent bg-transparent p-1.5 transition-colors hover:border-zinc-700"
//               onClick={handleToggle}
//             >
//               <HamburgerToggle isOpen={isOpen} onToggle={handleToggle} />
//             </button>
//           </div>
//         </motion.div>
//       </motion.header>

//       {/* Fullscreen animated menu overlay – now with glass blur background */}
//       <FullscreenMenu isOpen={isOpen} onClose={handleCloseMenu} />
//     </>
//   );
// }

// export default ArqeneNavbar;


// components/navbar/ArqeneNavbar.jsx
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import HamburgerToggle from "./HamburgerToggle";
import FullscreenMenu from "./FullScreenMenu";
import Button from "./AnimatedButton";

const NAV_SCROLL_THRESHOLD = 120;

const navVariants = {
  top: {
    width: "100%",
    maxWidth: "100%",
    borderRadius: 0,
    marginTop: 0,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "rgba(248,249,252,0.98)",
    borderBottom: "1px solid rgba(209,213,219,0.7)",
    boxShadow: "0 0 0 rgba(0,0,0,0)",
    transition: { duration: 0.55, ease: [0.23, 1, 0.32, 1] },
  },
  scrolled: {
    width: "auto",
    maxWidth: 340,
    borderRadius: 999,
    marginTop: 10,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 18,
    paddingRight: 18,
    backgroundColor: "rgba(248,249,252,0.98)",
    borderBottom: "1px solid rgba(209,213,219,0.0)",
    boxShadow: "0 18px 40px rgba(15,23,42,0.22)",
    transition: { duration: 0.55, ease: [0.23, 1, 0.32, 1] },
  },
};

function ArqeneNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Hydration-safe: start as "top" on SSR and the very first client render.
  const [hydrated, setHydrated] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setHydrated(true); // now safe to read window, adjust layout after mount

    const applyScroll = () => {
      const offset = window.scrollY || window.pageYOffset || 0;
      setIsScrolled(offset > NAV_SCROLL_THRESHOLD);
    };

    applyScroll();
    window.addEventListener("scroll", applyScroll, { passive: true });
    return () => window.removeEventListener("scroll", applyScroll);
  }, []);

  const handleToggle = () => setIsOpen((p) => !p);
  const handleCloseMenu = () => setIsOpen(false);

  const logoSrc = "/Arqene-Final-Logo_Black.png";

  // Always render initial “top” sizes so SSR and first client paint match
  const logoHeightClass =
    hydrated && isScrolled ? "h-8 md:h-9" : "h-10 md:h-12";

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 flex justify-center"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      >
        <motion.div
          className="flex items-center justify-between"
          variants={navVariants}
          initial="top"                         // identical SSR + first client render
          animate={isScrolled ? "scrolled" : "top"} // change only after mount
          layout
        >
          <Link href="/" className="flex items-center gap-2">
            <div className={`relative w-auto ${logoHeightClass}`}>
              <Image
                src={logoSrc}
                alt="Arqené"
                width={200}
                height={48}
                className={`${logoHeightClass} w-auto object-contain`}
                priority
              />
            </div>
          </Link>

          <div className="flex items-center gap-3 md:gap-5">
            {!isOpen && !isScrolled && (
              <div className="hidden sm:block">
                <Button label="Join Community" variant="dark" />
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
        </motion.div>
      </motion.header>

      <FullscreenMenu isOpen={isOpen} onClose={handleCloseMenu} />
    </>
  );
}

export default ArqeneNavbar;
