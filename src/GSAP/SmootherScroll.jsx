import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const SmoothScrollComponent = () => {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#wrapper",
      content: "#content",
      smooth: 1.2, // scroll smoothing speed
      effects: true, // enables data-speed and data-lag
    });

    return () => smoother.kill();
  }, []);

  return (
    <>
      {/* Include the SmoothScroll logic */}
      <div id="wrapper">
        <div id="content" className="min-h-screen">
          {/* Section 1 */}
          <div className="h-screen bg-red-500 flex items-center justify-center gap-3">
            <div
              className="w-[10%] aspect-square bg-white"
              data-speed="1.1"
            ></div>
            <div
              className="w-[10%] aspect-square bg-white"
              data-speed="1.2"
            ></div>
            <div
              className="w-[10%] aspect-square bg-white"
              data-speed="1"
            ></div>
          </div>
          <div className="h-screen bg-blue-500 flex flex-col items-center justify-start gap-y-10 p-10">
            <div className="w-[50%] h-[10%] bg-white" data-speed="1.3"></div>
            <div className="w-[50%] h-[10%] bg-white" data-speed="1.1"></div>
            <div className="w-[50%] h-[10%] bg-white" data-speed="1"></div>
          </div>

          <div className="h-screen bg-green-500"></div>
          <div className="h-screen bg-yellow-500"></div>
          <div className="h-screen bg-purple-500"></div>
          <div className="h-screen bg-orange-500"></div>
          <div className="h-screen bg-pink-500"></div>
          <div className="h-screen bg-gray-500"></div>
          <div className="h-screen bg-brown-500"></div>
          <div className="h-screen bg-black-500"></div>
        </div>
      </div>
    </>
  );
};

export default SmoothScrollComponent;
