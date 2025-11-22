// "use client";

// import { useEffect, useRef } from "react";

// const PRODUCTS = [
//   {
//     id: "01",
//     title: "Evette Dining Table",
//     subtitle: "In American Oak",
//     image: "/products/evette.jpg",
//   },
//   {
//     id: "02",
//     title: "Marble Console",
//     subtitle: "Hand‑finished stone",
//     image: "/products/console.jpg",
//   },
//   {
//     id: "03",
//     title: "Aura Lounge Chair",
//     subtitle: "Bouclé + brass",
//     image: "/products/chair.jpg",
//   },
//   {
//     id: "04",
//     title: "Noir Sideboard",
//     subtitle: "Ebonized oak",
//     image: "/products/sideboard.jpg",
//   },
//   {
//     id: "05",
//     title: "Arc Floor Lamp",
//     subtitle: "Soft ambient glow",
//     image: "/products/lamp.jpg",
//   },
//   {
//     id: "06",
//     title: "Sculpted Coffee Table",
//     subtitle: "Cast metal base",
//     image: "/products/table.jpg",
//   },
// ];

// export default function Products() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const cards = section.querySelectorAll("[data-product-card]");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("product-card-in");
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     cards.forEach((card) => observer.observe(card));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="py-24 bg-black text-white"
//     >
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
//         <h2 className="text-xs sm:text-sm tracking-[0.35em] uppercase text-pink-300 mb-10">
//           Featured Pieces
//         </h2>

//         {/* vertical column; on lg screens cards are wider but still stacked */}
//         <div className="flex flex-col gap-12">
//           {PRODUCTS.map((product) => (
//             <article
//               key={product.id}
//               data-product-card
//               className="opacity-0 translate-y-10 scale-[0.97] border border-white/20 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm"
//             >
//               <div className="grid md:grid-cols-[1.1fr,2fr]">
//                 {/* number + text */}
//                 <div className="p-6 sm:p-8 flex flex-col justify-between">
//                   <div>
//                     <p className="text-4xl sm:text-5xl font-semibold text-pink-300 mb-6">
//                       {product.id}
//                     </p>
//                     <h3 className="text-lg sm:text-2xl font-semibold tracking-wide">
//                       {product.title}
//                     </h3>
//                     <p className="mt-2 text-sm sm:text-base text-white/70 uppercase tracking-[0.2em]">
//                       {product.subtitle}
//                     </p>
//                   </div>
//                 </div>

//                 {/* image */}
//                 <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden">
//                   <img
//                     src={product.image}
//                     alt={product.title}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>

//       {/* subtle pop‑in animation */}
//       <style jsx>{`
//         .product-card-in {
//           opacity: 1;
//           transform: translateY(0) scale(1);
//           transition: opacity 600ms ease, transform 600ms ease;
//         }
//       `}</style>
//     </section>
//   );
// }

//horizontal scrool test 1

// "use client";

// import { useEffect, useRef } from "react";

// const PRODUCTS = [
//   { id: "01", title: "Evette Dining Table", subtitle: "In American Oak", image: "/products/evette.jpg" },
//   { id: "02", title: "Marble Console", subtitle: "Hand‑finished stone", image: "/products/console.jpg" },
//   { id: "03", title: "Aura Lounge Chair", subtitle: "Bouclé + brass", image: "/products/chair.jpg" },
//   { id: "04", title: "Noir Sideboard", subtitle: "Ebonized oak", image: "/products/sideboard.jpg" },
//   { id: "05", title: "Arc Floor Lamp", subtitle: "Soft ambient glow", image: "/products/lamp.jpg" },
//   { id: "06", title: "Sculpted Coffee Table", subtitle: "Cast metal base", image: "/products/table.jpg" },
// ];

// export default function Products() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const cards = section.querySelectorAll("[data-product-card]");
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("product-card-in");
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     cards.forEach((card) => observer.observe(card));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section ref={sectionRef} className="py-24 bg-[#d6d9db] text-slate-900">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
//         <h2 className="text-xs sm:text-sm tracking-[0.35em] uppercase text-rose-500 mb-8">
//           Featured Pieces
//         </h2>

//         {/* horizontal scroll area */}
//         <div className="-mx-4 sm:-mx-6 lg:-mx-10 px-4 sm:px-6 lg:px-10">
//           <div className="flex gap-8 overflow-x-auto overflow-y-hidden pb-4 no-scrollbar">
//             {PRODUCTS.map((product) => (
//               <article
//                 key={product.id}
//                 data-product-card
//                 className="min-w-[260px] sm:min-w-[320px] lg:min-w-[380px] opacity-0 translate-y-6 scale-[0.97] border border-slate-300 rounded-xl overflow-hidden bg-white shadow-md"
//               >
//                 <div className="flex flex-col h-full">
//                   {/* image on top */}
//                   <div className="relative h-44 sm:h-52 lg:h-60 overflow-hidden">
//                     <img
//                       src={product.image}
//                       alt={product.title}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>

//                   {/* text below */}
//                   <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
//                     <p className="text-3xl sm:text-4xl font-semibold text-rose-500 mb-3">
//                       {product.id}
//                     </p>
//                     <div>
//                       <h3 className="text-base sm:text-lg font-semibold tracking-wide">
//                         {product.title}
//                       </h3>
//                       <p className="mt-1 text-xs sm:text-sm text-slate-500 uppercase tracking-[0.18em]">
//                         {product.subtitle}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .product-card-in {
//           opacity: 1;
//           transform: translateY(0) scale(1);
//           transition: opacity 500ms ease, transform 500ms ease;
//         }
//         .no-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </section>
//   );
// }

// horizontal test 2 

"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./navbar/AnimatedButton";

gsap.registerPlugin(ScrollTrigger);

const PRODUCTS = [
  {
    id: "01",
    name: "Artevo Console",
    collection: "Museum Collection",
    image: "/products/evette.jpg",
  },
  {
    id: "02",
    name: "Artevo Wall Unit",
    collection: "Museum Collection",
    image: "/products/wall-unit.jpg",
  },
  {
    id: "03",
    name: "Brune Armchair",
    collection: "Museum Collection",
    image: "/products/armchair.jpg",
  },
  {
    id: "04",
    name: "Linea Sofa",
    collection: "Museum Collection",
    image: "/products/sofa.jpg",
  },
  {
    id: "05",
    name: "Oak Coffee Table",
    collection: "Museum Collection",
    image: "/products/coffee-table.jpg",
  },
  {
    id: "06",
    name: "Marble Side Table",
    collection: "Museum Collection",
    image: "/products/side-table.jpg",
  },
];

export default function Products() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const totalScroll = track.scrollWidth - window.innerWidth;
    if (totalScroll <= 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        track,
        { x: 0 },
        {
          x: -totalScroll,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${totalScroll}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        }
      );
    }, section);

    return () => ctx.revert();      //[#d6d9db]
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-[#d6d9db] rounded-b-[80px] text-slate-900 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        <h2 className="mb-12 text-center text-4xl text-3xl  tracking-[0.25em] uppercase text-slate-500">
          Products
        </h2>
      </div>

      {/* horizontal track that will move left/right
      <div className="relative">
        <div
          ref={trackRef}
          className="flex gap-16 pl-8 pr-8 md:pl-16 md:pr-16 lg:pl-32 lg:pr-32"
        >
          {PRODUCTS.map((product) => (
            <article
              key={product.id}
              className="flex-shrink-0 w-[80vw] md:w-[45vw] lg:w-[32vw] max-w-[520px] flex flex-col items-center"
            > */}
            {/* horizontal track that will move left/right */}
<div className="relative">
  <div
    ref={trackRef}
    className="flex gap-6 pl-8 pr-8 md:pl-16 md:pr-16 lg:pl-32 lg:pr-32"
  >
    {PRODUCTS.map((product) => (
      <article
        key={product.id}
        onMouseEnter={() => {
          window.dispatchEvent(new Event("cursor-small-enter"));
        }}
        onMouseLeave={() => {
          window.dispatchEvent(new Event("cursor-small-leave"));
        }}
        className="group flex-shrink-0 w-[80vw] md:w-[45vw] lg:w-[32vw] max-w-[520px] flex flex-col items-center transition-transform duration-300 ease-out hover:-translate-y-2"
      >
        {/* hover image effect */}
        <div className="w-full max-w-[520px] aspect-[16/9] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        {/* text under image */}
        <div className="mt-6 text-center space-y-1">
          <p className="text-[11px] tracking-[0.2em] uppercase text-slate-500">
            {product.collection}
          </p>
          <p className="text-lg italic text-slate-700">
            {product.name}
          </p>
        </div>
      </article>
    ))}
    
    {/* extra empty space after last card */}
    <div className="flex-shrink-0 w-[20vw] md:w-[15vw] lg:w-[10vw]" />
  </div>
</div>


      {/* button under pinned gallery section */}
      <div className="mt-16 flex justify-center">
        <Link
          href="/Products" // change to your showcase route
          
      
        >
        <Button label="View Our Projects" variant="dark"></Button>  
        </Link>
      </div>
    </section>
  );
}
