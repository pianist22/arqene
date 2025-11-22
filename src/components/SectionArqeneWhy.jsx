"use client";

import { useEffect, useRef } from "react";
import Button from "@/components/navbar/AnimatedButton";

const WHY_ITEMS = [
  {
    id: 1,
    title: "Design‑First Thinking",
    text: "Every space starts with a clear story, then we layer materials, light and form for a cohesive experience.",
    image: "/why-1.jpg",
  },
  {
    id: 2,
    title: "End‑to‑End Delivery",
    text: "From concept sketches to site coordination, our team manages every detail so execution feels effortless.",
    image: "/why-2.jpg",
  },
  {
    id: 3,
    title: "Transparent Collaboration",
    text: "We work closely with you at every step, sharing options, budgets and timelines with total clarity.",
    image: "/why-3.jpg",
  },
];

export default function SectionArqeneWhy() {
  const sectionRef = useRef(null);


  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const texts = section.querySelectorAll("[data-why-animate]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("why-jiggle-in");
          }
        });
      },
      { threshold: 0.35 }
    );

    texts.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    // OUTER: rounded white strip
    <section
      ref={sectionRef}
      className="bg-white pt-10 sm:pt-12 pb-20 sm:pb-24 overflow-hidden"
    >
      {/* INNER: just layout, no rounding */}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-10">
        <p
          data-why-animate
          className="mb-10 text-center text-2xl font-extrabold text-black opacity-0 translate-y-6"
        >
          The Arqene Advantage
        </p>

        <h2
          data-why-animate
          className="mb-10 text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black opacity-0 translate-y-6"
        >
          WHY CHOOSE US
        </h2>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {WHY_ITEMS.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col bg-[#f5f3ef] rounded-3xl overflow-hidden shadow-sm transition-transform duration-300 ease-out hover:-translate-y-2"
              onMouseEnter={() =>
                window.dispatchEvent(new Event("cursor-small-enter"))
              }
              onMouseLeave={() =>
                window.dispatchEvent(new Event("cursor-small-leave"))
              }
              onTouchStart={() =>
                window.dispatchEvent(new Event("cursor-small-enter"))
              }
              onTouchEnd={() =>
                window.dispatchEvent(new Event("cursor-small-leave"))
              }
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="px-6 py-6 flex-1 flex flex-col">
                <h3
                  data-why-animate
                  className="text-lg font-semibold text-black mb-2 opacity-0 translate-y-6"
                >
                  {item.title}
                </h3>
                <p
                  data-why-animate
                  className="text-sm text-slate-700 leading-relaxed opacity-0 translate-y-6"
                >
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div> */}
        <div className="grid w-full max-w-[98rem] mx-auto grid-cols-1 md:grid-cols-3 gap-8 md:gap-2">
  {WHY_ITEMS.map((item) => (
    <article
      key={item.id}
      className="group flex flex-col bg-white overflow-hidden shadow-sm transition-transform duration-300 ease-out hover:-translate-y-2"
      onMouseEnter={() =>
        window.dispatchEvent(new Event("cursor-small-enter"))
      }
      onMouseLeave={() =>
        window.dispatchEvent(new Event("cursor-small-leave"))
      }
      onTouchStart={() =>
        window.dispatchEvent(new Event("cursor-small-enter"))
      }
      onTouchEnd={() =>
        window.dispatchEvent(new Event("cursor-small-leave"))
      }
    >
      {/* taller image area */}
      <div className="relative h-[260px] sm:h-[280px] md:h-[320px] lg:h-[520px] max-w-[1200px] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* bigger text area */}
      <div className="px-8 py-8 flex-1 flex flex-col">
        <h3
          data-why-animate
          className="text-lg font-semibold text-black mb-3 opacity-0 translate-y-6"
        >
          {item.title}
        </h3>
        <p
          data-why-animate
          className="text-sm text-slate-700 leading-relaxed opacity-0 translate-y-6"
        >
          {item.text}
        </p>
      </div>
    </article>
  ))}
</div>


        <div className="mt-10 flex justify-center">
          <Button label="Join Community" variant="dark" />
        </div>
      </div>

      <style jsx>{`
        .why-jiggle-in {
          opacity: 1;
          transform: translateY(0);
          transition:
            opacity 550ms cubic-bezier(0.22, 0.61, 0.36, 1),
            transform 550ms cubic-bezier(0.22, 0.61, 0.36, 1);
        }
      `}</style>
    </section>
  );
}
