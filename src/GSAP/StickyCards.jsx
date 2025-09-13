import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

gsap.registerPlugin(ScrollTrigger);
const StickyCards = () => {
  useGSAP(() => {
    const boxes = gsap.utils.toArray(".box");
    boxes.forEach((box, i) => {
      gsap.to(box, {
        scale: 0.9 + 0.025 * i,
        opacity : 0.9 + 0.025 * i,
        scrollTrigger: {
          trigger: box,
          pin: true,
          start: `top ${30 * i}px`,
          endTrigger: "#end-anim",
          end: "top-=630px",
          scrub: true,
          markers: true,
        },
      });
    });
  }, []);
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <div id="card-container" className="flex flex-col gap-y-[30px] py-[30px]">
        {Array.from({ length: 4 }).map((card, index) => {
          return (
            <div className="w-[1000px] h-[600px] bg-white box rounded-xl text-black p-5 font-AbrilFatface">
              <h1 className="text-[2rem]">Lorem</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, perspiciatis ex aliquid debitis, ipsa aut non ipsam
                fuga magnam iusto ab a exercitationem labore expedita asperiores
                quo reprehenderit doloremque dolorum!
              </p>
            </div>
          );
        })}
      </div>
      <div id="end-anim" className="w-full h-0 bg-white"></div>
      <div className="h-[500vh]"></div>
    </div>
  );
};

export default StickyCards;
