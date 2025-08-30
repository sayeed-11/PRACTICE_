// import React from "react";

// const Marquee = () => {
//   return (
//     <div className="wrapper">
//       <div className="item item1"></div>
//       <div className="item item2"></div>
//       <div className="item item3"></div>
//       <div className="item item4"></div>
//       <div className="item item5"></div>
//       <div className="item item6"></div>
//       <div className="item item7"></div>
//       <div className="item item8"></div>
//     </div>
//   );
// };

// export default Marquee;



import React from "react";

const Marquee = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8];
  const itemWidth = 200;
  const duration = 30; // seconds
  const totalItems = items.length;

  const wrapperStyle = {
    width: "90%",
    maxWidth: "1536px",
    marginInline: "auto",
    position: "relative",
    height: "100px",
    marginTop: "5rem",
    overflow: "hidden",
    maskImage:
      "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))"
  };

  const itemBaseStyle = {
    width: `${itemWidth}px`,
    height: "100px",
    backgroundColor: "red",
    borderRadius: "6px",
    position: "absolute",
    // left: `max(${itemWidth * totalItems}px, 100%)`,
    left: `${itemWidth * totalItems}px`,
    animationName: "scrollLeft",
    animationDuration: `${duration}s`,
    animationTimingFunction: "linear",
    animationIterationCount: "infinite"
  };

  const keyframes = `
    @keyframes scrollLeft {
      to {
        left: -${itemWidth}px;
      }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div style={wrapperStyle}>
        {items.map((item, index) => {
          const delay = ((duration / totalItems) * (totalItems - (index + 1))) * -1;
          return (
            <div
              key={index}
              style={{
                ...itemBaseStyle,
                animationDelay: `${delay}s`
              }}
            ></div>
          );
        })}
      </div>
    </>
  );
};

export default Marquee;
