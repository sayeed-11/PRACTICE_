import React, { useEffect, useRef } from 'react'

const TextShadow = () => {
    const textRef = useRef(null)
    useEffect(() => {
    if (textRef.current) {
      let shadows = [];
      let depth = 30; // how many shadow layers
      let color = "#d9d9d9";

      for (let i = 1; i <= depth; i++) {
        shadows.push(`${-i}px ${i}px 0 ${color}`);
      }

      textRef.current.style.textShadow = shadows.join(", ");
      textRef.current.style.fontSize = "10rem";
      textRef.current.style.fontWeight = "bold";
      textRef.current.style.color = "#222";
      textRef.current.style.transform = "rotate(-28deg) skew(25deg)";
      textRef.current.style.display = "inline-block";
        textRef.current.style.color = "#FFFFFF";
    }
  }, []);
  return (
    <div className='w-full min-h-screen bg-[#F1F1F1] text-black flex justify-center items-center'>
       <div className='flex'>
         <h1 ref={textRef} className='under-shadow'>SAYEED</h1>
        {/* <h1 className='text-[10rem] font-extrabold text-[#FFFFFF] shadow-3d'>SAYEED</h1>
        <h1 className='text-[10rem] font-extrabold text-[#FFFFFF] shadow-3d'>SAYEED</h1> */}
       </div>
    </div>
  )
}

export default TextShadow