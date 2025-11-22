// "use client";

// import { useEffect, useRef } from "react";

// export default function About() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           const elements = entry.target.querySelectorAll("[data-animate]");
//           elements.forEach((el, index) => {
//             el.style.animationDelay = `${index * 0.1}s`;
//             el.classList.add("animate-in");
//           });
//         }
//       },
//       { threshold: 0 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="py-24 bg-[#d0dbdd]" // soft background like reference
//     >
//       <div className="max-w-6xl mx-auto px-6 lg:px-12">
//         <div className="grid lg:grid-cols-[1.1fr,1.4fr] gap-12 items-start">
//           {/* LEFT: text column */}
//           <div data-animate className="opacity-0 animate-fade-in max-w-xl">
//             <h2 className="text-xl tracking-[0.25em] uppercase mb-6">
//               Attention to Detail
//             </h2>
//             <p className="text-[15px] leading-relaxed text-slate-800">
//               Whether it is the honed finish on a marble table top, the hand
//               rubbed patina of a brass dome, or the polished surface of a wooden
//               bowl, each piece is thoroughly inspected before leaving our
//               workshop. We strive to accentuate the character of each piece by
//               highlighting the inherent beauty and subtle variations of grain,
//               figure, and texture found in the materials. Our finishes are
//               either all natural or environmentally friendly and are applied in
//               a way that enables them to patinate through use and time.
//             </p>
//           </div>

//           {/* RIGHT: stacked imagery */}
//           <div
//             data-animate
//             className="opacity-0 animate-fade-in grid gap-8 lg:grid-rows-[minmax(0,1fr)_minmax(0,1fr)]"
//           >
//             <div className="relative w-full overflow-hidden">
//               <img
//                 src="/about-top.jpg"
//                 alt="Craft detail 1"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="relative w-full overflow-hidden">
//               <img
//                 src="/about-bottom.jpg"
//                 alt="Craft detail 2"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import { useEffect, useRef } from "react";

// export default function About() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const cards = section.querySelectorAll("[data-pop]");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("about-pop-in");
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.15 }
//     );

//     cards.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="py-24 bg-[#d6d9db]" ref={sectionRef}>
//       <div className="max-w-6xl mx-auto px-6 lg:px-12">
//         <div className="grid lg:grid-cols-[1.1fr,1.4fr] gap-12 items-start">
//           {/* LEFT: text column */}
//           <div>
//             <h2 className="text-sm tracking-[0.25em] uppercase mb-6">
//               Attention to Detail
//             </h2>
//             <p className="text-[15px] leading-relaxed text-slate-800 max-w-xl">
//               Whether it is the honed finish on a marble table top, the hand
//               rubbed patina of a brass dome, or the polished surface of a wooden
//               bowl, each piece is thoroughly inspected before leaving our
//               workshop. We strive to accentuate the character of each piece by
//               highlighting the inherent beauty and subtle variations of grain,
//               figure, and texture found in the materials. Our finishes are
//               either all natural or environmentally friendly and are applied in
//               a way that enables them to patinate through use and time.
//             </p>
//           </div>

//           {/* RIGHT: stacked imagery, with soft pop animation */}
//           <div className="grid gap-8 lg:grid-rows-[minmax(0,1fr)_minmax(0,1fr)]">
//             <div
//               data-pop
//               className="relative w-full overflow-hidden opacity-0 translate-y-8 scale-[0.98]"
//             >
//               <img
//                 src="/about-top.jpg"
//                 alt="Craft detail 1"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div
//               data-pop
//               className="relative w-full overflow-hidden opacity-0 translate-y-8 scale-[0.98]"
//             >
//               <img
//                 src="/about-bottom.jpg"
//                 alt="Craft detail 2"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Minimal pop‑in animation */}
//       <style jsx>{`
//         .about-pop-in {
//           opacity: 1;
//           transform: translateY(0) scale(1);
//           transition: opacity 600ms ease, transform 600ms ease;
//         }
//       `}</style>
//     </section>
//   );
// }
 
///this is good but need changes so we changed 

// "use client";

// import { useEffect, useRef } from "react";

// export default function About() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const cards = section.querySelectorAll("[data-pop]");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("about-pop-in");
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.15 }
//     );

//     cards.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="py-24 bg-[#d6d9db]" ref={sectionRef}>
//       <div className="max-w-6xl mx-auto px-6 lg:px-12">
//         <div className="grid lg:grid-cols-[1.3fr,1fr] gap-12 items-start">
//           {/* LEFT: text column */}
//           <div>
//             <h2 className="text-sm tracking-[0.25em] uppercase mb-6">
//               Attention to Detail
//             </h2>
//             <p className="text-[15px] leading-relaxed text-slate-800 max-w-xl">
//               Whether it is the honed finish on a marble table top, the hand
//               rubbed patina of a brass dome, or the polished surface of a wooden
//               bowl, each piece is thoroughly inspected before leaving our
//               workshop. We strive to accentuate the character of each piece by
//               highlighting the inherent beauty and subtle variations of grain,
//               figure, and texture found in the materials. Our finishes are
//               either all natural or environmentally friendly and are applied in
//               a way that enables them to patinate through use and time.
//             </p>
//           </div>

//           {/* RIGHT: small, fixed‑size imagery */}
//           <div className="flex flex-row items-end gap-6">
//             {/* top image */}
//             <div
//               data-pop
//               className="opacity-0 translate-y-6 scale-[0.98] w-[260px] h-[190px] md:w-[320px] md:h-[230px] overflow-hidden rounded"
//             >
//               <img
//                 src="/about-top.jpg"
//                 alt="Craft detail 1"
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* bottom image */}
//             <div
//               data-pop
//               className="opacity-0 translate-y-6 scale-[0.98] w-[260px] h-[190px] md:w-[320px] md:h-[230px] overflow-hidden rounded"
//             >
//               <img
//                 src="/about-bottom.jpg"
//                 alt="Craft detail 2"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Soft pop‑in animation */}
//       <style jsx>{`
//         .about-pop-in {
//           opacity: 1;
//           transform: translateY(0) scale(1);
//           transition: opacity 500ms ease, transform 500ms ease;
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef } from "react";

const STEPS = [
  {
    id: "01",
    title: "Strategic Planning",
    text: "Our team works closely with you to secure the best possible options for your project.",
    image: "/process-1.jpg",
  },
  {
    id: "02",
    title: "Execution",
    text: "Dedicated specialists coordinate every step from procurement to installation.",
    image: "/process-2.jpg",
  },
  {
    id: "03",
    title: "Execution",
    text: "Dedicated specialists and coordinate every step from procurement to installation.",
    image: "/process-3.jpg",
  },
];

export default function OurProcess() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const texts = section.querySelectorAll("[data-overlay-text]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("why-text-in");
          }
        });
      },
      { threshold: 0.4 }
    );

    texts.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#d6d9db] text-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24 bg-white rounded-t-[80px] overflow-hidden">
        <h1 className="mb-10 text-center text-5xl font-bold text-black">
          Our Process
        </h1>

        <div className="flex flex-col gap-10">
          {STEPS.map((step) => (
            <article key={step.id} className="why-row">
              <div
                className="relative w-full h-[320px] sm:h-[380px] md:h-[540px] lg:h-[600px] rounded-t-[80px] overflow-hidden"
                onMouseEnter={() => {
                  window.dispatchEvent(new Event("cursor-small-enter"));
                }}
                onMouseLeave={() => {
                  window.dispatchEvent(new Event("cursor-small-leave"));
                }}
                onTouchStart={() => {
                  window.dispatchEvent(new Event("cursor-small-enter"));
                }}
                onTouchEnd={() => {
                  window.dispatchEvent(new Event("cursor-small-leave"));
                }}
              >
                {/* bigger, wide image */}
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out why-row-img"
                />

                {/* dark overlay */}
                <div className="absolute inset-0 bg-black/35 pointer-events-none" />

                {/* overlay text ONLY (animated on scroll) */}
                <div
                  data-overlay-text
                  className="absolute right-6 bottom-10 max-w-xs text-right opacity-0 translate-y-6"
                >
                  <h3 className="text-2xl sm:text-xl font-semibold tracking-wide mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xl sm:text-xl text-slate-100/85 leading-relaxed">
                    {step.text}
                  </p>
                </div>

                {/* hover / tap area */}
                <div className="absolute inset-0 cursor-pointer" />
              </div>
            </article>
          ))}
        </div>
      </div>
 

      <style jsx>{`
        /* text scroll‑in */
        .why-text-in {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 600ms ease, transform 600ms ease;
        }

        /* image hover zoom */
        .why-row:hover .why-row-img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}


