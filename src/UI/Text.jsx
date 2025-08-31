// import React from "react";
// import './text.css'

// const ScrollText = () => {
//   return (
//     <div className="relative w-full h-[200vh] bg-black flex flex-col items-center justify-center">
//       {/* Fixed background image */}
//       <div
//         className="fixed inset-0"
//         style={{
//           backgroundImage: "url('https://i.pinimg.com/1200x/c7/c0/e1/c7c0e1c119bfc2048d632b7cc2c76ecc.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           zIndex: 0,
//         }}
//       />

//       {/* Text that scrolls */}
//       <div className="relative z-10 flex flex-col items-center justify-center w-full h-screen">
//         <h1
//           className="text-[10rem] font-extrabold uppercase
//                      bg-clip-text text-transparent main-text backdrop-blur-0 bg-red-500"
//           style={{
//             backgroundImage: "url('https://i.pinimg.com/1200x/c7/c0/e1/c7c0e1c119bfc2048d632b7cc2c76ecc.jpg')",
//             backgroundSize: "cover",
//             backgroundAttachment: "fixed", // makes bg fixed in text
//             backgroundPosition: "center",
//           }}
//         >
//           THE SHOP
//         </h1>
//       </div>

//       <div className="relative z-10 flex flex-col items-center justify-center w-full h-screen">
//         <h1
//           className="text-[10rem] font-extrabold uppercase
//                      bg-clip-text text-transparent"
//           style={{
//             backgroundImage: "url('/your-image.png')",
//             backgroundSize: "cover",
//             backgroundAttachment: "fixed",
//             backgroundPosition: "center",
//           }}
//         >
//           SCROLLING
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default ScrollText;

import React from "react";
import "./text.css";

const Text = () => {
  return <div className="w-full h-screen flex justify-between items-center">
    <ImageText url={"https://i.pinimg.com/736x/0a/34/a3/0a34a38f22e93b7ddc19be709177da04.jpg"}/>
     <ImageText url={"https://i.pinimg.com/1200x/ec/3b/24/ec3b2409cb50760e58d9c8109f5e5760.jpg"}/>
     {/* <ImageText url={"https://i.pinimg.com/1200x/5b/17/3c/5b173cf5f45503007ead371d9c1e0965.jpg"}/> */}
     {/* <ImageText url={"https://i.pinimg.com/736x/96/46/0c/96460c3b45421324d1b906ee74707147.jpg"}/> */}
     <ImageText url={"https://i.pinimg.com/736x/c8/c3/c2/c8c3c287f5e5152953b8dfa99ab2a334.jpg"}/>
  </div>;
};

export default Text;

const ImageText = ({url}) => {
  return (
    <div className="w-[450px] h-full relative overflow-hidden">
      <div className="w-full absolute h-full">
        <img
          className="w-full h-full object-cover absolute object-left"
          src={url}
          alt=""
        />
      </div>
      <div className="w-full absolute h-full overflow-hidden bg-black">
        <div
          style={{
            background: `url(${url})`,
            backgroundSize: "cover",
            backgroundPosition: "left",
            backgroundClip: "text",
            color: "transparent",
            backgroundSize: 450,
            backgroundRepeat: "no-repeat",
          }}
          className="absolute w-full h-full font-extrabold font-LuckiestGuy text-[1rem] uppercase leading-3 text-center"
        >
          <div className="cursor-pointer">
            {/* {new Array(1000).fill(0).map((_, i) => (
                <h1 key={i} className="text-right">
                  {new Array(2).fill(0).map((_, idx) => (
                    <span key={idx}>RONALDO</span>
                  ))}
                </h1>
              ))} */}
            <h1>
              I see myself as the best footballer in the world. If you don’t
              believe you are the best, then you will never achieve all that you
              are capable of. I don’t want to be compared to anyone else – I
              want to inspire, to motivate, and to push myself to be better
              every single day. Hard work, discipline, and passion are what
              separate the good from the great, and I’m willing to give
              everything it takes to reach the top. I see myself as the best
              footballer in the world. If you don’t believe you are the best,
              then you will never achieve all that you are capable of. I don’t
              want to be compared to anyone else – I want to inspire, to
              motivate, and to push myself to be better every single day. Hard
              work, discipline, and passion are what separate the good from the
              great, and I’m willing to give everything it takes to reach the
              top. I see myself as the best footballer in the world. If you
              don’t believe you are the best, then you will never achieve all
              that you are capable of. I don’t want to be compared to anyone
              else – I want to inspire, to motivate, and to push myself to be
              better every single day. Hard work, discipline, and passion are
              what separate the good from the great, and I’m willing to give
              everything it takes to reach the top. I see myself as the best
              footballer in the world. If you don’t believe you are the best,
              then you will never achieve all that you are capable of. I don’t
              want to be compared to anyone else – I want to inspire, to
              motivate, and to push myself to be better every single day. Hard
              work, discipline, and passion are what separate the good from the
              great, and I’m willing to give everything it takes to reach the
              top. I see myself as the best footballer in the world. If you
              don’t believe you are the best, then you will never achieve all
              that you are capable of. I don’t want to be compared to anyone
              else – I want to inspire, to motivate, and to push myself to be
              better every single day. Hard work, discipline, and passion are
              what separate the good from the great, and I’m willing to give
              everything it takes to reach the top. I see myself as the best
              footballer in the world. If you don’t believe you are the best,
              then you will never achieve all that you are capable of. I don’t
              want to be compared to anyone else – I want to inspire, to
              motivate, and to push myself to be better every single day. Hard
              work, discipline, and passion are what separate the good from the
              great, and I’m willing to give everything it takes to reach the
              top. I see myself as the best footballer in the world. If you
              don’t believe you are the best, then you will never achieve all
              that you are capable of. I don’t want to be compared to anyone
              else – I want to inspire, to motivate, and to push myself to be
              better every single day. Hard work, discipline, and passion are
              what separate the good from the great, and I’m willing to give
              everything it takes to reach the top. I see myself as the best
              footballer in the world. If you don’t believe you are the best,
              then you will never achieve all that you are capable of. I don’t
              want to be compared to anyone else – I want to inspire, to
              motivate, and to push myself to be better every single day. Hard
              work, discipline, and passion are what separate the good from the
              great, and I’m willing to give everything it takes to reach the
              top. I see myself as the best footballer in the world. If you
              don’t believe you are the best, then you will never achieve all
              that you are capable of. I don’t want to be compared to anyone
              else – I want to inspire, to motivate, and to push myself to be
              better every single day. Hard work, discipline, and passion are
              what separate the good from the great, and I’m willing to give
              everything it takes to reach the top.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
