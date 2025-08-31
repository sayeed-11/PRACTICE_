import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'

const Append = () => {
    const boxRef = useRef(null);
    const [elements, setElements] = useState([]);
    useEffect(() => {
        const elements = boxRef.current.children;
        setElements(elements);
    })

    const handleAppend = () => {
        boxRef.current.append(elements[0]);
    }

    useGSAP(() => {
        gsap.from("#element", {
            scale : 0,
            opacity : 0,
            duration : 0.3
        })
    })
    
  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
        <div className='w-[45%] flex flex-col gap-5'>
            <div ref={boxRef} className='w-full p-2 border-1 border-white rounded-xl flex flex-col gap-2'>
                {
                    [1,2,3,4,5,6,7,8,9,10].map((element) => {
                        return(
                            <div id='element' key={element} className='w-full bg-white text-black rounded-md py-3'>
                                <h1 className='text-center'>Element-{element}</h1>
                            </div>
                        )
                    })
                }
            </div>
            <button onClick={handleAppend} className='w-full bg-white/50 py-3 rounded-md'>Add Element</button>
        </div>
    </div>
  )
}

export default Append