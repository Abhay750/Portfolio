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
        y: 80,
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
      }
    );
  });

  return (
    <>
      <div className="intro flex flex-col items-center justify-center h-screen w-screen bg-black text-white">
        <h1 className="introheading text-6xl md:text-9xl tracking-wide">
          Hello
        </h1>
      </div>

      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 text-white animate-bounce border border-white px-4 py-2 rounded-full">
        ↓ Scroll
      </div>
    </>
  );
};

export default Intro;