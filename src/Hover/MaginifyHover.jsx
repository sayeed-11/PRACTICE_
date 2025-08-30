import React, { useRef } from "react";

export default function Example() {
  const boxRef = useRef(null);

  const handleHover = (e) => {
    const current = e.target;
    const children = [...boxRef.current.children];
    const index = children.indexOf(current);

    // Reset all children styles first
    children.forEach((child) => {
      child.style.transform = "scale(1)";
      child.style.zIndex = "0";
      child.style.backgroundColor = "rgba(255,255,255,0.3)"; // default dim
    });

    // Highlight hovered item
    current.style.transform = "scale(1.5)";
    current.style.zIndex = "10";
    current.style.backgroundColor = "rgba(255,255,255,1)";
    current.style.zIndex = 3;

    // Apply scale + fading backgrounds to siblings
    const scales = [1.3, 1.2, 1.1];
    const backgrounds = [
      "rgba(255,255,255,0.9)", // 1st sibling
      "rgba(255,255,255,0.8)", // 2nd sibling
      "rgba(255,255,255,0.7)", // 3rd sibling
    ];
    const zindex = [2, 1, 0];

    scales.forEach((scale, i) => {
      const prev = children[index - (i + 1)];
      const next = children[index + (i + 1)];

      if (prev) {
        prev.style.transform = `scale(${scale})`;
        prev.style.backgroundColor = backgrounds[i];
        prev.style.zIndex = zindex[i];
      }
      if (next) {
        next.style.transform = `scale(${scale})`;
        next.style.backgroundColor = backgrounds[i];
        next.style.zIndex = zindex[i];
      }
    });
  };

  const handleLeave = () => {
    [...boxRef.current.children].forEach((child) => {
      child.style.transform = "scale(1)";
      child.style.zIndex = "0";
      child.style.backgroundColor = "rgba(255,255,255,0.3)";
    });
  };

  return (
    <div
      ref={boxRef}
      className="flex flex-col gap-3 justify-center items-center w-full"
    >
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          className="w-[250px] p-4 rounded-xl transition-all duration-500 ease-in-out text-black/50 backdrop-blur-2xl"
          style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
        >
          Item {i + 1}
        </div>
      ))}
    </div>
  );
}
