import React, { useEffect, useRef } from "react";

const AutoScrollLoop = () => {
  const containerRef = useRef(null);
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]; // Fixed items

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    // Duplicate items for seamless looping
    container.innerHTML += container.innerHTML;

    let scrollAmount = 0;

    const scrollInterval = setInterval(() => {
      if (container.scrollTop >= container.scrollHeight / 2) {
        container.scrollTop = 0; // Reset to start
      } else {
        container.scrollTop += 1; // Scroll speed
      }
      scrollAmount++;
    }, 20); // Lower = faster

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        height: "200px",
        overflow: "hidden",
        border: "1px solid black",
        fontSize: "18px"
      }}
    >
      {items.map((item, index) => (
        <div key={index} style={{ padding: "15px", borderBottom: "1px solid gray" }}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default AutoScrollLoop;
