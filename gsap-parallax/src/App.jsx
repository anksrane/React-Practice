import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './App.css'

function App() {
  const mainRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ✅ Parallax background animation
      gsap.to(".parallax-bg", {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".parallax-bg",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, mainRef);

    return () => ctx.revert(); // cleanup
  }, []); 

  return (
    <main ref={mainRef}>
      <section className="section hero">
        <h1>Hero Section</h1>
      </section>

      {/* 🔥 PARALLAX SECTION */}
      <section className="section parallax-bg">
        <h1>Parallax Background</h1>
      </section>

      <section className="section content">
        <h1>Content Section</h1>
      </section>
    </main>
  )
}

export default App
