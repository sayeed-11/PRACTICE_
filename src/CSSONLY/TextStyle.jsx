// export default function Cube() {
//   return (
//     <div className="w-full min-h-screen flex justify-center items-center bg-black">
//       {/* Perspective on parent */}
//       <div style={{ perspective: "800px" }}>
//         {/* Cube wrapper */}
//         <div
//           style={{ transformStyle: "preserve-3d" }}
//           className="relative w-[100px] h-[100px] rotate-x-[30deg] rotate-y-[30deg]"
//         >
//           {/* Front */}
//           <div className="absolute w-full h-full bg-green-500 opacity-100 translate-z-[50px]" />
//           {/* Back */}
//           <div className="absolute w-full h-full bg-red-500 opacity-100 -translate-z-[50px] rotate-y-180" />
//           {/* Right */}
//           <div className="absolute w-full h-full bg-blue-500 opacity-100 rotate-y-90 translate-z-[50px]" />
//           {/* Left */}
//           <div className="absolute w-full h-full bg-yellow-500 opacity-100 -rotate-y-90 translate-z-[50px]" />
//           {/* Top */}
//           <div className="absolute w-full h-full bg-purple-500 opacity-100 rotate-x-90 translate-z-[50px]" />
//           {/* Bottom */}
//           <div className="absolute w-full h-full bg-pink-500 opacity-100 -rotate-x-90 translate-z-[50px]" />
//         </div>
//       </div>
//     </div>
//   );
// }



import React from 'react';
import './textStyle.css';

const Cube = () => {
  return (
    <div className="cube-container ">
      <div className="cube">
        <div className="face front text-[10rem] uppercase">Front</div>
        {/* <div className="face back text-[5rem] uppercase">Back</div> */}
        {/* <div className="face right text-[5rem] uppercase">Right</div> */}
        {/* <div className="face left text-[5rem] uppercase">Left</div> */}
        <div className="face top text-[10rem] uppercase">Front</div>
        {/* <div className="face top text-[5rem] uppercase">Top</div> */}
        {/* <div className="face bottom text-[5rem] uppercase">Bottom</div> */}
      </div>
    </div>
  );
};

export default Cube;