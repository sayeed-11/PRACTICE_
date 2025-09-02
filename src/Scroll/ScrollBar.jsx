import React, { useEffect, useRef, useState } from "react";
import "./scroll.css";

const ScrollBar = () => {
  const divRef = useRef(null);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const scrollHeight = divRef.current.scrollHeight;
    const height = scrollHeight - window.innerHeight;
    const handleScroll = (e) => {
      console.clear();
    //   console.log(height);
      const currentHeight = window.pageYOffset;
      const currentIndex = Math.floor((currentHeight / height) * 150);
      setIndex(currentIndex);

      console.log(currentIndex);
      
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div ref={divRef} className="h-[500vh] w-full">
      <div className="fixed right-0 top-0 w-[10px] h-screen bg-white/10 flex flex-col py-0 gap-0.5 ">
        {new Array(151).fill(0).map((_, i) => {
          return (
            <div
              id={index === i ? "selected" : "no-selected"}
              key={i}
              className="w-full bg-white brightness-[15%] flex-1 self-end transition-all duration-100 rounded-2xl"
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollBar;
