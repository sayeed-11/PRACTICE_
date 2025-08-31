import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import './gsap.css';

const images = [
  "https://i.pinimg.com/1200x/e5/65/66/e56566a7c153f4e982e39dae9cd64f56.jpg",
  "https://i.pinimg.com/736x/d7/af/1b/d7af1bd456534206a5ef90e7386acabf.jpg",
  "https://i.pinimg.com/736x/14/35/56/1435561f8dd513a742cd283f14c7a8f7.jpg",
  "https://i.pinimg.com/1200x/a3/20/f0/a320f02203ee0d15a990d816f9c9081c.jpg",
  "https://i.pinimg.com/736x/df/cc/e5/dfcce55a881e7a03f9789865852fff44.jpg",
];

const Form = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="min-h-screen w-full"></div>
      <AnimationDiv />
      <div className="min-h-screen w-full"></div>
    </div>
  );
};

export default Form;

const AnimationDiv = () => {
  const imageContainerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    if (!imageContainerRef.current) return;

    gsap.to("#main", {
      scrollTrigger: {
        trigger: "#main",
        start: "top 0%",
        end: "top -100%",
        scrub: true,
        markers: true,
        pin: true,
      },
    });

    gsap.to(imageContainerRef.current, {
      transform: "perspective(800px) rotateX(0deg) scale(1)",
      opacity: 1,
      scrollTrigger: {
        trigger: "#main",
        start: "top 70%",
        end: "top 40%",
        scrub: true,
        markers: true,
      },
    });

    gsap.to("#box-1", {
      transform:
        "perspective(800px) rotateY(-25deg) translateZ(-500px) translateX(500px)",
      scrollTrigger: {
        trigger: "#main",
        start: "top 40%",
        end: "top 0%",
        scrub: true,
        markers: true,
      },
    });

    gsap.to("#box-2", {
      transform:
        "perspective(800px) rotateY(-25deg) translateZ(-250px) translateX(250px)",
      scrollTrigger: {
        trigger: "#main",
        start: "top 40%",
        end: "top 0%",
        scrub: true,
        markers: true,
      },
    });

    gsap.to("#box-3", {
      transform:
        "perspective(800px) rotateY(25deg) translateZ(-500px) translateX(-500px)",
      scrollTrigger: {
        trigger: "#main",
        start: "top 40%",
        end: "top 0%",
        scrub: true,
        markers: true,
      },
    });

    gsap.to("#box-4", {
      transform:
        "perspective(800px) rotateY(25deg) translateZ(-250px) translateX(-250px)",
      scrollTrigger: {
        trigger: "#main",
        start: "top 40%",
        end: "top 0%",
        scrub: true,
        markers: true,
      },
    });
  }, []);

  return (
    <div
      id="main"
      className="min-h-screen w-full bg-[#F1F1F1] flex flex-col py-10 "
    >
      <div className="w-full relative flex justify-center items-start h-[400px]">
        <div
          ref={imageContainerRef}
          className="absolute w-[20%] aspect-[1/1.3]"
          style={{
            opacity: 0,
            transform: "perspective(800px) rotateX(0deg) scale(0)",
          }}
        >
          {images.map((url, index) => (
            <div
              key={index}
              id={`box-${index + 1}`}
              className="absolute w-full h-full bg-white p-1.5 rounded-2xl shadow-xl"
              style={{
                transform: "perspective(800px) rotateY(0deg) translateX(0px)", // ✅ child doesn't need perspective
                backfaceVisibility: "hidden",
              }}
            >
              <img
                className=" w-full h-full object-cover rounded-xl"
                src={url}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>

      <TextDiv />
    </div>
  );
};

const TextDiv = () => {
  const [textShadow, setTextShadow] = useState("");
  useEffect(() => {
    const shadows = [];
    for(let i=1; i<=7; i++){
      const shodow = `${i}px ${-i}px 0px #d9d9d9`;
      shadows.push(shodow);
    }
   setTextShadow(shadows.join(','));
    
  },[])
  const names = ["Maradona", "Ronaldo", "Pele", "Neymar"];
  useGSAP(() => {
    gsap.to("#name-box", {
      opacity: 1,
      transform: "perspective(800px) rotateX(0deg) translateZ(0px)",
      scrollTrigger: {
        trigger: "#main",
        start: "top 40%",
        end: "top 0%",
        scrub: true,
        markers: true,
      },
    });

    gsap.to("#name-box", {
      left: "-100%",
      scrollTrigger: {
        trigger: "#main",
        start: "top 0%",
        end: "top -100%",
        scrub: true,
        markers: true,
      },
    });
  });
  return (
    <div className="text-black overflow-hidden relative h-[200px]">
      <div
        id="name-box"
        style={{
          left: 0,
          opacity: 0,
          transform: "perspective(800px) rotateX(90deg) translateZ(-100px)",
        }}
        className="w-full flex justify-start gap-x-20 absolute px-10"
      >
        {names.map((name, index) => {
          return (
            <h1 style={{
            }} className="shrink-0 font-LuckiestGuy text-[10rem]  shadow-text text-[#000000]" key={index}>
              {name}
            </h1>
          );
        })}
      </div>
    </div>
  );
};
