// // src/app/products/page.jsx
// "use client";

// const PRODUCTS = [
//   {
//     id: "01",
//     name: "Artevo Console",
//     collection: "Museum Collection",
//     image: "/products/evette.jpg",
//   },
//   {
//     id: "02",
//     name: "Artevo Wall Unit",
//     collection: "Museum Collection",
//     image: "/products/wall-unit.jpg",
//   },
//   {
//     id: "03",
//     name: "Brune Armchair",
//     collection: "Museum Collection",
//     image: "/products/armchair.jpg",
//   },
//   {
//     id: "04",
//     name: "Linea Sofa",
//     collection: "Museum Collection",
//     image: "/products/sofa.jpg",
//   },
//   {
//     id: "05",
//     name: "Oak Coffee Table",
//     collection: "Museum Collection",
//     image: "/products/coffee-table.jpg",
//   },
//   {
//     id: "06",
//     name: "Marble Side Table",
//     collection: "Museum Collection",
//     image: "/products/side-table.jpg",
//   },
// ];

// export default function ProductsPage() {
//   return (
//     <main className="min-h-screen bg-[#f2efeb] text-slate-900">
//       {/* top spacing and title */}
//       <section className="py-24 px-4 sm:px-6 lg:px-10 max-w-6xl mx-auto">
//         <h1 className="mb-12 text-center text-sm tracking-[0.25em] uppercase text-slate-500">
//           Our Products
//         </h1>

//         {/* vertical layout: same card style, but arranged in rows */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
//           {PRODUCTS.map((product) => (
//             <div key={product.id} className="flex flex-col items-center">
//               <div className="w-full bg-[#f5f1ec] aspect-[4/3] flex items-center justify-center overflow-hidden">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="max-h-[70%] max-w-[80%] object-contain"
//                 />
//               </div>

//               <div className="mt-6 text-center space-y-1">
//                 <p className="text-[11px] tracking-[0.2em] uppercase text-slate-500">
//                   {product.collection}
//                 </p>
//                 <p className="text-lg italic text-slate-700">
//                   {product.name}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }


// // src/app/products/page.jsx
// "use client";

// import React, { useState, useMemo } from "react";
// import Link from "next/link";

// const PRODUCTS = [
//   {
//     id: "artevo-console",
//     name: "Artevo Console",
//     collection: "Museum Collection",
//     category: "Storage",
//     image: "/products/evette.jpg",
//   },
//   {
//     id: "artevo-wall-unit",
//     name: "Artevo Wall Unit",
//     collection: "Museum Collection",
//     category: "Storage",
//     image: "/products/wall-unit.jpg",
//   },
//   {
//     id: "brune-armchair",
//     name: "Brune Armchair",
//     collection: "Museum Collection",
//     category: "Seating",
//     image: "/products/armchair.jpg",
//   },
//   {
//     id: "linea-sofa",
//     name: "Linea Sofa",
//     collection: "Museum Collection",
//     category: "Sofas",
//     image: "/products/sofa.jpg",
//   },
//   {
//     id: "oak-coffee-table",
//     name: "Oak Coffee Table",
//     collection: "Museum Collection",
//     category: "Tables",
//     image: "/products/coffee-table.jpg",
//   },
//   {
//     id: "marble-side-table",
//     name: "Marble Side Table",
//     collection: "Museum Collection",
//     category: "Tables",
//     image: "/products/side-table.jpg",
//   },
// ];

// // filter chips – you can adjust / extend these
// const FILTERS = [
//   { id: "all", label: "All Products" },
//   { id: "Sofas", label: "Sofas" },
//   { id: "Seating", label: "Seating" },
//   { id: "Storage", label: "Storage" },
//   { id: "Tables", label: "Tables" },
// ];

// export default function ProductsPage() {
//   const [activeFilter, setActiveFilter] = useState("all");

//   const filteredProducts = useMemo(() => {
//     if (activeFilter === "all") return PRODUCTS;
//     return PRODUCTS.filter((p) => p.category === activeFilter);
//   }, [activeFilter]);

//   return (
//     <main className="min-h-screen bg-[#f2efeb] text-slate-900">
//       {/* Hero section with background image */}
//       <section
//         className="relative flex min-h-[260px] items-end justify-center overflow-hidden pb-16 pt-24 sm:pt-28 md:min-h-[360px]"
//         style={{
//           backgroundImage: "url('/hero-bg.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* Soft vignette overlay for luxury depth */}
//         <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/5 to-black/40" />

//         <div className="relative z-10 px-4 text-center sm:px-6 lg:px-10">
//           <p className="mb-3 text-sm font-semibold tracking-[0.28em] uppercase text-slate-300">
//             Arqené Collection
//           </p>
//           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-black">
//             Our Products
//           </h1>
//         </div>
//       </section>

//       {/* White rounded content capsule overlapping hero */}
//       <section className="-mt-10 rounded-lg bg-white/98 pb-24 pt-10 shadow-[0_-12px_40px_rgba(15,23,42,0.14)]">
//         <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
//           {/* Filters row */}
//           <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between mt-10 rounded-lg">
//             <div>
//               <h2 className="text-xl font-semibold tracking-[0.22em] uppercase text-slate-500">
//                 Product Catalog
//               </h2>
//               <p className="mt-1 text-sm text-slate-500">
//                 Explore curated pieces from our Museum Collection.
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-2">
//               {FILTERS.map((filter) => {
//                 const isActive = activeFilter === filter.id;
//                 return (
//                   <button
//                     key={filter.id}
//                     type="button"
//                     onClick={() => setActiveFilter(filter.id)}
//                     className={`rounded-full border px-4 py-1.5 text-sm font-semibold tracking-[0.16em] uppercase transition-all ${
//                       isActive
//                         ? "border-slate-900 bg-slate-900 text-white"
//                         : "border-slate-300 bg-white text-slate-600 hover:border-slate-900 hover:text-slate-900"
//                     }`}
//                   >
//                     {filter.label}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Product grid */}
//           <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-3">
//             {filteredProducts.map((product) => (
//               <Link
//                 key={product.id}
//                 href={`/products/${product.id}`}
//                 className="group block"
//               >
//                 <article className="flex h-full flex-col rounded-3xl bg-[#f7f5f2] pb-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1.5">
//                   {/* Image area */}
//                   <div className="relative overflow-hidden rounded-3xl rounded-b-none bg-[#f3efe9]">
//                     <div className="aspect-[4/3] w-full">
//                       <img
//                         src={product.image}
//                         alt={product.name}
//                         className="h-full w-full object-contain px-6 pt-6 transition-transform duration-500 group-hover:scale-[1.08]"
//                       />
//                     </div>
//                     {/* Grey overlay on hover */}
//                     <div className="pointer-events-none absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
//                   </div>

//                   {/* Text + arrow */}
//                   <div className="flex flex-1 flex-col justify-between px-6 pt-4">
//                     <div className="space-y-1.5">
//                       <p className="text-[11px] tracking-[0.22em] uppercase text-slate-500">
//                         {product.collection}
//                       </p>
//                       <p className="text-lg italic text-slate-800">
//                         {product.name}
//                       </p>
//                     </div>

//                     <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
//                       <span className="tracking-[0.18em] uppercase">
//                         View details
//                       </span>
//                       {/* Arrow icon – turns red on hover */}
//                       <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition-all duration-300 group-hover:border-[var(--arq-orange-red)] group-hover:text-[var(--arq-orange-red)]">
//                         <svg
//                           viewBox="0 0 24 24"
//                           className="h-4 w-4"
//                           aria-hidden="true"
//                         >
//                           <path
//                             d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
//                             fill="currentColor"
//                           />
//                         </svg>
//                       </span>
//                     </div>
//                   </div>
//                 </article>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// src/app/products/page.jsx
"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Lenisscroll from "@/components/Lenisscroll";
import CustomCursor from "@/components/CustomCursor";

const PRODUCTS = [
  {
    id: "artevo-console",
    name: "Artevo Console",
    collection: "Museum Collection",
    category: "Storage",
    image: "/products/evette.jpg",
  },
  {
    id: "artevo-wall-unit",
    name: "Artevo Wall Unit",
    collection: "Museum Collection",
    category: "Storage",
    image: "/products/wall-unit.jpg",
  },
  {
    id: "brune-armchair",
    name: "Brune Armchair",
    collection: "Museum Collection",
    category: "Seating",
    image: "/products/armchair.jpg",
  },
  {
    id: "linea-sofa",
    name: "Linea Sofa",
    collection: "Museum Collection",
    category: "Sofas",
    image: "/products/sofa.jpg",
  },
  {
    id: "oak-coffee-table",
    name: "Oak Coffee Table",
    collection: "Museum Collection",
    category: "Tables",
    image: "/products/coffee-table.jpg",
  },
  {
    id: "marble-side-table",
    name: "Marble Side Table",
    collection: "Museum Collection",
    category: "Tables",
    image: "/products/side-table.jpg",
  },
];

const FILTERS = [
  { id: "all", label: "All Products" },
  { id: "Sofas", label: "Sofas" },
  { id: "Seating", label: "Seating" },
  { id: "Storage", label: "Storage" },
  { id: "Tables", label: "Tables" },
];

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProducts = useMemo(() => {
    if (activeFilter === "all") return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
  <Lenisscroll>

    <main className="min-h-screen bg-[#f2efeb] text-slate-900">
      {/* Hero section with background image */}
      <CustomCursor/>
      <section
        className="relative z-0 flex min-h-[360px] items-end justify-center overflow-hidden pb-24 pt-28 md:min-h-[420px]"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Soft vignette overlay for luxury depth */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/45 via-white/5 to-black/40" />

        <div className="relative z-10 px-4 text-center sm:px-6 lg:px-10">
          <p className="mb-3 text-sm font-semibold tracking-[0.28em] uppercase text-slate-300">
            Arqené Collection
          </p>
          <h1 className="text-3xl font-extrabold leading-tight text-black sm:text-4xl lg:text-5xl">
            Our Products
          </h1>
        </div>
      </section>

      {/* White rounded content capsule – sits on top of hero edge */}
      <section className="relative z-10 -mt-14 mb-20 rounded-t-[40px] rounded-b-[32px] bg-white/98 pb-24 pt-12 shadow-[0_-18px_60px_rgba(15,23,42,0.20)]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
          {/* Filters row */}
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-[0.22em] uppercase text-slate-500">
                Product Catalog
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Explore curated pieces from our Museum Collection.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {FILTERS.map((filter) => {
                const isActive = activeFilter === filter.id;
                return (
                  <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`rounded-full border px-4 py-1.5 text-sm font-semibold tracking-[0.16em] uppercase transition-all ${
                    isActive
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-300 bg-white text-slate-600 hover:border-slate-900 hover:text-slate-900"
                  }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-3">
            {filteredProducts.map((product) => (
              <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group block"
              >
                <article className="flex h-full flex-col rounded-3xl bg-[#f7f5f2] pb-6 shadow-[0_18px_40px_rgba(15,23,42,0.10)] transition-transform duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-2">
                  {/* Image area – larger image, wow zoom on hover */}
                  <div className="relative overflow-hidden rounded-3xl rounded-b-none bg-[#f3efe9]">
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="why-row-img h-full w-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.08]"
                        />
                    </div>
                    {/* Grey overlay on hover */}
                    <div className="pointer-events-none absolute inset-0 bg-black/12 opacity-0 transition-opacity duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:opacity-100" />
                  </div>

                  {/* Text + arrow with scroll‑in style */}
                  <div className="flex flex-1 flex-col justify-between px-6 pt-4 pb-1">
                    <div className="space-y-1.5">
                      <p className="why-text-in text-[11px] translate-y-2 opacity-80 tracking-[0.22em] uppercase text-slate-500 transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0 group-hover:opacity-100">
                        {product.collection}
                      </p>
                      <p className="why-text-in text-lg translate-y-2 opacity-90 italic text-slate-800 transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0 group-hover:opacity-100">
                        {product.name}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                      <span className="why-text-in translate-y-2 opacity-80 tracking-[0.18em] uppercase transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0 group-hover:opacity-100">
                        View details
                      </span>
                      {/* Arrow icon – turns red on hover */}
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-0.5 group-hover:border-[var(--arq-orange-red)] group-hover:text-[var(--arq-orange-red)]">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          aria-hidden="true"
                          >
                          <path
                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                            fill="currentColor"
                            />
                        </svg>
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
    </Lenisscroll>
  );
}
