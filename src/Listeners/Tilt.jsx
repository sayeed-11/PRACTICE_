// import React, { useRef, useEffect } from "react";

// // TiltCard: simple, smooth 3D tilt-on-hover card with optional glare
// // - Uses inline requestAnimationFrame smoothing
// // - Tailwind classes used for layout/styling (no extra CSS file required)
// // - Default export is the component so it can be dropped into a create-react-app / Next.js page

// export default function TiltCard({
//   children,
//   width = 320,
//   height = 200,
//   maxTilt = 12, // degrees
//   scale = 1.03,
//   glare = true,
// }) {
//   const cardRef = useRef(null);
//   const stateRef = useRef({
//     frame: null,
//     mouseX: 0,
//     mouseY: 0,
//     requestX: 0,
//     requestY: 0,
//     isHover: false,
//   });

//   useEffect(() => {
//     const el = cardRef.current;
//     if (!el) return;

//     const onEnter = () => {
//       stateRef.current.isHover = true;
//       el.style.willChange = 'transform';
//       el.style.transition = 'box-shadow 250ms ease, transform 250ms ease';
//       el.style.boxShadow = '0 18px 30px rgba(2,6,23,0.12)';
//     };

//     const onLeave = () => {
//       stateRef.current.isHover = false;
//       // cancel any animation frame
//       if (stateRef.current.frame) cancelAnimationFrame(stateRef.current.frame);
//       stateRef.current.requestX = 0;
//       stateRef.current.requestY = 0;
//       // reset transform
//       el.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)`;
//       el.style.boxShadow = '0 6px 12px rgba(2,6,23,0.06)';
//       // remove glare if present
//       const glareEl = el.querySelector('.tilt-glare');
//       if (glareEl) glareEl.style.opacity = '0';
//     };

//     const onMove = (e) => {
//       const rect = el.getBoundingClientRect();
//       const x = (e.clientX - rect.left) / rect.width; // 0..1
//       const y = (e.clientY - rect.top) / rect.height; // 0..1

//       // convert to tilt values centered at 0
//       const tiltX = ( (y - 0.5) * -2 ) * maxTilt; // invert so moving up tilts toward viewer
//       const tiltY = ( (x - 0.5) * 2 ) * maxTilt;

//       stateRef.current.mouseX = tiltX;
//       stateRef.current.mouseY = tiltY;

//       // start the RAF loop if not already running
//       if (!stateRef.current.frame) rafLoop();
//     };

//     const rafLoop = () => {
//       const s = stateRef.current;
//       // ease current request toward mouse values
//       s.requestX += (s.mouseX - s.requestX) * 0.18;
//       s.requestY += (s.mouseY - s.requestY) * 0.18;

//       // apply transform
//       el.style.transform = `perspective(900px) rotateX(${s.requestX.toFixed(2)}deg) rotateY(${s.requestY.toFixed(2)}deg) scale(${stateRef.current.isHover ? scale : 1})`;

//       // glare handling
//       if (glare) {
//         const glareEl = el.querySelector('.tilt-glare');
//         if (glareEl) {
//           // position glare based on pointer
//           // map requestY/requestX to 0..100 for background position
//           const gx = ((s.requestY / maxTilt) + 1) / 2 * 100; // 0..100
//           const gy = ((s.requestX / maxTilt) + 1) / 2 * 100; // 0..100
//           glareEl.style.background = `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.55), rgba(255,255,255,0.05) 30%, rgba(255,255,255,0) 60%)`;
//           glareEl.style.opacity = '1';
//         }
//       }

//       // continue frame if hover still active and movement hasn't settled
//       if (s.isHover && (Math.abs(s.mouseX - s.requestX) > 0.01 || Math.abs(s.mouseY - s.requestY) > 0.01)) {
//         s.frame = requestAnimationFrame(rafLoop);
//       } else {
//         s.frame = null; // stop RAF when settled
//       }
//     };

//     // attach listeners
//     el.addEventListener('mouseenter', onEnter);
//     el.addEventListener('mouseleave', onLeave);
//     el.addEventListener('mousemove', onMove);

//     // cleanup
//     return () => {
//       el.removeEventListener('mouseenter', onEnter);
//       el.removeEventListener('mouseleave', onLeave);
//       el.removeEventListener('mousemove', onMove);
//       if (stateRef.current.frame) cancelAnimationFrame(stateRef.current.frame);
//     };
//   }, [maxTilt, scale, glare]);

//   // Render
//   return (
//     <div
//       ref={cardRef}
//       className="relative rounded-2xl bg-white overflow-hidden cursor-pointer select-none"
//       style={{
//         width: `${width}px`,
//         height: `${height}px`,
//         transformStyle: 'preserve-3d',
//         transition: 'transform 300ms cubic-bezier(.2,.9,.2,1)',
//         boxShadow: '0 6px 12px rgba(2,6,23,0.06)',
//       }}
//       aria-hidden={false}
//     >
//       {/* Content layer (card front) */}
//       <div className="absolute inset-0 p-6 flex flex-col justify-between">
//         {children ?? (
//           <>
//             <div>
//               <h3 className="text-lg font-semibold">Tilt Card</h3>
//               <p className="text-sm text-gray-500 mt-1">Hover and move your cursor around the card.</p>
//             </div>
//             <div className="text-xs text-gray-400">Example content · Drop your own elements as children</div>
//           </>
//         )}
//       </div>

//       {/* Optional glare layer */}
//       {glare && (
//         <div
//           className="tilt-glare pointer-events-none absolute inset-0 rounded-2xl"
//           style={{
//             opacity: 0,
//             transition: 'opacity 200ms ease, background 200ms ease',
//             mixBlendMode: 'screen',
//           }}
//         />
//       )}
//     </div>
//   );
// }




import React, { useRef, useEffect } from "react";

export default function TiltCard({
  children,
  width = 320,
  height = 200,
  maxTilt = 12,
  scale = 1.03,
  glare = true,
}) {
  const cardRef = useRef(null);
  const stateRef = useRef({
    frame: null,
    mouseX: 0,
    mouseY: 0,
    requestX: 0,
    requestY: 0,
    isHover: false,
  });

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const onEnter = () => {
      stateRef.current.isHover = true;
      el.style.willChange = "transform";
      el.style.transition = "box-shadow 250ms ease, transform 250ms ease";
      el.style.boxShadow = "0 18px 30px rgba(2,6,23,0.12)";
    };

    const onLeave = () => {
      stateRef.current.isHover = false;
      if (stateRef.current.frame) cancelAnimationFrame(stateRef.current.frame);
      stateRef.current.frame = null;
      stateRef.current.mouseX = 0;
      stateRef.current.mouseY = 0;
      stateRef.current.requestX = 0;
      stateRef.current.requestY = 0;

      el.style.transition = "transform 300ms ease, box-shadow 300ms ease";
      el.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)`;
      el.style.boxShadow = "0 6px 12px rgba(2,6,23,0.06)";

      const glareEl = el.querySelector(".tilt-glare");
      if (glareEl) glareEl.style.opacity = "0";
    };

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      const tiltX = (y - 0.5) * -3 * maxTilt;
      const tiltY = (x - 0.5) * 3 * maxTilt;

      stateRef.current.mouseX = tiltX;
      stateRef.current.mouseY = tiltY;

      if (!stateRef.current.frame) rafLoop();
    };

    const rafLoop = () => {
      const s = stateRef.current;
      s.requestX += (s.mouseX - s.requestX) * 0.18;
      s.requestY += (s.mouseY - s.requestY) * 0.18;

      el.style.transform = `perspective(900px) rotateX(${s.requestX.toFixed(2)}deg) rotateY(${s.requestY.toFixed(2)}deg) scale(${s.isHover ? scale : 1})`;

      if (glare) {
        const glareEl = el.querySelector(".tilt-glare");
        if (glareEl) {
          const gx = ((s.requestY / maxTilt + 1) / 2) * 100;
          const gy = ((s.requestX / maxTilt + 1) / 2) * 100;
          glareEl.style.background = `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.55), rgba(255,255,255,0.05) 30%, rgba(255,255,255,0) 60%)`;
          glareEl.style.opacity = "1";
        }
      }

      if (s.isHover) {
        s.frame = requestAnimationFrame(rafLoop);
      } else {
        s.frame = null;
      }
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("mousemove", onMove);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("mousemove", onMove);
      if (stateRef.current.frame) cancelAnimationFrame(stateRef.current.frame);
    };
  }, [maxTilt, scale, glare]);

  return (
   <div className="min-h-screen w-full flex justify-center items-center bg-[#F1F1F1]">
     <div
      ref={cardRef}
      className="relative rounded-2xl bg-white overflow-hidden cursor-pointer select-none"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        transformStyle: "preserve-3d",
        boxShadow: "0 6px 12px rgba(2,6,23,0.06)",
      }}
    >
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        {children ?? (
          <>
            <div>
              <h3 className="text-lg font-semibold">Tilt Card</h3>
              <p className="text-sm text-gray-500 mt-1">
                Hover and move your cursor around the card.
              </p>
            </div>
            <div className="text-xs text-gray-400">
              Example content · Drop your own elements as children
            </div>
          </>
        )}
      </div>

      {glare && (
        <div
          className="tilt-glare pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            opacity: 0,
            transition: "opacity 200ms ease, background 200ms ease",
            mixBlendMode: "screen",
          }}
        />
      )}
    </div>
   </div>
  );
}
