import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ClickedEvent = () => {
  const boxRef = useRef(null);
  const outerBox = useRef(null);

  const [isBox, setBox] = useState(false);
  const handleClick = (e) => {
    if (boxRef.current) {
      const clickedInside = boxRef.current.contains(e.target);
      // console.log(e.target);
      setBox(clickedInside);
      
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClick);

    // ✅ cleanup properly
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <div ref={outerBox} className="w-full min-h-screen flex justify-center items-center">
      <motion.div
        ref={boxRef}
        style={{ scale: isBox ? 1.5 : 1 }}
        className="w-[500px] aspect-square bg-white rounded-[5%] duration-500 transition-all"
      ></motion.div>
    </div>
  );
};

export default ClickedEvent;
