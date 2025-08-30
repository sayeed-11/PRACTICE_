import React from "react";

const Reflect = () => {
  const images = [
    "https://i.pinimg.com/1200x/f0/38/38/f038383985e6289f4c208150818e01ab.jpg",
    "https://i.pinimg.com/1200x/b6/2d/f6/b62df6fc340a991d43dd75dcb05b5b3a.jpg",
    "https://i.pinimg.com/736x/55/34/55/553455038bf4b0b525685955068f049c.jpg",
    "https://i.pinimg.com/1200x/03/58/9d/03589dcd7133b087f053bd0c2e11c625.jpg",

     "https://i.pinimg.com/1200x/f0/38/38/f038383985e6289f4c208150818e01ab.jpg",
    "https://i.pinimg.com/1200x/b6/2d/f6/b62df6fc340a991d43dd75dcb05b5b3a.jpg",
    "https://i.pinimg.com/736x/55/34/55/553455038bf4b0b525685955068f049c.jpg",
    "https://i.pinimg.com/1200x/03/58/9d/03589dcd7133b087f053bd0c2e11c625.jpg",
  ];
  return (
    <div className="w-full min-h-screen p-10">
      {/* <h1 className='text-[10rem] font-extrabold reflect-text leading-32'>SAYEED</h1> */}
      <div className="w-full grid grid-cols-8 gap-x-5 gap-y-[300px] pb-[500px] pt-[100px] perspective-distant">
        {images.map((url, index) => {
          return (
            <div className="relative aspect-square origin-center translate-z-[0px] z-0 hover:z-10 hover:scale-[1.5] hover:translate-z-[100px] transition-all duration-500 rotate-y-[-0deg]">
              <img className="w-full absolute h-full object-cover" src={url} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reflect;
