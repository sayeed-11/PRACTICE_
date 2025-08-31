import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import "./gsap.css";

const images = [
  "https://i.pinimg.com/1200x/e5/65/66/e56566a7c153f4e982e39dae9cd64f56.jpg",
  "https://i.pinimg.com/736x/d7/af/1b/d7af1bd456534206a5ef90e7386acabf.jpg",
  "https://i.pinimg.com/736x/14/35/56/1435561f8dd513a742cd283f14c7a8f7.jpg",
  "https://i.pinimg.com/1200x/a3/20/f0/a320f02203ee0d15a990d816f9c9081c.jpg",
  "https://i.pinimg.com/736x/df/cc/e5/dfcce55a881e7a03f9789865852fff44.jpg",

  "https://i.pinimg.com/1200x/e5/65/66/e56566a7c153f4e982e39dae9cd64f56.jpg",
  "https://i.pinimg.com/736x/d7/af/1b/d7af1bd456534206a5ef90e7386acabf.jpg",
  "https://i.pinimg.com/736x/14/35/56/1435561f8dd513a742cd283f14c7a8f7.jpg",
  "https://i.pinimg.com/1200x/a3/20/f0/a320f02203ee0d15a990d816f9c9081c.jpg",
  "https://i.pinimg.com/736x/df/cc/e5/dfcce55a881e7a03f9789865852fff44.jpg",

  "https://i.pinimg.com/1200x/e5/65/66/e56566a7c153f4e982e39dae9cd64f56.jpg",
  "https://i.pinimg.com/736x/d7/af/1b/d7af1bd456534206a5ef90e7386acabf.jpg",
  "https://i.pinimg.com/736x/14/35/56/1435561f8dd513a742cd283f14c7a8f7.jpg",
  "https://i.pinimg.com/1200x/a3/20/f0/a320f02203ee0d15a990d816f9c9081c.jpg",
  "https://i.pinimg.com/736x/df/cc/e5/dfcce55a881e7a03f9789865852fff44.jpg",

  "https://i.pinimg.com/1200x/e5/65/66/e56566a7c153f4e982e39dae9cd64f56.jpg",
  "https://i.pinimg.com/736x/d7/af/1b/d7af1bd456534206a5ef90e7386acabf.jpg",
  "https://i.pinimg.com/736x/14/35/56/1435561f8dd513a742cd283f14c7a8f7.jpg",
  "https://i.pinimg.com/1200x/a3/20/f0/a320f02203ee0d15a990d816f9c9081c.jpg",
  "https://i.pinimg.com/736x/df/cc/e5/dfcce55a881e7a03f9789865852fff44.jpg",

  "https://i.pinimg.com/1200x/e5/65/66/e56566a7c153f4e982e39dae9cd64f56.jpg",
  //   "https://i.pinimg.com/736x/d7/af/1b/d7af1bd456534206a5ef90e7386acabf.jpg",
  //   "https://i.pinimg.com/736x/14/35/56/1435561f8dd513a742cd283f14c7a8f7.jpg",
  //   "https://i.pinimg.com/1200x/a3/20/f0/a320f02203ee0d15a990d816f9c9081c.jpg",
  //   "https://i.pinimg.com/736x/df/cc/e5/dfcce55a881e7a03f9789865852fff44.jpg",
];

const ScrollSlider = () => {
  return (
    <div className="min-h-screen w-full">
      <AnimatedCards />
      <AnimationDiv />
      <div className="min-h-screen w-full"></div>
    </div>
  );
};

export default ScrollSlider;

const AnimatedCards = () => {
  const cards = [
    "https://i.pinimg.com/1200x/e5/65/66/e56566a7c153f4e982e39dae9cd64f56.jpg",
    "https://i.pinimg.com/736x/d7/af/1b/d7af1bd456534206a5ef90e7386acabf.jpg",
    "https://i.pinimg.com/736x/14/35/56/1435561f8dd513a742cd283f14c7a8f7.jpg",
    "https://i.pinimg.com/1200x/a3/20/f0/a320f02203ee0d15a990d816f9c9081c.jpg",
    "https://i.pinimg.com/736x/df/cc/e5/dfcce55a881e7a03f9789865852fff44.jpg",
  ];

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="px-10 flex justify-center items-center gap-5">
        {cards.map((url, index) => {
          return (
            <Card url={url}/>
          );
        })}
      </div>
    </div>
  );
};



const Card = ({url}) => {

  const cardRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    // Create animation but don't auto-play
    animRef.current = gsap.to(cardRef.current, {
      transform : "perspective(800px) rotateX(25deg)",
      duration: 0.3,
      paused: true, // 👈 start paused
    });
  }, []);

  const handleMouseEnter = () => animRef.current.play();
  const handleMouseLeave = () => animRef.current.reverse();
    return(
        <div
              ref={cardRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ 
                transformStyle: "preserve-3d",
                transform : "perspective(800px) rotateX(0deg)",
                transformOrigin : "bottom"
             }}
              className=" w-[250px] aspect-[1/1.4] relative card-box"
            >
              <img
                className="absolute w-full h-full object-cover"
                src={url}
                alt=""
              />
            </div>
    )
}

const AnimationDiv = () => {
  const imageContainerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    if (!imageContainerRef.current) return;

    gsap.to(imageContainerRef.current, {
      transform: "rotateX(0deg) scale(1)",
      //   scale: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: "#main",
        start: "top 70%",
        end: "top 40%",
        scrub: true,
        // markers: true,
      },
    });

    // Second tween: spin around Y while keeping tilt
    gsap.to(imageContainerRef.current, {
      rotateY: 360,
      scrollTrigger: {
        trigger: "#main",
        start: "top top",
        end: "+=200%",
        scrub: true,
        // markers: true,
        pin: true,
      },
    });

    // gsap.to(imageContainerRef.current, {
    //   transform: "perspective(800px) rotateX(-15deg) scale(1)",
    //   opacity: 1,
    //   scrollTrigger: {
    //     trigger: "#main",
    //     start: "top 70%",
    //     end: "top 40%",
    //     scrub: true,
    //     markers: true,
    //   },
    // });

    // gsap.to(imageContainerRef.current, {
    //   transform: "perspective(800px) rotateY(360deg) rotateX(-15deg)",
    //   opacity: 1,
    //   scrollTrigger: {
    //     trigger: "#main",
    //     start: "top 0%",
    //     end: "top -100%",
    //     scrub: true,
    //     markers: true,
    //     pin: true,
    //   },
    // });

    const totalCards = imageContainerRef.current.children.length;
    const len = totalCards - 1;
    Array.from(imageContainerRef.current.children).forEach((child, index) => {
      const i = len - index;
      const ROTATEY = 360 / totalCards;
      const TRANSLATEZ = 200 / (2 * Math.tan(Math.PI / totalCards)) + 25;

      gsap.to(child, {
        transform: `rotateY(${ROTATEY * i}deg) translateZ(${TRANSLATEZ}px)`,
        scrollTrigger: {
          trigger: "#main",
          start: "top 40%",
          end: "top 0%",
          scrub: true,
          //   markers: true,
        },
      });
    });
  }, []);

  return (
    <div
      id="main"
      className="h-screen w-full bg-[#000000] flex flex-col py-10 overflow-hidden"
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          transform: "perspective(2500px) rotateY(0deg) rotateX(-7deg)",
        }}
        className="w-full relative flex-1 flex justify-center items-start h-[400px]"
      >
        <div
          ref={imageContainerRef}
          className="absolute w-[200px] aspect-[1/1.3]"
          style={{
            opacity: 0.5,
            transform: "rotateX(-90deg) scale(0.5)",
            transformStyle: "preserve-3d",
          }}
        >
          {images.map((url, index) => (
            <div
              key={index}
              id={`box-${index + 1}`}
              className="absolute w-full h-full bg-white p-1.5 rounded-2xl overflow-hidden hover:brightness-150 translate-y-12 transition-shadow hover:shadow-2xl duration-300"
              style={{
                transform: "rotateY(0deg) translateZ(0px)", // ✅ child doesn't need perspective
                backfaceVisibility: "hidden",
                WebkitBoxReflect:
                  "below 5px linear-gradient(transparent, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.3))",
                // boxShadow : "0px 0px 150px #FFFFFF"
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
    for (let i = 1; i <= 7; i++) {
      const shodow = `${i}px ${-i}px 0px #d9d9d9`;
      shadows.push(shodow);
    }
    setTextShadow(shadows.join(","));
  }, []);
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
        // markers: true,
      },
    });

    gsap.to("#name-box", {
      left: "-100%",
      scrollTrigger: {
        trigger: "#main",
        start: "top 0%",
        end: "+=200%",
        scrub: true,
        // markers: true,
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
            <h1
              style={{ textShadow: "0px 0px 50px #FFFFFF" }}
              className="shrink-0 font-LuckiestGuy text-[10rem] brightness-200 shadow-text blur-[0.5px] text-[#F1F1F1]"
              key={index}
            >
              {name}
            </h1>
          );
        })}
      </div>
    </div>
  );
};
