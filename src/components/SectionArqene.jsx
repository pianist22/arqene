// "use client";

// import { useEffect, useRef } from "react";
// import Button from "./navbar/AnimatedButton";

// export default function SectionArqene() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const blocks = section.querySelectorAll("[data-arqene-animate]");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("arqene-in");
//           }
//         });
//       },
//       { threshold: 0.25 }
//     );

//     blocks.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="bg-white py-16 sm:py-24">
//       <div
//         ref={sectionRef}
//         className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10"
//       >
//         {/* top label */}
//         <p
//           data-arqene-animate
//           className="mb-4 text-l sm:text-sm font-large text-slate-500 opacity-0 translate-y-4"
//         >
//           Arqene
//         </p>

//         <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
//           {/* left: big heading */}
//           <div
//             data-arqene-animate
//             className="lg:w-1/2 opacity-0 translate-y-6"
//           >
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-black">
//               END-TO-END APPLIANCE
//               <br />
//               MASTERY FOR LARGE
//               <br />
//               SCALE PROJECTS
//             </h2>
//           </div>

//           {/* right: paragraph + button */}
//           <div
//             data-arqene-animate
//             className="lg:w-1/2 flex flex-col items-start gap-6 opacity-0 translate-y-6"
//           >
//             <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-md">
//               Arqene — Builders Division offers the best large scale
//               appliance pricing, sourcing, delivery and installation, while
//               seamlessly managing every bit of logistics, leaving you
//               worry‑free.
//             </p>

//             <Button label="get conslt" variant="dark" />
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .arqene-in {
//           opacity: 1;
//           transform: translateY(0);
//           transition: opacity 500ms ease, transform 500ms ease;
//         }
//       `}</style>
//     </section>
//   );
// }

//2

"use client";

import { useEffect, useRef } from "react";
import Button from "./navbar/AnimatedButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function SectionArqene() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elems = section.querySelectorAll("[data-arqene-animate]");

    gsap.set(elems, { opacity: 0, y: 40 });

    const ctx = gsap.context(() => {
      gsap.to(elems, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: section,
          start: "top 80%", // when section enters viewport
          toggleActions: "play none none none",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-[#d6d9db] py-32 sm:py-40">
      <div ref={sectionRef} className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10">
        <p
          data-arqene-animate
          className="mb-4 text-xs sm:text-sm font-medium text-slate-500"
        >
          Arqene — Interior Design Studio
        </p>

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          <div data-arqene-animate className="lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-black">
              END‑TO‑END INTERIOR DESIGN
              <br />
              MASTERY FOR MODERN
              <br />
              RESIDENTIAL & COMMERCIAL SPACES
            </h2>
          </div>

          <div
            data-arqene-animate
            className="lg:w-1/2 flex flex-col gap-6 lg:pl-24"
          >
            <p className="text-sm sm:text-xl text-slate-700 leading-relaxed max-w-md">
              Arqene delivers thoughtful, detail‑driven interiors from concept
              to completion, handling layout, materials, furnishings and styling
              while coordinating every step of the process so your space feels
              effortless and uniquely yours.
            </p>
            <Link href="/contact">
              <Button label="Get consultation" variant="dark" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
