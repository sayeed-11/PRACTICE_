import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

gsap.registerPlugin(useGSAP);

const Initial = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".box-1", {
      opacity: 0,
      duration: 1,
      scale: 0,
    //   ease: "elastic.out(1,0.4)",
      delay : 0.5,
      y:200
    })
    tl.from(".box-2", {
      opacity: 0,
      duration: 1,
      scale: 0,
    //   ease: "elastic.out(1,0.4)",
      y:200
    })
    tl.from(".box-3", {
      opacity: 0,
      duration: 1,
      scale: 0,
    //   ease: "elastic.out(1,0.4)",
      y:200
    })
  });

  return (
    <div className="w-full min-h-screen p-10 flex justify-center items-center gap-5 bg-black">
      <div className="w-[100px] aspect-square bg-white box-1 "></div>
      <div className="w-[100px] aspect-square bg-white box-2 "></div>
      <div className="w-[100px] aspect-square bg-white box-3 "></div>
    </div>
  )
}

export default Initial;
