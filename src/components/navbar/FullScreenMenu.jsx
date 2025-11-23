
// // components/navbar/FullscreenMenu.jsx
// "use client";

// import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import Button from "./AnimatedButton";

// const navigationItems = [
//   { name: "Home", href: "/" },
//   { name: "About Us", href: "/about" },
//   { name: "Catelog", href: "/catalog" },
//   { name: "Contact Us", href: "/contact" },
// ];

// const STAGGER = 0.035;

// function TextRoll({ children, className = "" }) {
//   const text = String(children || "");

//   return (
//     <motion.span
//       initial="initial"
//       whileHover="hovered"
//       className={`nav-link-roll relative block overflow-hidden ${className}`}
//       style={{ lineHeight: 0.75 }}
//     >
//       <div>
//         {text.split("").map((letter, index) => {
//           const delay = STAGGER * Math.abs(index - (text.length - 1) / 2);

//           return (
//             <motion.span
//               key={`line1-${index}`}
//               variants={{
//                 initial: { y: 0 },
//                 hovered: { y: "-100%" },
//               }}
//               transition={{
//                 ease: "easeInOut",
//                 delay,
//               }}
//               className="inline-block"
//             >
//               {letter}
//             </motion.span>
//           );
//         })}
//       </div>
//       <div className="absolute inset-0">
//         {text.split("").map((letter, index) => {
//           const delay = STAGGER * Math.abs(index - (text.length - 1) / 2);

//           return (
//             <motion.span
//               key={`line2-${index}`}
//               variants={{
//                 initial: { y: "100%" },
//                 hovered: { y: 0 },
//               }}
//               transition={{
//                 ease: "easeInOut",
//                 delay,
//               }}
//               className="inline-block"
//             >
//               {letter}
//             </motion.span>
//           );
//         })}
//       </div>
//     </motion.span>
//   );
// }

// function FullscreenMenu({ isOpen, onClose }) {
//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.nav
//           key="arqene-menu"
//           initial={{ y: "-100%" }}
//           animate={{ y: 0 }}
//           exit={{ y: "-100%" }}  // close from bottom to up visually
//           transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
//           className="fullscreen-menu-bg fixed inset-0 z-40 text-zinc-50"
//         >
//           <div className="flex h-full w-full flex-col px-6 py-6 md:px-10 lg:px-16">
//             {/* Top strip with DARK logo when menu is open */}
//             <div className="mb-6 flex items-center justify-between">
//               <div className="relative h-7 w-auto md:h-9">
//                 <Image
//                   src="/Arqene-Final-Logo_Black.png"
//                   alt="Arqené"
//                   width={180}
//                   height={40}
//                   className="h-full w-auto object-contain"
//                   priority
//                 />
//               </div>
//               <span className="text-xs uppercase tracking-[0.2em] text-zinc-400">
//                 Menu
//               </span>
//             </div>

//             {/* Centered navigation options */}
//             <ul className="flex min-h-0 flex-1 flex-col items-center justify-center gap-4 text-center">
//               {navigationItems.map((item, index) => (
//                 <li
//                   key={item.name + index}
//                   className="nav-item group relative flex cursor-pointer flex-col items-center"
//                 >
//                   <Link href={item.href} onClick={onClose}>
//                     <div className="relative flex items-start">
//                       <TextRoll className="text-4xl font-extrabold uppercase tracking-[-0.06em] md:text-5xl lg:text-6xl">
//                         {item.name}
//                       </TextRoll>
//                     </div>
//                   </Link>
//                 </li>
//               ))}
//             </ul>

//             {/* Bottom Join Community in light-grey theme */}
//             <div className="flex justify-center pb-4 pt-6 md:pb-6">
//               <Button
//                 label="Join Community"
//                 variant="light"
//               />
//             </div>
//           </div>
//         </motion.nav>
//       )}
//     </AnimatePresence>
//   );
// }

// export default FullscreenMenu;


// components/navbar/FullscreenMenu.jsx
"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Button from "./AnimatedButton";

const navigationItems = [
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
      className={`nav-link-roll relative block overflow-hidden ${className}`}
      style={{ lineHeight: 0.75 }}
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

function FullscreenMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          key="arqene-menu"
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }} // closes upward
          transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          className="fixed inset-0 z-40 text-zinc-50"
        >
          {/* Gradient + glass blur background layer */}
          <div
            className="fullscreen-menu-bg absolute inset-0"
            style={{
              backdropFilter: "blur(32px)",
              WebkitBackdropFilter: "blur(32px)",
            }}
          />

          {/* Foreground content */}
          <div className="relative flex h-full w-full flex-col items-center justify-between px-6 py-10 md:px-10 lg:px-16">
            {/* Centered navigation items */}
            <ul className="flex min-h-0 flex-1 flex-col items-center justify-center gap-4 text-center">
              {navigationItems.map((item, index) => (
                <li
                  key={item.name + index}
                  className="nav-item group relative flex cursor-pointer flex-col items-center"
                >
                  <Link href={item.href} onClick={onClose}>
                    <div className="relative flex items-start">
                      <TextRoll className="text-4xl font-extrabold uppercase tracking-[-0.06em] md:text-5xl lg:text-6xl">
                        {item.name}
                      </TextRoll>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Bottom Join Community button in dark theme */}
            <div className="pb-6 pt-4">
              <Button label="Join Community" variant="light" />
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

export default FullscreenMenu;

