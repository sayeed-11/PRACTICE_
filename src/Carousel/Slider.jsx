// import React, { useState } from "react";

// const data = [
//   "https://i.pinimg.com/736x/ae/e3/0f/aee30f63c51884b081e05a4363ee83fd.jpg",
//   "https://i.pinimg.com/736x/19/e3/7f/19e37fceeb0f75376251c1f3f66d4897.jpg",
//   "https://i.pinimg.com/736x/ad/ab/e2/adabe2df5445f9de435e19d6adbb9604.jpg",
//   "https://i.pinimg.com/736x/39/bd/ce/39bdce5adb39de7f9039c7b802a47c4b.jpg",
//   "https://i.pinimg.com/736x/ef/77/c2/ef77c21f137e470b5cad0844d3aae505.jpg",
//   "https://i.pinimg.com/736x/10/de/3b/10de3bbf67c0a2760dcba8121bc82b85.jpg",
//   "https://i.pinimg.com/736x/10/de/3b/10de3bbf67c0a2760dcba8121bc82b85.jpg",
//   "https://i.pinimg.com/736x/10/de/3b/10de3bbf67c0a2760dcba8121bc82b85.jpg",
//   "https://i.pinimg.com/736x/10/de/3b/10de3bbf67c0a2760dcba8121bc82b85.jpg",

//   "https://i.pinimg.com/736x/ae/e3/0f/aee30f63c51884b081e05a4363ee83fd.jpg",
//   "https://i.pinimg.com/736x/19/e3/7f/19e37fceeb0f75376251c1f3f66d4897.jpg",
//   "https://i.pinimg.com/736x/ad/ab/e2/adabe2df5445f9de435e19d6adbb9604.jpg",
//   "https://i.pinimg.com/736x/39/bd/ce/39bdce5adb39de7f9039c7b802a47c4b.jpg",
//   "https://i.pinimg.com/736x/ef/77/c2/ef77c21f137e470b5cad0844d3aae505.jpg",
//   "https://i.pinimg.com/736x/10/de/3b/10de3bbf67c0a2760dcba8121bc82b85.jpg",
//   "https://i.pinimg.com/736x/10/de/3b/10de3bbf67c0a2760dcba8121bc82b85.jpg",
//   "https://i.pinimg.com/736x/10/de/3b/10de3bbf67c0a2760dcba8121bc82b85.jpg",
//   "https://i.pinimg.com/736x/10/de/3b/10de3bbf67c0a2760dcba8121bc82b85.jpg",
// ];

// const Slider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevIndex = () => {
//     setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
//   };

//   const nextIndex = () => {
//     setCurrentIndex((prev) => (prev + 1) % data.length);
//   };

//   const getPosition = (i) => {
//     const pos = (i - currentIndex + data.length) % data.length;
//     switch (pos) {
//       case 0:
//         return { transform: "perspective(1000px) rotateY(0deg) translateZ(0px) scale(1) translateX(0px)", zIndex: 3, opacity: 1 };
//       case 1:
//         return { transform: "perspective(1000px) rotateY(-25deg) translateZ(-150px) scale(0.9) translateX(150px)", zIndex: 2, opacity: 1 };
//       case 2:
//         return { transform: "perspective(1000px) rotateY(-15deg) translateZ(-300px) scale(0.8) translateX(300px)", zIndex: 1, opacity: 1 };
//       case 3:
//         return { transform: "perspective(1000px) rotateY(-15deg) translateZ(-300px) scale(0.8) translateX(300px)", zIndex: 0, opacity: 1 };
//       case 4:
//         return { transform: "perspective(1000px) rotateY(-15deg) translateZ(-300px) scale(0.8) translateX(300px)", zIndex: 0, opacity: 1 };
//       case 5:
//         return { transform: "perspective(1000px) rotateY(-15deg) translateZ(-300px) scale(0.8) translateX(300px)", zIndex: 0, opacity: 1 };
//       case 6:
//         return { transform: "perspective(1000px) rotateY(-15deg) translateZ(-300px) scale(0.8) translateX(300px)", zIndex: 0, opacity: 1 };
      
//       case data.length - 1:
//         return { transform: "perspective(1000px) rotateY(25deg) translateZ(-150px) scale(0.9) translateX(-150px)", zIndex: 2, opacity: 1 };
//       case data.length - 2:
//         return { transform: "perspective(1000px) rotateY(15deg) translateZ(-300px) scale(0.8) translateX(-300px)", zIndex: 1, opacity: 1 };
//       case data.length - 3:
//         return { transform: "perspective(1000px) rotateY(15deg) translateZ(-300px) scale(0.8) translateX(-300px)", zIndex: 0, opacity: 1 };
//       default:
//         return { transform: "perspective(1000px) rotateY(15deg) translateZ(-300px) scale(0.8) translateX(-300px)", zIndex: -1, opacity: 0 };
//     }
//   };

//   return (
//     <div style={{transformStyle:'preserve-3d'}} className="w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black relative">
//       <div style={{transformStyle:'preserve-3d'}} className="flex justify-center items-center relative w-full h-[500px]">
//         {data.map((url, index) => {
//           const style = getPosition(index);
//           return (
//             <div
//               key={url}
//               style={{
//                 ...style,
//                 transition: "transform 1s cubic-bezier(0.25, 1, 0.5, 1), opacity 1s ease",
//                 position: "absolute",
//                 width: "300px",
//                 aspectRatio: "1/1.2",
//                 // transformOrigin:'bottom'
//               }}
//               className="reflect-text"
//             >
//               <img
//                 className="w-full h-full object-cover rounded-xl shadow-xl"
//                 src={url}
//                 alt="slide"
//               />
//             </div>
//           );
//         })}
//       </div>

//       <div className="text-white absolute bottom-[150px] flex gap-10">
//         <button
//           onClick={prevIndex}
//           className="bg-red-500 px-5 py-2 rounded-xl hover:bg-red-600 transition"
//         >
//           LEFT
//         </button>
//         <button
//           onClick={nextIndex}
//           className="bg-red-500 px-5 py-2 rounded-xl hover:bg-red-600 transition"
//         >
//           RIGHT
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Slider;



import React, { useState } from "react";

const data = [
  "https://i.pinimg.com/736x/ae/e3/0f/aee30f63c51884b081e05a4363ee83fd.jpg",
  "https://i.pinimg.com/736x/19/e3/7f/19e37fceeb0f75376251c1f3f66d4897.jpg",
  "https://i.pinimg.com/736x/ad/ab/e2/adabe2df5445f9de435e19d6adbb9604.jpg",
  "https://i.pinimg.com/736x/39/bd/ce/39bdce5adb39de7f9039c7b802a47c4b.jpg",
  "https://i.pinimg.com/736x/ef/77/c2/ef77c21f137e470b5cad0844d3aae505.jpg",
  "https://i.pinimg.com/736x/10/de/3b/10de3bbf67c0a2760dcba8121bc82b85.jpg",

   "https://i.pinimg.com/736x/ae/e3/0f/aee30f63c51884b081e05a4363ee83fd.jpg",
  "https://i.pinimg.com/736x/19/e3/7f/19e37fceeb0f75376251c1f3f66d4897.jpg",
  "https://i.pinimg.com/736x/ad/ab/e2/adabe2df5445f9de435e19d6adbb9604.jpg",
  "https://i.pinimg.com/736x/39/bd/ce/39bdce5adb39de7f9039c7b802a47c4b.jpg",
  "https://i.pinimg.com/736x/ef/77/c2/ef77c21f137e470b5cad0844d3aae505.jpg",
  "https://i.pinimg.com/736x/10/de/3b/10de3bbf67c0a2760dcba8121bc82b85.jpg",
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevIndex = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const nextIndex = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const getPosition = (i) => {
    const pos = (i - currentIndex + data.length) % data.length;
    switch (pos) {
      case 0: // center
        return {
          transform: "translateX(0) translateZ(0) scale(1) rotateY(0)",
          zIndex: 5,
          // opacity: 1,
        };
      case 1: // right
        return {
          transform: "translateX(180px) translateZ(-150px) scale(0.9) rotateY(-20deg)",
          zIndex: 4,
          // opacity: 0.9,
        };
      case 2: // far right
        return {
          transform: "translateX(360px) translateZ(-300px) scale(0.8) rotateY(-15deg)",
          zIndex: 3,
          // opacity: 0.6,
        };
      case data.length - 1: // left
        return {
          transform: "translateX(-180px) translateZ(-150px) scale(0.9) rotateY(20deg)",
          zIndex: 4,
          // opacity: 0.9,
        };
      case data.length - 2: // far left
        return {
          transform: "translateX(-360px) translateZ(-300px) scale(0.8) rotateY(15deg)",
          zIndex: 3,
          // opacity: 0.6,
        };
      default: // hidden
        return {
          transform: "translateX(0) translateZ(-500px) scale(0.7)",
          zIndex: 0,
          opacity: 0,
        };
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-black relative overflow-hidden">
      {/* Perspective container */}
      <div
        className="relative w-full h-[500px] flex justify-center items-center"
        style={{
          perspective: "800px",
          transformStyle: "preserve-3d",
        }}
      >
        {data.map((url, index) => {
          const style = getPosition(index);
          return (
            <div
              key={index}
              style={{
                ...style,
                position: "absolute",
                width: "300px",
                aspectRatio: "1/1.2",
                transition:
                  "transform 0.9s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.9s ease",
              }}
            >
              <img
                className="w-full h-full object-cover rounded-xl shadow-2xl"
                src={url}
                alt="slide"
              />
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="text-white absolute bottom-[120px] flex gap-10">
        <button
          onClick={prevIndex}
          className="bg-red-500 px-5 py-2 rounded-xl hover:bg-red-600 transition"
        >
          LEFT
        </button>
        <button
          onClick={nextIndex}
          className="bg-red-500 px-5 py-2 rounded-xl hover:bg-red-600 transition"
        >
          RIGHT
        </button>
      </div>
    </div>
  );
};

export default Slider;
