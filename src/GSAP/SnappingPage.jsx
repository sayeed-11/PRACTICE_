import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SnapExample() {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".container",
      start: "top top",
      end: "bottom bottom",
      snap: {
        snapTo: [0, 0.3, 1], // snap points (0%, 30%, 100%)
        duration: 0.5,       // smooth snap animation
        ease: "power1.inOut" // easing
      }
    });
  }, []);

  return (
    <div className="container h-[300vh] bg-gray-200">
      <section className="h-screen bg-red-400 flex items-center justify-center text-4xl text-white">
        Section 1
      </section>
      <section className="h-screen bg-green-400 flex items-center justify-center text-4xl text-white">
        Section 2
      </section>
      <section className="h-screen bg-blue-400 flex items-center justify-center text-4xl text-white">
        Section 3
      </section>
    </div>
  );
}
