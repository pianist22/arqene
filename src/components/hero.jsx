"use client"

export default function Hero() {
  return (
    // <section className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[90vh] overflow-hidden">
    //   {/* Background image */}
    //   <img
    //     src="/hero-bg.jpg"
    //     alt="Hero background"
    //     className="absolute inset-0 w-full h-full object-cover"
    //   />
<section className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[92vh] overflow-hidden">
      <img
        src="/hero-bg.jpg"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />
    
 
    
      {/* For video background, swap img for video and adjust attributes: */}
      {/* 
      <video
        src="/your-hero-video.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
      */}
     </section>
  )
}
