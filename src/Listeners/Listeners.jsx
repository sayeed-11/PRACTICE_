// import React, { useRef, useEffect } from "react";

// const Listeners = () => {
//   const divRef = useRef(null);

//   useEffect(() => {
//     const div = divRef.current;

//     if (!div) return; // safeguard

//     const handleMouseMove = (event) => {
//         console.log(event.offsetX, event.offsetY);
//     };
//      //   console.log("Mouse Position:", event.x, event.y);

//     // ✅ attach event listener
//     div.addEventListener("mousemove", handleMouseMove);

//     // ✅ cleanup on unmount
//     return () => {
//       div.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <div className="min-h-screen bg-black text-white w-full flex justify-center items-center">
//       <div
//         ref={divRef}
//         className="w-[300px] aspect-square bg-amber-400 rounded-2xl"
//       ></div>
//     </div>
//   );
// };

// export default Listeners;

// import React, { useRef, useEffect } from "react";

// const Listeners = () => {
//   const divRef = useRef(null);

//   useEffect(() => {
//     const div = divRef.current;
//     if (!div) return;

//     const handleMouseMove = (e) => {
//       const rect = div.getBoundingClientRect();

//       // Get mouse position relative to center
//       const x = e.clientX - rect.left; // mouse X inside element
//       const y = e.clientY - rect.top;  // mouse Y inside element
//       const centerX = rect.width / 2;
//       const centerY = rect.height / 2;

//       // Calculate rotation (mapping distance from center)
//       const rotateX = -((y - centerY) / centerY) * 10; // max 15deg
//       const rotateY = -((x - centerX) / centerX) * 10;

//     //   console.log(rotateX, rotateY);

//       // Apply transform
//       div.style.transform = `perspective(600px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
//     };

//     const resetTransform = () => {
//       div.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg)";
//     };

//     div.addEventListener("mousemove", handleMouseMove);
//     div.addEventListener("mouseleave", resetTransform);

//     return () => {
//       div.removeEventListener("mousemove", handleMouseMove);
//       div.removeEventListener("mouseleave", resetTransform);
//     };
//   }, []);

//   return (
//     <div className="min-h-screen bg-black text-white w-full flex justify-center items-center">
//       <div
//         ref={divRef}
//         className="w-[300px] aspect-square bg-amber-400 rounded-2xl transition-transform duration-150 ease-out"
//       ></div>
//     </div>
//   );
// };

// export default Listeners;

import React, { useState } from "react";

const TiltItem = ({ src }) => {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;

    const centerX = target.clientWidth / 2;
    const centerY = target.clientHeight / 2;

    // Normalize relative to center
    const rotateX = -((offsetY - centerY) / centerY) * 20;
    const rotateY = -((offsetX - centerX) / centerX) * 20;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({ transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)" });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-[300px] relative overflow-hidden aspect-[1/1.5] bg-blue-500 text-white rounded-2xl flex items-center justify-center shadow-lg transition-all duration-150 ease-out opacity-[0.3] group-hover:opacity-[1]"
      style={style}
    >
      <img
        className="absolute w-full h-full object-cover"
        src={src}
        alt=""
      />
    </div>
  );
};

const TiltCard = () => {
  return (
    <div className="flex gap-5 group w-full min-h-screen justify-center items-center">
      <TiltItem src="https://i.pinimg.com/736x/3b/aa/78/3baa780a7c507858f62e3f5c8c10be6d.jpg" />
      <TiltItem src="https://i.pinimg.com/736x/56/0b/d8/560bd8e051730a69576a5cd0dd24978b.jpg" />
      <TiltItem src="https://i.pinimg.com/736x/6a/5f/3e/6a5f3e59e3bc96a86fdd51d303979b0c.jpg" />
    </div>
  );
};

export default TiltCard;
