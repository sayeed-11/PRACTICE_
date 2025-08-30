// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import React from "react";

// gsap.registerPlugin(ScrollTrigger, useGSAP);

// const ScrollTriggerView = () => {
//   useGSAP(() => {
//     gsap.from(".con-1 .box-1", {
//       opacity: 0,
//       scale: 0,
//       duration: 1,
//       delay: 0.5,
//     });

//     gsap.from(".con-2 .box-2", {
//       opacity: 0,
//       scale: 0,
//       duration: 1,
//       scrollTrigger: {
//         trigger: ".con-2 .box-2",
//         markers: true,
//         start: "top 80%",
//         end: "top 30%",
//         toggleActions: "play none none reverse",
//         scrub: true,
//         scroller: "body",
//       },
//     });

//     gsap.from(".con-3 .box-3", {
//       opacity: 0,
//       scale: 0,
//       duration: 1,
//       scrollTrigger: {
//         trigger: ".con-3 .box-3",
//         markers: true,
//         start: "top 80%",
//         end: "top 30%",
//         toggleActions: "play none none reverse",
//         scrub: true,
//         scroller: "body",
//       },
//     });

//     gsap.from(".con-4 .box-4", {
//       opacity: 0,
//       scale: 0,
//       duration: 1,
//       scrollTrigger: {
//         trigger: ".con-4 .box-4",
//         markers: true,
//         start: "top 80%",
//         end: "top 30%",
//         toggleActions: "play none none reverse",
//         scrub: true,
//         scroller: "body",
//       },
//     });


//     gsap.to(".scroll-con .scroll-box", {
//       left: -100,
//       duration: 1,
//       scrollTrigger: {
//         trigger: ".scroll-con .scroll-box",
//         markers: true,
//         start: "top 80%",
//         end: "top 30%",
//         toggleActions: "play none none reverse",
//         scrub: true,
//         scroller: "body",
//       },
//     });
//   }, []);

//   return (
//     <div className="w-full min-h-screen">
//       <div className="con-1 w-full h-screen flex justify-center items-center">
//         <div className="box-1 w-[30%] aspect-square bg-white/25"></div>
//       </div>

//       <div className="con-2 w-full h-screen flex justify-center items-center">
//         <div className="box-2 w-[30%] aspect-square bg-white/50"></div>
//       </div>

//       <div className="con-3 w-full h-screen flex justify-center items-center">
//         <div className="box-3 w-[30%] aspect-square bg-white/75"></div>
//       </div>

//       <div className="con-4 w-full h-screen flex justify-center items-center">
//         <div className="box-4 w-[30%] aspect-square bg-white/100"></div>
//       </div>

//       <div className="scroll-con min-h-screen w-full flex justify-center items-center relative">
//         <div className="scroll-box w-full flex gap-10 absolute overflow-x-hidden right-[-100%]">
//           {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
//             return <div key={item} className="min-w-[20%] aspect-[1/1.5] bg-white"></div>;
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScrollTriggerView;





import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ScrollTriggerView = () => {
  useGSAP(() => {
    gsap.from(".con-1 .box-1", {
      opacity: 0,
      scale: 0,
      duration: 1,
      delay: 0.5,
    });

    gsap.from(".con-2 .box-2", {
      opacity: 0,
      scale: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".con-2 .box-2",
        markers: true,
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none reverse",
        scrub: true,
      },
    });

    gsap.from(".con-3 .box-3", {
      opacity: 0,
      scale: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".con-3 .box-3",
        markers: true,
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none reverse",
        scrub: true,
      },
    });

    gsap.from(".con-4 .box-4", {
      opacity: 0,
      scale: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".con-4 .box-4",
        markers: true,
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none reverse",
        scrub: true,
      },
    });

    // FIXED SCROLLING SECTION
    gsap.to(".scroll-con .scroll-box", {
      left: "-100%", // move horizontally instead of left/right
      duration: 5,
      scrollTrigger: {
        trigger: ".scroll-con",
        markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub: true,
        toggleActions: "play none none reverse",
        pin: true
        // pin: true, // optional: keeps section fixed while scrolling
      },
    });
  }, []);

  return (
    <div className="w-full min-h-screen">
      <div className="con-1 w-full h-screen flex justify-center items-center">
        <div className="box-1 w-[30%] aspect-square bg-white/25"></div>
      </div>

      <div className="con-2 w-full h-screen flex justify-center items-center">
        <div className="box-2 w-[30%] aspect-square bg-white/50"></div>
      </div>

      <div className="con-3 w-full h-screen flex justify-center items-center">
        <div className="box-3 w-[30%] aspect-square bg-white/75"></div>
      </div>

      <div className="con-4 w-full h-screen flex justify-center items-center">
        <div className="box-4 w-[30%] aspect-square bg-white/100"></div>
      </div>

      {/* Scroll Animation Section */}
      <div className="scroll-con min-h-screen w-full flex justify-center items-center relative overflow-hidden">
        <div className="scroll-box w-full flex gap-10 absolute left-[0%]">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
            return (
              <div
                key={item}
                className="min-w-[20%] aspect-[1/1.5] bg-white"
              ></div>
            );
          })}
        </div>
      </div>

      <div className="min-h-screen w-full"></div>
    </div>
  );
};

export default ScrollTriggerView;
