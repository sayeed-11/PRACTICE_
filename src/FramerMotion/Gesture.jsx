import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Gesture = () => {
    const [direction, setDirection] = useState(true);
    useEffect(() => {
    const handleScroll = (e) => {
      const dir = (e.deltaY);
      if(dir >= 0){
        setDirection(true)
      }else{
        setDirection(false)
      }
      // You can also track:
      // console.log("Scroll X:", window.scrollX);
    };

    window.addEventListener("wheel", handleScroll);

    // cleanup on unmount
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);
  return (
    <div className={`w-full min-h-screen flex justify-center items-center transition-all duration-1000 ${direction ? "gap-[500px]" : "gap-[50px]"}`}>
      <div className=" flex flex-col gap-2 justify-center items-center py-10">
        {new Array(20).fill(0).map((_, index) => {
          return (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0,  }}
              whileInView={{ scale: 1, opacity: 0.5}}
              whileHover={{ scale: 1.1, opacity: 1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            //   viewport={{ once: true }} // animate only once (remove if you want repeat)
              style={{ transformOrigin: "center" }}
              className="w-[300px] h-[70px] bg-white rounded-xl flex items-center p-2 gap-5 cursor-pointer shadow-md"
            >
              <img
                className="w-[50px] aspect-square rounded-full object-cover"
                src="https://i.pinimg.com/1200x/53/cd/93/53cd933ada007a0c646c7559b54f98ae.jpg"
                alt="Profile"
              />
              <div className="text-black">
                <h1 className="font-AbrilFatface text-[#bd0000] text-xl">
                  James Bond
                </h1>
                <p className="text-xs font-bruno-ace">Secret Detective</p>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className=" flex flex-col gap-2 justify-center items-center py-10">
        {new Array(20).fill(0).map((_, index) => {
          return (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.5 }}
              whileHover={{ scale: 1.15, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-[300px] h-[70px] bg-white rounded-xl flex items-center p-2 gap-5 cursor-pointer"
            >
              <img
                className="w-[50px] aspect-square rounded-full"
                src="https://i.pinimg.com/1200x/53/cd/93/53cd933ada007a0c646c7559b54f98ae.jpg"
                alt=""
              />
              <div className="text-black">
                <h1 className="font-AbrilFatface text-[#bd0000] text-xl">
                  James Bond
                </h1>
                <p className="text-xs font-bruno-ace">Secret Detective</p>
              </div>
            </motion.div>
          );
        })}
      </div>
      {/* <div className=" flex flex-col gap-2 justify-center items-center py-10">
        {new Array(20).fill(0).map((_, index) => {
          return (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.5 }}
              whileHover={{ scale: 1.15, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-[300px] h-[70px] bg-white rounded-xl flex items-center p-2 gap-5 cursor-pointer"
            >
              <img
                className="w-[50px] aspect-square rounded-full"
                src="https://i.pinimg.com/1200x/53/cd/93/53cd933ada007a0c646c7559b54f98ae.jpg"
                alt=""
              />
              <div className="text-black">
                <h1 className="font-AbrilFatface text-[#bd0000] text-xl">
                  James Bond
                </h1>
                <p className="text-xs font-bruno-ace">Secret Detective</p>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className=" flex flex-col gap-2 justify-center items-center py-10">
        {new Array(20).fill(0).map((_, index) => {
          return (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.5 }}
              whileHover={{ scale: 1.15, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-[300px] h-[70px] bg-white rounded-xl flex items-center p-2 gap-5 cursor-pointer"
            >
              <img
                className="w-[50px] aspect-square rounded-full"
                src="https://i.pinimg.com/1200x/53/cd/93/53cd933ada007a0c646c7559b54f98ae.jpg"
                alt=""
              />
              <div className="text-black">
                <h1 className="font-AbrilFatface text-[#bd0000] text-xl">
                  James Bond
                </h1>
                <p className="text-xs font-bruno-ace">Secret Detective</p>
              </div>
            </motion.div>
          );
        })}
      </div> */}
    </div>
  );
};

export default Gesture;
