// import { useState } from "react";

// const Dropdown = () => {
//     const [isOpen, setOpen] = useState(false);
//   return (
//     <div className="relative group">
//       <button onClick={() => setOpen(!isOpen)} className="bg-slate-200 px-5 py-2 rounded-xl">Dropdown</button>
//       <div className={`absolute w-[300px] aspect-video bg-black/0 top-[40px] left-[50%] translate-x-[-50%] rounded-xl ${isOpen ? "block" : "hidden"} transition-all duration-300  pt-3`}>
//         <div className="relative w-full h-full bg-black rounded-xl">
//           <div className="bg-black absolute w-4 aspect-square left-1/2 translate-x-[-50%] -top-2 rotate-45"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dropdown;

import { div } from "motion/react-client";
import { useState, useEffect, useRef } from "react";

const Dropdown = () => {
  const [isOpen, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="bg-red-500 w-full flex justify-center">
      <div ref={dropdownRef} className="relative">
        <button
          onClick={() => setOpen(!isOpen)}
          className="bg-slate-200 px-5 py-2 rounded-xl"
        >
          Dropdown
        </button>

        <div
          className={`absolute w-[200px] aspect-[1/1.5] top-[40px] left-[50%] -translate-x-1/2 rounded-xl 
        ${isOpen ? "block w-[200px]" : "hidden w-[0px]"} transition-all duration-300 pt-3`}
        >
          <div className="relative w-full h-full bg-black rounded-xl">
            <div className="bg-black absolute w-4 aspect-square left-1/2 -translate-x-1/2 -top-2 rotate-45 -z-10"></div>
            <div className="text-white flex flex-col justify-center items-center w-full h-full">
              <button onClick={() => setOpen(false)}>HOME</button>
              <button onClick={() => setOpen(false)}>ABOUT</button>
              <button onClick={() => setOpen(false)}>CONTACT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
