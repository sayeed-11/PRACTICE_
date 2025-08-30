// import React, { useState } from "react";

// const HoverBackground = () => {
//   const [style, setStyle] = useState({});
//   const handleMouseMove = (e) => {
//     const event = e.nativeEvent;
//     console.clear();
//     const x = event.offsetX;
//     const y = event.offsetY;

//     console.log(x, y);

//     setStyle({
//       left: `${x}px`,
//       top: `${y}px`,
//       transform: "translate(-50%, -50%)", // keep it centered
//     });
//   };
//   return (
//     <div className="w-full min-h-screen flex justify-center items-center">
//       <div
//         onMouseMove={handleMouseMove}
//         className="w-[70%] h-[150px] relative overflow-hidden"
//       >
//         <div className="bg-white/10 grid grid-cols-5 gap-2 p-2 rounded-xl w-full h-full z-50 absolute">
//           {[1, 2, 3, 4, 5].map((item) => {
//             return <div className="bg-white/5 rounded-xl" key={item}></div>;
//           })}
//         </div>
//         <div
//           style={style}
//           className="absolute w-[20%] h-full bg-white transition-all duration-200"
//         />
//       </div>
//     </div>
//   );
// };

// export default HoverBackground;

import React, { useState, useRef } from "react";

const HoverBackground = () => {
  const [style, setStyle] = useState({});
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();

    // mouse position relative to container
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    console.clear();
    
    console.log(e.clientX, e.clientY);
    console.log(rect.left, rect.top);
    
    console.log(x, y);

    setStyle({
      left: `${x}px`,
      top: `${y}px`,
      transform: "translate(-50%, -50%)", // keep it centered
      opacity : 1
    });
  };

const handleMouseLeave = () => {
  setStyle((prev) => ({
    ...prev,
    opacity: 0,
  }));
};

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-[70%] h-[250px] relative overflow-hidden rounded-xl"
      >
        <div className="bg-white/10 grid grid-cols-5 gap-2 p-2 rounded-xl backdrop-blur-2xl w-full h-full z-50 absolute border-white/10 border-2">
          {[1, 2, 3, 4, 5].map((item) => {
            return <div className="bg-white/10 rounded-xl border-2 border-white/10 p-2 cursor-pointer" key={item}>
                <h1 className="font-AbrilFatface text-black">LOREM</h1>
                <p className="text-sm text-black/50 font-AbrilFatface">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, aliquam?</p>
            </div>;
          })}
        </div>
        {/* highlight block follows cursor */}
        <div
          style={style}
          className="absolute aspect-square w-[100px] blur-3xl bg-white opacity-0 "
        />
      </div>
    </div>
  );
};

export default HoverBackground;
