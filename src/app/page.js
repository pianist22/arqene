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
import About from "@/components/Our-Process";  
import Products from "@/components/ArqeneProducts";
import CustomCursor from "@/components/CustomCursor";
import SectionArqene from "@/components/SectionArqene";
import SectionArqeneWhy from "@/components/SectionArqeneWhy";

export default function Home() {
  return (
    <Lenisscroll>
    <main>
      <CustomCursor />
      <Hero />
      {/* You can add more content below the hero if needed */}
      <SectionArqene />
       <About />
       <Products />
       <SectionArqeneWhy />
    </main>
    </Lenisscroll>
  );
}
