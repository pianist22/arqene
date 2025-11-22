// src/app/products/[id]/page.jsx
"use client";

import Button from "@/components/navbar/AnimatedButton";
import Link from "next/link";

const MAIN_IMAGE = "/Products/wall-unit.jpg";

// optional related / alternate angle images
const RELATED_IMAGES = [
  "/Products/sofa.jpg",
  "/Products/side-table.jpg",
  "/Products/armchair.jpg",
];

export default function ProductDetailPage() {
  return (
    <main className="min-h-screen bg-[#f2efeb] text-slate-900">
      {/* Breadcrumb */}
      <section className="border-b border-slate-200/70 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
          <nav className="flex flex-wrap items-center gap-2 text-sm sm:text-md text-slate-500">
            <Link
              href="/"
              className="transition-colors duration-200 hover:text-slate-900"
            >
              Home
            </Link>
            <span>/</span>
            <Link
              href="/products"
              className="transition-colors duration-200 hover:text-slate-900"
            >
              Collection
            </Link>
            <span>/</span>
            <span className="font-semibold text-slate-900">
              Salon Aurélien Suite
            </span>
          </nav>

          <span className="hidden text-xs tracking-[0.18em] uppercase text-slate-400 sm:inline">
            Arqené Interiors
          </span>
        </div>
      </section>

      {/* Main content */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
        {/* wider right column on large screens */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_minmax(0,_1.45fr)] lg:gap-14">
          {/* Left: hero image + related views */}
          <div className="space-y-4">
            {/* Main hero */}
            <div className="group relative overflow-hidden rounded-3xl bg-[#f3efe9] shadow-[0_24px_80px_rgba(15,23,42,0.18)]">
              <div className="aspect-[4/3] w-full">
                <img
                  src={MAIN_IMAGE}
                  alt="Salon Aurélien Suite"
                  className="h-full w-full object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04]"
                />
              </div>

              {/* Soft vignette */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Small label */}
              <div className="absolute left-5 top-5 rounded-full bg-black/55 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
                Signature Salon
              </div>
            </div>

            {/* Related / additional views – fills empty left column */}
            {RELATED_IMAGES?.length > 0 && (
              <div className="grid gap-4 sm:grid-cols-2">
                {RELATED_IMAGES.map((img, index) => (
                  <div
                    key={index}
                    className="group overflow-hidden rounded-3xl bg-[#f3efe9] shadow-[0_16px_40px_rgba(15,23,42,0.12)]"
                  >
                    <div className="aspect-[4/3] w-full">
                      <img
                        src={img}
                        alt={`Additional view ${index + 1}`}
                        className="h-full w-full object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.05]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: details capsule */}
          <div className="rounded-3xl bg-white/90 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.16)] lg:p-8">
            <div className="space-y-8 lg:space-y-9">
              {/* Title + meta */}
              <div>
                <p className="mb-2 text-[12px] tracking-[0.28em] uppercase text-slate-500">
                  Arqené Salon Collection
                </p>
                <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.6rem]">
                  Salon Aurélien Suite
                </h1>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
                  A composed living ensemble that pairs architectural paneling
                  with tailored upholstery and soft, luminous neutrals for
                  quietly dramatic gatherings.
                </p>
              </div>

              {/* Mood + highlights */}
              <div className="grid gap-6 rounded-3xl bg-white/80 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)] sm:grid-cols-2 sm:gap-4">
                <div className="space-y-3">
                  <h2 className="text-[0.8rem] font-semibold tracking-[0.18em] uppercase text-slate-500">
                    Atmosphere
                  </h2>
                  <p className="text-[0.98rem] leading-relaxed text-slate-700">
                    Ivory textiles, brushed brass, and softened daylight shape a
                    salon that feels calm, luminous, and intimately formal.
                  </p>
                  <p className="text-xs text-slate-500">
                    Ideal for private residences, boutique hotels, and lounges.
                  </p>
                </div>
                <div className="space-y-3">
                  <h2 className="text-[0.8rem] font-semibold tracking-[0.18em] uppercase text-slate-500">
                    Composition
                  </h2>
                  <ul className="space-y-1.5 text-[0.98rem] text-slate-700">
                    <li>• Two salon sofas with tailored skirts</li>
                    <li>• Pair of lounge armchairs</li>
                    <li>• Marble‑top centre table with brass frame</li>
                    <li>• Twin side tables, table lamps & floral accents</li>
                  </ul>
                </div>
              </div>

              {/* Design story – concise */}
              <div className="space-y-3">
                <h2 className="text-[0.8rem] font-semibold tracking-[0.18em] uppercase text-slate-500">
                  Design Story
                </h2>
                <p className="text-[0.98rem] leading-relaxed text-slate-700">
                  Pieces are scaled to anchor the room without visual weight:
                  generous cushions, millwork‑inspired arms, and recessed legs
                  that let every volume float against a backdrop of warm whites
                  and putty tones.
                </p>
              </div>

              {/* Specs & finishes */}
              <div className="grid gap-5 rounded-3xl bg-[#f7f5f2] p-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="text-[0.78rem] font-semibold tracking-[0.2em] uppercase text-slate-500">
                    Dimensions
                  </h3>
                  <div className="space-y-1 text-[0.98rem] text-slate-700">
                    <p>Sofa: 230 × 95 × 80 cm (W × D × H)</p>
                    <p>Armchair: 90 × 90 × 82 cm</p>
                    <p>Coffee Table: 150 × 80 × 38 cm</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-[0.78rem] font-semibold tracking-[0.2em] uppercase text-slate-500">
                    Finishes
                  </h3>
                  <div className="space-y-1 text-[0.98rem] text-slate-700">
                    <p>Solid oak frame with hand‑rubbed oil finish</p>
                    <p>Brushed brass hardware & detailing</p>
                    <p>Bouclé, linen‑blend or velvet upholstery options</p>
                  </div>
                </div>
              </div>

              {/* Palette / tags */}
              <div className="space-y-3">
                <h3 className="text-[0.78rem] font-semibold tracking-[0.2em] uppercase text-slate-500">
                  Suggested Palette
                </h3>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[0.8rem] font-medium text-slate-700 shadow-sm">
                    <span className="h-3 w-3 rounded-full bg-[#f3eee6]" />
                    Chalk Ivory
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[0.8rem] font-medium text-slate-700 shadow-sm">
                    <span className="h-3 w-3 rounded-full bg-[#c2a57a]" />
                    Brushed Champagne
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[0.8rem] font-medium text-slate-700 shadow-sm">
                    <span className="h-3 w-3 rounded-full bg-[#8d8b88]" />
                    Smoke Taupe
                  </span>
                </div>
              </div>

              {/* Contact CTA – no price */}
              <div className="space-y-4 pt-4">
                <p className="text-[0.98rem] text-slate-600">
                  Share your project, floor plan, and timelines; the Arqené
                  studio will shape a bespoke Salon Aurélien configuration for
                  your space.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link href="/contact">
                    <Button label="Contact Us" variant="dark" />
                  </Link>
                  <Link href="/products">
                    <Button label="Back to Catalog" variant="dark" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lower section: project notes – slightly trimmed */}
        <div className="mt-14 rounded-3xl bg-white/80 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.12)] sm:p-8">
          <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-slate-500">
            Project Notes
          </h2>
          <div className="mt-4 grid gap-6 text-[0.98rem] text-slate-700 md:grid-cols-3">
            <div className="space-y-2">
              <p className="font-semibold text-slate-800">Lead Time</p>
              <p>12–16 weeks from sign‑off, including finish approvals.</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-slate-800">Customization</p>
              <p>
                Dimensions and finishes can be fully tailored. COM and bespoke
                carpentry available on request.
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-slate-800">Styling Support</p>
              <p>
                Our studio can complete the story with rugs, tablescapes, and
                art so the salon arrives as one considered gesture.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
