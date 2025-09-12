import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function SnapScroll() {
  useEffect(() => {
    const sections = gsap.utils.toArray("section");

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 30%", // when section top hits 30% of viewport
        onEnter: () => {
          gsap.to(window, {
            scrollTo: section, // scroll that section to top
            duration: 0.6,
            ease: "power2.out",
          });
        },
        onEnterBack: () => {
          gsap.to(window, {
            scrollTo: section, // also snap when scrolling upward
            duration: 0.6,
            ease: "power2.out",
          });
        },
      });
    });
  }, []);

  return (
    <div className="min-h-screen w-full">
      <section className="h-screen bg-red-400 flex items-center justify-center text-white text-4xl">
        Section 1
      </section>
      <section className="h-screen bg-blue-400 flex items-center justify-center text-white text-4xl">
        Section 2
      </section>
      <section className="h-screen bg-green-400 flex items-center justify-center text-white text-4xl">
        Section 3
      </section>
      <section className="h-screen bg-purple-400 flex items-center justify-center text-white text-4xl">
        Section 4
      </section>
    </div>
  );
}
