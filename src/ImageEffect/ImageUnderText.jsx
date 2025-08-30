// import React from "react";

// const ImageUnderText = () => {
//   return (
//     <div className="flex justify-center items-center w-full min-h-screen">
//       <div className="w-[25%] aspect-[1/2] relative">
//         <div className="w-full absolute h-full">
//           <img
//             className="absolute w-full h-full object-cover"
//             src="https://i.pinimg.com/736x/be/5e/9d/be5e9dec654f7e399a170b005499cf5a.jpg"
//             alt=""
//           />
//         </div>
//         <div className="w-[50%] absolute h-full">
//           <img
//             className="absolute w-full h-full object-cover object-left"
//             src="https://i.pinimg.com/736x/be/5e/9d/be5e9dec654f7e399a170b005499cf5a.jpg"
//             alt=""
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageUnderText;



// import React from "react";

// const ImageUnderText = () => {
//   return (
//     <div className="flex justify-center items-center w-full min-h-screen">
//       <div className="relative w-[25%] aspect-[1/2]">
//         {/* Full image div */}
//         <div className="absolute inset-0">
//           <img
//             className="w-full h-full object-cover"
//             src="https://i.pinimg.com/736x/be/5e/9d/be5e9dec654f7e399a170b005499cf5a.jpg"
//             alt="full"
//           />
//         </div>

//         {/* Half image div (only left side visible) */}
//         <div className="absolute inset-0 [clip-path:inset(0_50%_0_0)] bg-red-500 flex flex-col justify-center">
//           <img
//             className="w-full h-full object-cover"
//             src="https://i.pinimg.com/736x/be/5e/9d/be5e9dec654f7e399a170b005499cf5a.jpg"
//             alt="half"
//           />
//           <h1 className="absolute font-extrabold font-AbrilFatface rotate-90 text-[5rem] bg-clip-text text-transparent">HELLO</h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageUnderText;

// import React from "react";

// const PosterEffect = () => {
//   const imageUrl =
//     "https://i.pinimg.com/736x/be/5e/9d/be5e9dec654f7e399a170b005499cf5a.jpg";

//   return (
//     <div className="flex justify-center items-center w-full min-h-screen bg-black">
//       <div className="relative w-[400px] aspect-[2/3] overflow-hidden">
//         {/* Full background image */}
//         <img
//           src={imageUrl}
//           alt="Poster"
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         {/* Right half dark overlay */}
//         <div className="absolute inset-0 [clip-path:inset(0_0_0_50%)] bg-black/85"></div>

//         {/* Text (blended into dark side) */}
//         <div className="absolute inset-0 flex flex-col justify-center p-6 text-gray-200 text-left mix-blend-difference">
//           <h2 className="text-2xl font-extrabold leading-tight tracking-wide">
//             PEOPLE <br />
//             KEEP <br />
//             ASKING IF <br />
//             I'M BACK <br />
//             AND I HAVEN'T <br />
//             REALLY HAD <br />
//             AN ANSWER, <br />
//             BUT YEAH. <br />
//             I'M THINKING <br />
//             I'M BACK
//           </h2>
//         </div>

//         {/* Bottom Title */}
//         <div className="absolute bottom-6 w-full text-center">
//           <h1 className="text-4xl font-extrabold text-white">WICK</h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PosterEffect;


import React from 'react'
import './image.css';

const ImageUnderText = () => {
  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
        <h1 className='max-w-[30%] relative flex justify-center items-center text-bg font-extrabold text-[5rem] font-LuckiestGuy leading-42'>
            {/* <img className='absolute w-full h-full object-cover' src="https://i.pinimg.com/1200x/fc/d6/99/fcd699e0cc41c3f549a34c43fa7fcfd8.jpg" alt="" /> */}
            {/* <h1 className='font-AbrilFatface text-[10rem] z-10 text-white bg-clip-text '>SAYEED</h1> */}
            IT'S SAYEED I'M A DEVELOPR
        </h1>
    </div>
  )
}

export default ImageUnderText



