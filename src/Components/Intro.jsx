import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React from "react";

const Intro = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".introheading",
      {
        opacity: 0,
        y: 100,
        scale: 0.9,
        filter: "blur(20px)",
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".intro",
          start: "top 80%", // triggers when section enters view
        },
      }
    );
  });

  return (
    <>
      {/* Intro Section */}
      <div 
      
     className="intro flex flex-col items-center justify-center min-h-screen w-full bg-black text-white px-4">
        
        <h1 className="introheading text-4xl sm:text-6xl md:text-8xl lg:text-9xl tracking-wide text-center">
          Hello
        </h1>

      </div>

      {/* Scroll Indicator */}
      <div className="fixed bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 text-white animate-bounce border border-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm backdrop-blur-sm bg-white/5">
        ↓ Keep Scrolling
      </div>
    </>
  );
};

export default Intro;