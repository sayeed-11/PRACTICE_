// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";
// import React from "react";

// const data = [
//   "https://i.pinimg.com/1200x/2e/ed/fc/2eedfc59f23ce70bb6ffb8b381d51004.jpg",
//   "https://i.pinimg.com/1200x/e1/73/3c/e1733c0633da2593564701245f419883.jpg",
//   "https://i.pinimg.com/1200x/f3/67/f8/f367f8586c8ed30d69102fff95d64d3f.jpg",
//   "https://i.pinimg.com/1200x/a5/6f/7b/a56f7b8d83a29f4e46a9ee31e9fa3249.jpg",
//   "https://i.pinimg.com/1200x/49/39/1f/49391f774e00dab8b2ae45c2916532fb.jpg",
//   "https://i.pinimg.com/1200x/44/85/a6/4485a6a53d2061b17b0bae31977af021.jpg",
//   "https://i.pinimg.com/1200x/26/d4/0a/26d40a03d1038fb596dcfae191b2fb17.jpg",
//   "https://i.pinimg.com/1200x/0f/ad/dd/0faddd757b3182d8770d814066f0d34b.jpg",
//   "https://i.pinimg.com/1200x/5d/68/ec/5d68ec5b2acef09c15d3b83985034a72.jpg",
// ];

// gsap.registerPlugin(ScrollTrigger, useGSAP);
// const Marquee = () => {
//   useGSAP(() => {
//     gsap.to("#marquee", {
//         left : "-110%",
//         duration : 5,
//         repeat : -1,
//         ease : 'none'
//     });
//   }, []);

//   return (
//     <div className="w-full min-h-screen flex justify-center items-center">
//       <div className="overflow-hidden relative w-full h-[700px] flex justify-center items-center">
//         <div id="marquee" className="flex gap-5 absolute w-full left-[0%]">
//           {data.map((url, index) => {
//             return (
//               <div
//                 key={index}
//                 className="min-w-[25%] p-1 bg-white aspect-square"
//               >
//                 <img className="w-full h-full object-cover" src={url} alt="" />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Marquee;



import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const data = [
  "https://i.pinimg.com/1200x/2e/ed/fc/2eedfc59f23ce70bb6ffb8b381d51004.jpg",
  "https://i.pinimg.com/1200x/e1/73/3c/e1733c0633da2593564701245f419883.jpg",
  "https://i.pinimg.com/1200x/f3/67/f8/f367f8586c8ed30d69102fff95d64d3f.jpg",
  "https://i.pinimg.com/1200x/a5/6f/7b/a56f7b8d83a29f4e46a9ee31e9fa3249.jpg",
  "https://i.pinimg.com/1200x/49/39/1f/49391f774e00dab8b2ae45c2916532fb.jpg",
  "https://i.pinimg.com/1200x/44/85/a6/4485a6a53d2061b17b0bae31977af021.jpg",
  "https://i.pinimg.com/1200x/26/d4/0a/26d40a03d1038fb596dcfae191b2fb17.jpg",
  "https://i.pinimg.com/1200x/0f/ad/dd/0faddd757b3182d8770d814066f0d34b.jpg",
  "https://i.pinimg.com/1200x/5d/68/ec/5d68ec5b2acef09c15d3b83985034a72.jpg",
];

export default function Marquee() {
  const trackRef = useRef(null);
  const firstSetRef = useRef(null);

  useGSAP(() => {
    const track = trackRef.current;
    const first = firstSetRef.current;

    const SPEED = 200; // px per second (tweak for faster/slower)
    let distance = first.offsetWidth; // width of one full set
    let tween = gsap.fromTo(
      track,
      { x: 0 },
      {
        x: -distance,
        // duration: 5,
        duration: distance / SPEED,
        ease: "none",
        repeat: -1,
      }
    );

    // Recalculate on resize so it stays perfect
    const ro = new ResizeObserver(() => {
      const newDistance = first.offsetWidth;
      if (newDistance && Math.abs(newDistance - distance) > 1) {
        distance = newDistance;
        tween.kill();
        tween = gsap.fromTo(
          track,
          { x: 0 },
          {
            x: -distance,
            duration: distance / SPEED,
            ease: "none",
            repeat: -1,
          }
        );
      }
    });
    ro.observe(first);

    return () => {
      ro.disconnect();
      tween.kill();
    };
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-black">
      <div className="w-full overflow-hidden">
        {/* Moving track (2 copies for seamless loop) */}
        <div ref={trackRef} className="flex gap-5 will-change-transform">
          {/* First copy */}
          <div ref={firstSetRef} className="flex gap-5">
            {/* {data.map((url, i) => (
              <Card key={`a-${i}`} url={url} />
            ))} */}
            <h1 className="text-white text-[10rem] font-bold">SAYEED</h1>
            <h1 className="text-white text-[10rem] font-bold">SAYEED</h1>
            <h1 className="text-white text-[10rem] font-bold">SAYEED</h1>
            <h1 className="text-white text-[10rem] font-bold">SAYEED</h1>
            <h1 className="text-white text-[10rem] font-bold">SAYEED</h1>
          </div>
          {/* Second copy (identical) */}
          <div className="flex gap-5" aria-hidden="true">
            {/* {data.map((url, i) => (
              <Card key={`b-${i}`} url={url} />
            ))} */}
            <h1 className="text-white text-[10rem] font-bold">SAYEED</h1>
            <h1 className="text-white text-[10rem] font-bold">SAYEED</h1>
            <h1 className="text-white text-[10rem] font-bold">SAYEED</h1>
            <h1 className="text-white text-[10rem] font-bold">SAYEED</h1>
            <h1 className="text-white text-[10rem] font-bold">SAYEED</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ url }) {
  return (
    <div className="w-[450px] aspect-square shrink-0 rounded-2xl overflow-hidden bg-white/5">
      <img src={url} alt="" className="w-full h-full object-cover" />
    </div>
  );
}
