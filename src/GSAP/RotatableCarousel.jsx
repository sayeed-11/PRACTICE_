// import { useGSAP } from "@gsap/react";
// import { Draggable } from "gsap/all";
// import React from "react";

// const RotatableCarousel = () => {
//     useGSAP(() => {
//         Draggable.create("#box", {
//             type : "rotation",
//             bounds : "#main-box"

//         })
//     },[])
//   return (
//     <div id="main-box" className="min-h-screen w-full flex justify-center items-center">
//       <div
//         style={{
//           transformStyle: "preserve-3d",
//           perspective: 800,
//         }}
//         className="w-[200px] aspect-square relative"
//       >
//         <div
//         id="box"
//           style={{
//             transformStyle: "preserve-3d",
//             // perspective : 800
//           }}
//           className="absolute w-full h-full bg-white rotate-x-[85deg]"
//         >
//           <div className="absolute w-full h-full bg-red-500 rotate-x-90 -translate-y-[100px]"></div>
//           <div className="absolute w-full h-full bg-red-400 rotate-x-90 rotate-y-90 translate-x-[100px]"></div>
//           <div className="absolute w-full h-full bg-red-300 rotate-x-90 -rotate-y-90 -translate-x-[100px]"></div>
//           <div className="absolute w-full h-full bg-red-100 rotate-x-90 translate-y-[100px]"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RotatableCarousel;



import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const RotatableCarousel = () => {
  const boxRef = useRef(null);

  useGSAP(() => {
    let rotationX = 0;
    let rotationY = 0;

    Draggable.create(boxRef.current, {
      type: "x,y", // drag in 2D
      onDrag: function () {
        rotationY = this.x;
        rotationX = -this.y;

        gsap.set(boxRef.current, {
          rotationY,
          rotationX,
        });
      },
    });
  }, []);

  return (
    <div
      id="main-box"
      className="min-h-screen w-full flex justify-center items-center bg-gray-900"
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          perspective: 800,
        }}
        className="w-[200px] aspect-square relative"
      >
        <div
          ref={boxRef}
          style={{
            transformStyle: "preserve-3d",
          }}
          className="absolute w-full h-full bg-white"
        >
          {/* Front */}
          <div className="absolute w-full h-full bg-red-500"></div>
          {/* Back */}
          <div className="absolute w-full h-full bg-red-300 rotate-y-180 translate-z-[-200px]"></div>
          {/* Right */}
          <div className="absolute w-full h-full bg-green-500 rotate-y-90 translate-z-[-100px]"></div>
          {/* Left */}
          <div className="absolute w-full h-full bg-blue-500 -rotate-y-90 translate-z-[-100px]"></div>
          {/* Top */}
          <div className="absolute w-full h-full bg-yellow-500 rotate-x-90 translate-z-[-100px]"></div>
          {/* Bottom */}
          <div className="absolute w-full h-full bg-purple-500 -rotate-x-90 translate-z-[-100px]"></div>
        </div>
      </div>
    </div>
  );
};

export default RotatableCarousel;
