// import Image from "next/image";

// export default function Home() {
//   return (
//     <div>
//       Hello
//     </div>
//   );
// }

"use client";
import Lenisscroll from "@/components/Lenisscroll";
import Hero from "@/components/hero";
import About from "@/components/why-us";  
import Products from "@/components/ArqeneProducts";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <Lenisscroll>
    <main>
      <CustomCursor />
      <Hero />
      {/* You can add more content below the hero if needed */}
       <About />
       <Products />
    </main>
    </Lenisscroll>
  );
}
