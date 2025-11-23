// components/IntroLoader.jsx
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function IntroLoader() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="arqene-intro-loader"
          className="fixed inset-0 z-[9999] overflow-hidden"
          initial={{ y: 0 }}          // start covering the whole viewport
          animate={{ y: "-100%" }}    // slide the gradient up and away
          transition={{
            delay: 1.0,               // ~1s fully visible
            duration: 1.2,            // ~1.2s slide up
            ease: [0.23, 1, 0.32, 1], // smooth, luxury ease
          }}
          onAnimationComplete={() => setVisible(false)}
        >
          {/* Full-screen soft grey gradient (opaque) */}
          <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_10%_0%,#f9fafb_0,#e5e7eb_35%,#d4d4d8_70%,#a1a1aa_100%)]">
            {/* Centered logo */}
            <Image
              src="/Arqene-Final-Logo_Black.png"
              alt="Arqené"
              width={260}
              height={80}
              className="h-12 w-auto md:h-14 lg:h-16"
              priority
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
