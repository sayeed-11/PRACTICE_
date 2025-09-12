import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SnapExample() {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".container",
      start: "top top",
      end: "+=400%", // total scroll distance
      snap: {
        snapTo: 1 / 4, // 👈 4 sections → snap to 0, 0.25, 0.5, 0.75, 1
        duration: 0.8, // 👈 how fast it snaps
        ease: "power1.inOut" // 👈 snapping ease
      },
      pin: true, // keep container fixed while scrolling
    });
  }, []);

  return (
    <div className="container" style={{ height: "100vh" }}>
      <section style={{ height: "100vh", background: "#ff595e" }}>
        <h1>Section 1</h1>
      </section>
      <section style={{ height: "100vh", background: "#ffca3a" }}>
        <h1>Section 2</h1>
      </section>
      <section style={{ height: "100vh", background: "#8ac926" }}>
        <h1>Section 3</h1>
      </section>
      <section style={{ height: "100vh", background: "#1982c4" }}>
        <h1>Section 4</h1>
      </section>
    </div>
  );
}
