import React, { useRef } from "react";
import useIntersectionObserver from "./useIntersectionObserver";

export default function MultiObserverHookDemo() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const visible1 = useIntersectionObserver(ref1, {  });
  const visible2 = useIntersectionObserver(ref2, {  });
  const visible3 = useIntersectionObserver(ref3, {  });

  return (
    <div className="space-y-40 p-10 w-full">
      <div ref={ref1} className={`w-[70%] aspect-square transition-all duration-500 bg-amber-500 ${visible1 ? "opacity-100" : "opacity-0"}`}>Box 1</div>
      <div ref={ref2} className={`w-[70%] aspect-square transition-all duration-500  bg-amber-500 ${visible2 ? "opacity-100" : "opacity-0"}`}>Box 2</div>
      <div ref={ref3} className={`w-[70%] aspect-square transition-all duration-500  bg-amber-500 ${visible3 ? "opacity-100" : "opacity-0"}`}>Box 3</div>
    </div>
  );
}
