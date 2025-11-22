// src/app/products/page.jsx
"use client";

const PRODUCTS = [
  {
    id: "01",
    name: "Artevo Console",
    collection: "Museum Collection",
    image: "/products/console.jpg",
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

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#f2efeb] text-slate-900">
      {/* top spacing and title */}
      <section className="py-24 px-4 sm:px-6 lg:px-10 max-w-6xl mx-auto">
        <h1 className="mb-12 text-center text-sm tracking-[0.25em] uppercase text-slate-500">
          Our Products
        </h1>

        {/* vertical layout: same card style, but arranged in rows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="flex flex-col items-center">
              <div className="w-full bg-[#f5f1ec] aspect-[4/3] flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-[70%] max-w-[80%] object-contain"
                />
              </div>

              <div className="mt-6 text-center space-y-1">
                <p className="text-[11px] tracking-[0.2em] uppercase text-slate-500">
                  {product.collection}
                </p>
                <p className="text-lg italic text-slate-700">
                  {product.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
