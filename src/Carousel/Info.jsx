import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Info = () => {
  const location = useLocation();
  const { data } = location.state || {};
  console.log(data);

  const [isNavigate, setNavigate] = useState(false);
  useEffect(() => {
    setNavigate(true);
  }, []);
  return (
    <div
      style={{
        scale: isNavigate ? 1 : 2,
        opacity: isNavigate ? 1 : 0,
      }}
      className="bg-black w-full min-h-screen transition-all duration-1000 flex flex-col justify-center items-center p-10"
    >
      <div className="grid grid-cols-2">
        <div>
          <h1 className="font-AbrilFatface text-[#bd0000] title-shadow text-[4rem]">
            {data.name}
          </h1>
          <p className="font-AbrilFatface text-[1.5rem]">{data.job_title}</p>
          <div className="pt-5 font-barlow text-xl flex flex-col gap-y-2 text-white/50">
            <p className="">{data.description}</p>
            <p className="">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
              deleniti eum veritatis quibusdam veniam voluptatum, dignissimos
              officiis, voluptatem rerum sequi ipsam? Inventore nihil aut sint
              dolore alias, voluptas accusantium ea labore commodi minus eos
              temporibus expedita iure aspernatur itaque eius?
            </p>
          </div>
        </div>
        <div className="w-full flex justify-end items-start">
          <div className="w-[70%]">
            <img className="w-full" src={data.image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;

//   <h1
//     // style={{
//     //   transform: isNavigate ? "translateY(0px) scale(1)" : "translateY(0px) scale(5)",
//     // transition: "transform 1s ease-in-out, opacity 1s ease-in-out, scale 1s ease-in-out",
//     //   transitionDelay : "0.1s",
//     //   opacity : isNavigate ? 1 : 0
//     // }}
//     className="font-AbrilFatface text-[5rem] text-[#bd0000]"
//   >
//     LOREM
//   </h1>
//   <p
// //   style={{
// //       transform: isNavigate ? "translateY(0px) scale(1)" : "translateY(0px) scale(5)",
// //        transition: "transform 1s ease-in-out, opacity 1s ease-in-out, scale 1s ease-in-out",
// //       transitionDelay : "0.1s",
// //       opacity : isNavigate ? 1 : 0
// //     }}
//      className="font-AbrilFatface text-[2rem] text-center">
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsum
//     inventore voluptatum laboriosam cupiditate harum itaque maxime
//     perferendis error rem, consequatur nesciunt provident sequi ducimus
//     earum quas, possimus sit quibusdam?
//   </p>
