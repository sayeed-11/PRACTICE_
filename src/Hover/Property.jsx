import React, { useRef, useState } from "react";

const Property = () => {
  const [style, setStyle] = useState({});
  const boxRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = boxRef.current.getBoundingClientRect();

    // Get mouse position relative to element
    const actualX = e.clientX - rect.left;
    const actualY = e.clientY - rect.top;

    // Center of element
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Normalized values between -1 and 1
    const x = (actualX - centerX) / centerX;
    const y = (actualY - centerY) / centerY;
    console.clear()
    console.log(e.nativeEvent);
    

    setStyle({
      transform: `perspective(800px) rotateX(${-y * 30}deg) rotateY(${x * 30}deg)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: `perspective(800px) rotateX(0deg) rotateY(0deg)`,
    });
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div
        style={style}
        ref={boxRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-[300px] aspect-square bg-white rounded-4xl grid place-items-center transition-all duration-200"
      >
        <div className="w-[10px] aspect-square bg-black rounded-full"></div>
      </div>
    </div>
  );
};

export default Property;
