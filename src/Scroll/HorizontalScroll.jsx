// import React, { useRef } from "react";

// export default function HorizontalScroll() {
//   const scrollRef = useRef(null);
//   const divRef = useRef(null);

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const { scrollLeft, clientWidth } = scrollRef.current;
//       console.log(clientWidth);

//       const scrollAmount = divRef.current.clientWidth + 10;

//       if (direction === "left") {
//         scrollRef.current.scrollTo({
//           left: scrollLeft - scrollAmount,
//           behavior: "smooth",
//         });
//       } else {
//         scrollRef.current.scrollTo({
//           left: scrollLeft + scrollAmount,
//           behavior: "smooth",
//         });
//       }
//     }
//   };

//   return (
//     <div className="w-full p-4">
//       <div className="flex justify-between mb-2">
//         <button
//           onClick={() => scroll("left")}
//           className="px-4 py-2 bg-gray-300 rounded"
//         >
//           ◀ Left
//         </button>
//         <button
//           onClick={() => scroll("right")}
//           className="px-4 py-2 bg-gray-300 rounded"
//         >
//           Right ▶
//         </button>
//       </div>

//       <div
//         ref={scrollRef}
//         className="flex overflow-x-auto space-x-[10px] scrollbar-hide scroll-smooth"
//         style={{ scrollBehavior: "smooth" }}
//       >
//         {/* Sample scrollable items */}
//         {Array.from({ length: 15 }, (_, i) => (
//           <div
//             ref={divRef}
//             key={i}
//             className="min-w-[200px] h-32 bg-blue-200 flex items-center justify-center text-xl font-bold rounded"
//           >
//             Item {i + 1}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// import React, { useRef } from "react";

// export default function SimpleSlider() {
//   const scrollRef = useRef(null);

//   const scroll = (direction) => {
//     const { current } = scrollRef;
//     if (current) {
//       const scrollAmount = 300;
//       current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
//       {/* Scroll Buttons */}
//       <button onClick={() => scroll("left")} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white px-2 py-1 shadow">
//         ◀
//       </button>
//       <button onClick={() => scroll("right")} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white px-2 py-1 shadow">
//         ▶
//       </button>

//       {/* Scrollable Items */}
//       <div ref={scrollRef} className="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth px-10">
//         {Array.from({ length: 10 }, (_, i) => (
//           <div key={i} className="min-w-[300px] h-[200px] bg-blue-300 rounded-lg flex items-center justify-center text-white text-2xl">
//             Slide {i + 1}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




const SnapSlider = () => {
  const slides = Array.from({ length: 6 }, (_, i) => `Slide ${i + 1}`);

  return (
    <div className="w-full max-w-6xl mx-auto py-10 px-4">
      <div className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="snap-center flex-shrink-0 w-[80%] md:w-[60%] lg:w-[40%] h-[200px] bg-blue-500 m-4 rounded-xl text-white text-2xl font-bold flex items-center justify-center shadow-lg"
          >
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SnapSlider;
