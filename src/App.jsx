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

export default function App() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".introcontener",
        start: "top top",
        end: "+=2000",
        scrub: 1,
        pin: true,
        markers: false,
      },
    });

    tl.to(".intro1", {
      opacity: 0,
      y: -100,
    });
    tl.fromTo(
      ".intro2",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0 }      
    );
  });

  return (
    <>
    <div className="introcontener h-screen">
      <div className="intro1">
        <Intro />
      </div>

      <div className="intro2 absolute top-0 left-0 w-full">
        <Intro2 />
      </div>
    </div>
    <main className="main">
      <Home />
      <About />
      <Skill />
      <Projects />
      <Footer />
    </main>
    </>
  );
}