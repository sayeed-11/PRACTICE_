import React from "react";

const Poster = () => {
  return (
    <>
      <div className="w-full aspect-[1/0.5] bg-gradient-to-tr from-[#333333] to-[#000000] grid grid-cols-2 relative">
       <div className="h-full relative flex flex-col items-end">
        <img className="h-full w-full absolute object-cover rotate-12 scale-[0.7] -translate-y-[100px] -translate-x-[90px] rounded-full" src="https://image.hm.com/assets/hm/0e/7d/0e7d06c650cbc210a88e24dfb6e27f490db45b34.jpg?imwidth=1536" alt="" />
        <h1 className="text-[6rem] font-extrabold text-black -rotate-90 absolute top-1/2 translate-y-[-50%] translate-x-[50px] bg-white px-5">BLACK</h1>
        <h1 className="text-[6rem] font-extrabold text-white -rotate-90 absolute top-1/2 translate-y-[-50%] translate-x-[30px] z-10  leading-20">&</h1>
       </div>
       <div className="h-full relative">
        <img className="h-full w-full absolute object-cover -rotate-12 scale-[0.7] -translate-y-[100px] translate-x-[90px] rounded-full"  src="https://image.hm.com/assets/hm/33/ba/33baae09874c405acf84eca1467aea992e9993f4.jpg?imwidth=1536" alt="" />
        <h1 className="text-[6rem] font-extrabold text-white -rotate-90 absolute top-1/2 translate-y-[-50%] -translate-x-[60px] bg-[#555555] px-5">WHITE</h1>
       </div>

       <div className="absolute top-0 left-1/2 translate-x-[-50%] text-white flex flex-col items-center font-extrabold">
        <h1 className="text-[2rem] bg-gradient-to-b from-[#FFFFFF]/50 to-[#333333] bg-clip-text text-transparent">MEN</h1>
        <h1 className="text-[4rem] leading-10 bg-gradient-to-t from-[#FFFFFF] to-[#333333] bg-clip-text text-transparent py-2">COLLECTION</h1>
       </div>
       <div className="absolute bottom-0 left-0 text-white p-10 flex justify-between w-full">
            <div className="flex items-center">
                <h1 className="text-[6rem] font-extrabold">60</h1>
                <div>
                    <h1 className="text-[1rem]">UP TO</h1>
                    <h1 className="text-[4rem] leading-10">%</h1>
                </div>
                <h1 className="text-[3rem] font-extrabold px-5">HURRY UP</h1>
            </div>
            <h1 className="text-[6rem] font-bold">SHOP NOW</h1>
       </div>
      </div>
    </>
  );
};

export default Poster;
