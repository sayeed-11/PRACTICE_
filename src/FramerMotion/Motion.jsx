import React, { useState } from "react";
// import * as motion from "motion/react-client"
import { motion } from "motion/react";

const Motion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSwitch = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-screen h-screen bg-black">
      <div className="w-screen h-screen bg-black flex justify-center items-center">
        <motion.button
          onClick={toggleSwitch}
          style={{ justifyContent: isOpen ? "flex-end" : "flex-start" }}
          className="w-[100px] bg-white/15 rounded-full p-1 flex border-1 border-white/5"
        >
          <motion.div
            layout
            transition={{
              type: "spring",
              visualDuration: 0.2,
              bounce: 0.2,
              velocity: 500,
              vectorEffect: "non-scaling-stroke",
            }}
            className="w-[45%] aspect-square rounded-full bg-[#FFFFFF]"
          />
        </motion.button>
      </div>

      <div className="w-screen h-screen bg-black flex justify-center items-center">
        <motion.div
        
          initial={{
            scale: 0,
            opacity: 0,
            borderRadius: "0%",
          }}
          whileInView={{
            scale: 1,
            opacity: 1,
            borderRadius: "100px",
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="w-[80vw] aspect-video bg-white"
          animate={{ x: isOpen ? 100 : 0 }}
        />
      </div>
    </div>
  );
};

export default Motion;
