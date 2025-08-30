// // src/components/SplineViewer.jsx
// import React from "react";
// import Spline from "@splinetool/react-spline";

// const SplineViewer = () => {
//   return (
//     <div className="w-full h-screen">
//       <div className="absolute w-1/2 h-[50%]">
//         <Spline scene="https://prod.spline.design/XMvOa7yu7ETvwqLY/scene.splinecode" />
//       </div>
//       <div className="absolute w-full h-full"></div>
//     </div>
//   );
// };

// export default SplineViewer;

import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <div className="absolute w-full h-screen bg-black">
      <Spline scene="https://prod.spline.design/mSlG5uoq07pqrAAm/scene.splinecode" />
    </div>
  );
}
