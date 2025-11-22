// // components/navbar/ArqeneNavbar.jsx
// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import HamburgerToggle from "./HamburgerToggle";
// import FullscreenMenu from "./FullscreenMenu";
// import Button from "./AnimatedButton";

// function ArqeneNavbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleToggle = () => {
//     setIsOpen((prev) => !prev);
//   };

//   const handleCloseMenu = () => {
//     setIsOpen(false);
//   };

//   // Choose logo based on navbar state
//   const logoSrc = isOpen
//     ? "/Arqene-Final-Logo_Black.png" // menu open -> dark logo
//     : "/Arqene-Final-Logo_Black.png"; // initial -> light logo

//   return (
//     <>
//       {/* Sticky top navbar */}
//       <motion.header
//         className="navbar-bg fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 py-3 md:px-8 md:py-4"
//         style={{
//           backdropFilter: "blur(18px)",
//           WebkitBackdropFilter: "blur(18px)",
//         }}
//         initial={{ y: -60, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
//       >
//         {/* Left: Logo (changes with state) */}
//         <Link href="/" className="flex items-center gap-2">
//           <div className="relative h-7 w-auto md:h-9">
//             <Image
//               src={logoSrc}
//               alt="Arqené"
//               width={180}
//               height={40}
//               className="  h-10        
//   md:h-12      
//   w-auto 
//   object-contain"
//               priority
//             />
//           </div>
//         </Link>

//         {/* Right: Join Community + Hamburger */}
//         <div className="flex items-center gap-3 md:gap-5">
//           {/* Join button visible only when menu closed */}
//           {!isOpen && (
//             <div className="hidden sm:block">
//               <Button label="Join Community" variant="dark"/>
//             </div>
//           )}

//           <button
//             type="button"
//             aria-label={isOpen ? "Close navigation" : "Open navigation"}
//             className="relative flex items-center justify-center rounded-full border border-transparent bg-transparent p-1.5 transition-colors hover:border-zinc-700"
//             onClick={handleToggle}
//           >
//             <HamburgerToggle isOpen={isOpen} onToggle={handleToggle} />
//           </button>
//         </div>
//       </motion.header>

//       {/* Fullscreen animated menu overlay */}
//       <FullscreenMenu isOpen={isOpen} onClose={handleCloseMenu} />
//     </>
//   );
// }

// export default ArqeneNavbar;




// // components/navbar/ArqeneNavbar.jsx
// "use client";

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import HamburgerToggle from "./HamburgerToggle";
// import FullscreenMenu from "./FullscreenMenu";
// import Button from "./AnimatedButton";

// /**
//  * Navbar behaviour:
//  *  - At top of page (scrollY <= threshold):
//  *      • Full-width glass navbar (current design)
//  *      • Logo + Join Community + Hamburger
//  *  - After scrolling past threshold:
//  *      • Compact pill navbar centered at top
//  *      • Only logo + hamburger (no Join button)
//  *      • Stays in this compact form until user scrolls back to very top
//  *  - Fullscreen menu open/close is unaffected by scroll behaviour.
//  */

// const NAV_SCROLL_THRESHOLD = 120; // px from top before switching layout

// // Inner container animation for luxury-smooth transitions
// const navVariants = {
//   top: {
//     maxWidth: "100%",
//     borderRadius: 0,
//     marginTop: 0,
//     paddingTop: 12,
//     paddingBottom: 12,
//     paddingLeft: 16,
//     paddingRight: 16,
//     boxShadow: "0 0 0 rgba(0,0,0,0)",
//     transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
//   },
//   scrolled: {
//     maxWidth: 460,
//     borderRadius: 999,
//     marginTop: 12,
//     paddingTop: 10,
//     paddingBottom: 10,
//     paddingLeft: 20,
//     paddingRight: 20,
//     boxShadow: "0 16px 40px rgba(15,23,42,0.18)",
//     transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
//   },
// };

// function ArqeneNavbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Scroll listener to toggle between full and compact navbar
//   useEffect(() => {
//     const handleScroll = () => {
//       const offset = window.scrollY || window.pageYOffset || 0;
//       if (offset > NAV_SCROLL_THRESHOLD && !isScrolled) {
//         setIsScrolled(true);
//       } else if (offset <= NAV_SCROLL_THRESHOLD && isScrolled) {
//         setIsScrolled(false);
//       }
//     };

//     // Run once on mount in case page is not at top
//     handleScroll();

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [isScrolled]);

//   const handleToggle = () => {
//     setIsOpen((prev) => !prev);
//   };

//   const handleCloseMenu = () => {
//     setIsOpen(false);
//   };

//   // Using same logo for both states as per your code
//   const logoSrc = "/Arqene-Final-Logo_Black.png";

//   // Logo height adjusts slightly in compact mode
//   const logoHeightClass = isScrolled ? "h-8 md:h-9" : "h-10 md:h-12";

//   return (
//     <>
//       {/* Sticky wrapper – gradient only in the top (full) state */}
//       <motion.header
//         className={`fixed inset-x-0 top-0 z-50 flex justify-center ${
//           !isScrolled ? "navbar-bg" : ""
//         }`}
//         style={{
//           backdropFilter: !isScrolled ? "blur(18px)" : "none",
//           WebkitBackdropFilter: !isScrolled ? "blur(18px)" : "none",
//         }}
//         initial={{ y: -60, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
//       >
//         {/* Animated inner container that morphs between full bar and pill */}
//         <motion.div
//           className="flex w-full items-center justify-between"
//           variants={navVariants}
//           animate={isScrolled ? "scrolled" : "top"}
//         >
//           {/* Left: Logo (same asset, slightly resized when scrolled) */}
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
//             {/* Join button:
//                 - only when menu is closed
//                 - only in top/full state (not in compact pill) */}
//             {!isOpen && !isScrolled && (
//               <div className="hidden sm:block">
//                 <Button label="Join Community" variant="light" />
//               </div>
//             )}

//             <button
//               type="button"
//               aria-label={isOpen ? "Close navigation" : "Open navigation"}
//               className="relative flex items-center justify-center rounded-full border border-transparent bg-transparent p-1.5 transition-colors hover:border-zinc-700"
//               onClick={handleToggle}
//             >
//               {/* Same hamburger component in both states */}
//               <HamburgerToggle isOpen={isOpen} onToggle={handleToggle} />
//             </button>
//           </div>
//         </motion.div>
//       </motion.header>

//       {/* Fullscreen animated menu overlay – unchanged logic */}
//       <FullscreenMenu isOpen={isOpen} onClose={handleCloseMenu} />
//     </>
//   );
// }

// export default ArqeneNavbar;


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
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Scroll listener to toggle between full and compact navbar
//   useEffect(() => {
//     const handleScroll = () => {
//       const offset = window.scrollY || window.pageYOffset || 0;
//       if (offset > NAV_SCROLL_THRESHOLD && !isScrolled) {
//         setIsScrolled(true);
//       } else if (offset <= NAV_SCROLL_THRESHOLD && isScrolled) {
//         setIsScrolled(false);
//       }
//     };

//     handleScroll(); // in case page is not at top on load

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [isScrolled]);

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
//           animate={isScrolled ? "scrolled" : "top"}
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
//                 {/* Light theme button for top navbar */}
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

/**
 * Behaviour:
 *  - At top (scrollY <= threshold):
 *      • Full-width light navbar
 *      • Logo + Join Community + Hamburger
 *  - After scrolling past threshold:
 *      • Compact pill centered at top
 *      • Only logo + hamburger
 *      • Remains compact until user scrolls back to top
 *  - Fullscreen menu uses the same navbar on top; scroll behaviour
 *    continues to work while menu is open.
 */

const NAV_SCROLL_THRESHOLD = 120;

// Inner container animation for smooth transitions
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
    backgroundColor: "rgba(248,249,252,0.98)", // soft solid, no glass
    borderBottom: "1px solid rgba(209,213,219,0.7)",
    boxShadow: "0 0 0 rgba(0,0,0,0)",
    transition: { duration: 0.55, ease: [0.23, 1, 0.32, 1] },
  },
  scrolled: {
    width: "auto",
    maxWidth: 340, // just enough for logo + icon
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

  // Initialise from current scroll position on the client to avoid flicker
  const [isScrolled, setIsScrolled] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.scrollY > NAV_SCROLL_THRESHOLD;
  });

  // Scroll listener to toggle between full and compact navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY || window.pageYOffset || 0;
      setIsScrolled(offset > NAV_SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleCloseMenu = () => setIsOpen(false);

  const logoSrc = "/Arqene-Final-Logo_Black.png";
  const logoHeightClass = isScrolled ? "h-8 md:h-9" : "h-10 md:h-12";

  return (
    <>
      {/* Sticky wrapper – no glass, just transparent container */}
      <motion.header
        className="fixed inset-x-0 top-0 z-50 flex justify-center"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Animated inner container that morphs between full bar and pill */}
        <motion.div
          className="flex items-center justify-between"
          variants={navVariants}
          initial={isScrolled ? "scrolled" : "top"}   // start in correct state
          animate={isScrolled ? "scrolled" : "top"}   // animate only on scroll
          layout
        >
          {/* Left: Logo */}
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

          {/* Right: Join Community (only in full navbar) + Hamburger */}
          <div className="flex items-center gap-3 md:gap-5">
            {!isOpen && !isScrolled && (
              <div className="hidden sm:block">
                {/* Light / top-state button */}
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

      {/* Fullscreen animated menu overlay – now with glass blur background */}
      <FullscreenMenu isOpen={isOpen} onClose={handleCloseMenu} />
    </>
  );
}

export default ArqeneNavbar;
