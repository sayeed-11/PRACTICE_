import React, { useEffect, useState } from "react";
import "./Rotate.css";

const images = [
  "https://i.pinimg.com/1200x/f0/38/38/f038383985e6289f4c208150818e01ab.jpg",
  "https://i.pinimg.com/1200x/b6/2d/f6/b62df6fc340a991d43dd75dcb05b5b3a.jpg",
  "https://i.pinimg.com/736x/55/34/55/553455038bf4b0b525685955068f049c.jpg",
  "https://i.pinimg.com/1200x/03/58/9d/03589dcd7133b087f053bd0c2e11c625.jpg",

  "https://i.pinimg.com/1200x/f0/38/38/f038383985e6289f4c208150818e01ab.jpg",
  "https://i.pinimg.com/1200x/b6/2d/f6/b62df6fc340a991d43dd75dcb05b5b3a.jpg",
  "https://i.pinimg.com/736x/55/34/55/553455038bf4b0b525685955068f049c.jpg",
  "https://i.pinimg.com/1200x/03/58/9d/03589dcd7133b087f053bd0c2e11c625.jpg",

  "https://i.pinimg.com/1200x/f0/38/38/f038383985e6289f4c208150818e01ab.jpg",
  "https://i.pinimg.com/1200x/b6/2d/f6/b62df6fc340a991d43dd75dcb05b5b3a.jpg",
  "https://i.pinimg.com/736x/55/34/55/553455038bf4b0b525685955068f049c.jpg",
  "https://i.pinimg.com/1200x/03/58/9d/03589dcd7133b087f053bd0c2e11c625.jpg",
];

import pic from "../assets/CYBERFICTION-IMAGES/male126.png";

const RotateCarousel = () => {
  const [windowWidth, setWindowWidth] = useState(1200);
  useEffect(() => {
    const handleResize = (e) => {
      const w = (e.currentTarget.innerWidth);
      setWindowWidth(w);
    }
    console.log(windowWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize)
  },[windowWidth])
  return (
    <div className="w-full min-h-screen flex justify-center items-center relative overflow-hidden">
      <div className="absolute z-10 top-[100px] flex justify-center container w-[100px] md:w-[200px] aspect-square">
        {images.map((url, index) => (
          <div
            key={index}
            style={{
              transform: `rotateY(${
                (360 / images.length) * index
              }deg) translateZ(${windowWidth - 650}px)`,
            }}
            className={`absolute w-full h-full `}
          >
            <img
              style={{
                backfaceVisibility: "hidden",
              }}
              className="w-full h-full object-cover rounded-lg shadow-lg"
              src={url}
              alt=""
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 w-full flex justify-center">
        <img className="w-[80%]" src={pic} alt="" />
      </div>
    </div>
  );
};

export default RotateCarousel;

