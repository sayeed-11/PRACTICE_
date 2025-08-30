import React, { useRef } from "react";

const Background = () => {
  const divRef = useRef(null);
  let prevX = 0;
  let prevY = 0;

  const handleMouseMove = (e) => {
    const clientX = e.clientX;
    const clientY = e.clientY;

    const currentX = clientX - prevX;
    const currentY = clientY - prevY;

    const distance = Math.sqrt(currentX * currentX + currentY * currentY);

    const parent = divRef.current;
    if (distance >= 50) {
      const child = document.createElement("div");
      child.setAttribute("class", "child");

      // ✅ use style.setProperty
      child.style.setProperty("--x", getRandom());
      child.style.setProperty("--y", getRandom());

      const value = 1 + Math.random() * 2;
      child.style.setProperty("--s", value);

      child.style.top = `${clientY}px`;
      child.style.left = `${clientX}px`;
      //   child.style.transform = `scale(${value})`;

      parent.appendChild(child);

      prevX = clientX;
      prevY = clientY;

      setTimeout(() => {
        parent.removeChild(child);
      }, 2000);
    }
  };

  // ✅ fix Math.random()
  const getRandom = () => {
    return `${Math.random() * 400 - 200}px`;
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      ref={divRef}
      className="w-full h-screen relative"
    >
      <div className="absolute w-full h-full backdrop-blur-[2px] z-10">
        <div className="w-full flex h-screen items-start">
          <div className="w-[50%] p-10">
            <h1 className="font-AbrilFatface text-[4rem] text-[#bd0000] shadow-title">Wolverine</h1>
            <p className="font-AbrilFatface">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              laborum perferendis qui odit vel exercitationem ratione autem ea
              praesentium, obcaecati dolor quam? Accusantium magnam ea et
              deserunt accusamus enim esse!
            </p>
          </div>
          <div className="h-full flex-1 flex items-start justify-end">
            <img className="h-full " src="https://i.pinimg.com/1200x/ca/f8/d7/caf8d7faf4cbf01c69dce8cb3fffd1cf.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
