import React, { useEffect, useRef } from "react";

const InfiniteHorizontalScrollReverse = () => {
  const trackRef = useRef(null);
  const items = [
    "https://i.pinimg.com/736x/b5/6d/da/b56ddab2c0d33fa7cdc935150c42178a.jpg",
    "https://i.pinimg.com/736x/e9/99/9c/e9999c340f8786693910fa02e1986af6.jpg",
    "https://i.pinimg.com/736x/b0/ac/1a/b0ac1a5da41418c69919ebe573819c3e.jpg",
    "https://i.pinimg.com/1200x/bc/21/ee/bc21eed173a1f38728ce002505ec469c.jpg",
    "https://i.pinimg.com/1200x/a1/22/b0/a122b03c5214cb8526aa83d67121a927.jpg",
  ];

  useEffect(() => {
    const track = trackRef.current;
    let position = 0;
    const speed = 0.8; // Adjust for speed

    const animate = () => {
      position -= speed;
      if (Math.abs(position) >= track.scrollWidth / 2) {
        position = 0; // Reset for infinite loop
      }
      track.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="w-full h-[300px] overflow-hidden relative">
      <div
        ref={trackRef}
        className="flex flex-row"
        style={{ width: "max-content", willChange: "transform" }}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="w-[250px] h-[300px] relative border-4 border-white rounded-3xl overflow-hidden mr-5"
          >
            <img
              src={item}
              alt={`img-${index}`}
              className="absolute w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteHorizontalScrollReverse;
