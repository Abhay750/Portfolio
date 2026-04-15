import Intro from "./Components/Intro";
import Intro2 from "./Components/Intro2";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skill from "./Pages/Skill";
import Projects from "./Pages/Projects";
import Footer from "./Components/Footer";
import Formfill from "./Pages/Formfill";

export default function App() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".introcontener",
        start: "top top",
        end: "+=1500",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Fade out Intro 1
    tl.to(".intro1", {
      opacity: 0,
      y: -150,
      ease: "power2.out",
      duration: 1,
    });

    // Fade in Intro 2
    tl.fromTo(
      ".intro2",
      { opacity: 0, y: 150 },
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
        duration: 1,
      },
      "-=0.5" // overlap animation for smooth transition
    );
  }, []);

  return (
    <>
      {/* Intro Section */}
      <div className="introcontener relative min-h-screen overflow-hidden">
        
        <div className="intro1 relative z-10">
          <Intro />
        </div>

        <div className="intro2 absolute top-0 left-0 w-full z-20">
          <Intro2 />
        </div>

      </div>

      {/* Main Content */}
      <main className="main">
        <Home />
        <About />
        <Skill />
        <Projects />
        <Formfill />
        <Footer />
      </main>
    </>
  );
}