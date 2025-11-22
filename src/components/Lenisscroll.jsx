// "use client";

// import { useEffect } from "react";
// import Lenis from "@studio-freight/lenis";

// export default function Lenisscroll({ children }) {
//   useEffect(() => {
//     const lenis = new Lenis({
//       lerp: 0.1,          // smoothness (0–1, lower = more smooth)
//       duration: 1.2,      // seconds for momentum
//       smoothWheel: true,
//       smoothTouch: false,
//     });

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);

//     return () => {
//       lenis.destroy();
//     };
//   }, []);

//   return children;
// }

// gsap 1
// "use client";

// import { useEffect } from "react";
// import Lenis from "@studio-freight/lenis";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Lenisscroll({ children }) {
//   useEffect(() => {
//     // 1. Create Lenis instance
//     const lenis = new Lenis({
//       lerp: 0.1,         // smoothness
//       duration: 1.2,     // momentum duration
//       smoothWheel: true,
//       smoothTouch: false,
//     });

//     // 2. Sync Lenis with ScrollTrigger
//     lenis.on("scroll", () => {
//       ScrollTrigger.update();
//     });

//     // 3. Let GSAP's ticker drive Lenis' raf
//     gsap.ticker.add((time) => {
//       // gsap time is in seconds; Lenis expects ms
//       lenis.raf(time * 1000);
//     });

//     // 4. Disable GSAP lag smoothing (recommended by Lenis docs)
//     gsap.ticker.lagSmoothing(0); // no delay between Lenis + GSAP [web:214][web:226]

//     return () => {
//       gsap.ticker.remove((time) => {
//         lenis.raf(time * 1000);
//       });
//       lenis.destroy();
//       ScrollTrigger.kill(); // optional: clean all triggers on unmount
//     };
//   }, []);

//   return children;
// }

// gsap 2

"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Lenisscroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    });

    const updateScrollTrigger = () => {
      ScrollTrigger.update();
    };

    lenis.on("scroll", updateScrollTrigger);

    const ticker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", updateScrollTrigger);
      lenis.destroy();
      gsap.ticker.remove(ticker);

      // Optional: kill all existing ScrollTriggers
      ScrollTrigger.getAll().forEach((t) => t.kill());
      // do NOT call ScrollTrigger.kill()
    };
  }, []);

  return children;
}
