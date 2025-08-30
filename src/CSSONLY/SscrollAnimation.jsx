import React from "react";

const SscrollAnimation = () => {
  return (
    <div className="w-full min-h-screen">
      {/* First empty section */}
      <div className="min-h-screen w-full"></div>

      {/* Animation section */}
      <div className="min-h-screen w-full flex flex-col gap-5 p-10 md:p-20">
        <h1 className="font-LuckiestGuy text-[10vw] self-start autoBlur leading-10 md:leading-20 lg:leading-30">
          SAYEED ANWAR
        </h1>
        <h1 className="font-LuckiestGuy text-[10vw] self-end autoBlur leading-10 md:leading-20 lg:leading-30">
          Js Developer
        </h1>
        <h1 className="font-LuckiestGuy text-[10vw] self-start autoBlur leading-10 md:leading-20 lg:leading-30">
          WEB DEVELOPER
        </h1>
        <h1 className="font-LuckiestGuy text-[10vw] self-end autoBlur leading-10 md:leading-20 lg:leading-30">
          APP DEVELOPER
        </h1>
      </div>

      {/* Last empty section */}
      <div className="min-h-screen w-full"></div>

      {/* 👇 Styles go inside the component */}
      <style>
        {`
          @keyframes autoBlurAnimation {
            0% {
              filter: blur(40px);
              opacity : 0;
              scale : 0.8;
            }
            40%, 41% {
              filter: blur(0px);
              opacity : 1;
              scale : 1.1;
            }
            100% {
              filter: blur(40px);
              opacity : 0;
              scale : 0.8;
            }
          }

          .autoBlur {
            animation: autoBlurAnimation linear both;
            animation-timeline : view();
            animation-range: entry 50% cover 150%;
          }
        `}
      </style>
    </div>
  );
};

export default SscrollAnimation;
