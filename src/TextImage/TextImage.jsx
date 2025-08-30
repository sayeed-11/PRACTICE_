// import React from 'react'

// import image from '../../src/assets/CYBERFICTION-IMAGES/male0001.png'

// const TextImage = () => {
//   return (
//     <div>
//         <div className='w-[300px] aspect-[1/2] border-1 border-white/20 grid grid-cols-2 relative'>
//             <img className='absolute w-full h-full object-cover' src={'../../src/assets/CYBERFICTION-IMAGES/male0185.png'} alt="" />
//         </div>
//     </div>
//   )
// }

// export default TextImage







import React, { useEffect, useState } from "react";

const ScrollArrayExample = () => {
  // Array from 1 to 300
  const values = [];
  for (let i = 1; i <= 300; i++) {
    values.push(i);
  }

  const [number, setNumber] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Full scrollable height
      const scrollHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const maxScroll = scrollHeight - windowHeight;

      // Progress from 0 to 1
      const progress = scrollY / maxScroll;

      // Map progress to array index
      const index = Math.floor(progress * (values.length - 1));
      setNumber(values[index]);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white w-full h-[1000vh] p-20">
      <h1>Scroll to change number</h1>
      <div
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        {number}
      </div>
      <div className="fixed bottom-0">
        <img
          key={number} // 👈 important: forces re-render on src change
          src={`../../src/assets/CYBERFICTION-IMAGES/male${number}.png`}
          alt=""
        //   className="transition-opacity duration-[0.1s] ease-in-out opacity-0"
        //   onLoad={(e) => (e.currentTarget.style.opacity = 1)} // fade in on load
        />
      </div>
    </div>
  );
};

export default ScrollArrayExample;




