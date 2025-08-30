import React from "react";

const ClipPathEqualSize = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center gap-10 bg-gray-200">
      {/* Normal Rectangle */}
      <div className="w-[300px] h-[300px] bg-sky-400" />

      {/* Clipped Shape */}
      <div className="relative">
        <svg width="0" height="0">
          <clipPath id="customClip" clipPathUnits="objectBoundingBox">
            {/* Normalized path: original coords divided by width=150, height=200 */}
            <path
              d="
            M 0.066,0.2
            L 0.466,0.2
            A 0.066,0.05 0 0 0 0.533,0.15
            L 0.533,0.05
            A 0.066,0.05 0 0 1 0.6,0
            L 0.933,0
            A 0.066,0.05 0 0 1 1,0.05
            L 1,0.95
            A 0.066,0.05 0 0 1 0.933,1
            L 0.066,1
            A 0.066,0.05 0 0 1 0,0.95
            L 0,0.25
            A 0.066,0.05 0 0 1 0.066,0.2
            Z
          "
            />
          </clipPath>
        </svg>
        <div
          className="w-[300px] h-[350px] bg-sky-400 relative"
          style={{ clipPath: "url(#customClip)" }}
        >
          <img
            className="absolute h-full w-full object-cover"
            src="https://i.pinimg.com/736x/ea/18/24/ea1824829d8cdba96c473b9f89402b07.jpg"
            alt=""
          />
        </div>
        <div className="absolute bg-sky-400 text-white w-[150px] h-[60px] rounded-[0.9rem] top-1 left-1 flex justify-center items-center">
          BABY
        </div>
      </div>
    </div>
  );
};

export default ClipPathEqualSize;
