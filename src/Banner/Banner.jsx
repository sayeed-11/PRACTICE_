import React from 'react'
import pic from '../assets/back.jpg'
import myPic from '../assets/sayeed.jpg'

const color = "#2B59B0";

const Banner = () => {
  return (
    <div className='flex justify-center items-center text-black w-full min-h-screen'>
        <div className='w-[90%] aspect-[4/1] border-2 relative'>
            <img className='w-full absolute h-full object-cover' src={pic} alt="" />
            <div className='absolute h-full w-full flex flex-col items-end py-5 pr-15'>
                <div>
                    <p className="text-[#FFFFFF] font-barlow border-[1.5px] border-[#2B59b0] px-5 py-1 text-[1.5rem]">Full Stack Javascript Developer</p>
                </div>
                <div>
                    <p className='text-white font-bruno-ace text-[1.5rem]'>Hi, I am</p>
                    <h1 className={`text-[#2B59B0] font-bruno-ace text-[4rem] leading-10`}>SAYEED ANWAR</h1>
                    <p className='font-bruno-ace text-white text-[1.45rem]'>MERN STACK DEVELOPER <span className='text-[#2B59B0]'>&</span> APP DEVELOPER</p>
                </div>
                <div className='flex flex-wrap mt-3 gap-2'>
                    <button className='bg-[#2B59B0] px-3 py-1 text-white font-barlow text-sm ' >React.js</button>
                    <button className='bg-[#2B59B0] px-3 py-1 text-white font-barlow text-sm' >React Native</button>
                    <button className='bg-[#2B59B0] px-3 py-1 text-white font-barlow text-sm' >Node.js</button>
                    <button className='bg-[#2B59B0] px-3 py-1 text-white font-barlow text-sm' >Express.js</button>
                    <button className='bg-[#2B59B0] px-3 py-1 text-white font-barlow text-sm' >MongoDB</button>
                    <button className='bg-[#2B59B0] px-3 py-1 text-white font-barlow text-sm' >MySQL</button>
                </div>
                <div className='flex flex-wrap mt-2 gap-2'>
                    <button className='bg-[#2B59B0] px-3 py-1 text-white font-barlow text-sm' >Javascript</button>
                    <button className='bg-[#2B59B0] px-3 py-1 text-white font-barlow text-sm' >Java</button>
                    <button className='bg-[#2B59B0] px-3 py-1 text-white font-barlow text-sm' >Python</button>
                    <button className='bg-[#2B59B0] px-3 py-1 text-white font-barlow text-sm' >Tailwind css</button>
                    <button className='bg-[#2B59B0] px-3 py-1 text-white font-barlow text-sm' >Firebase</button>
                    <button className='bg-[#2B59B0] px-3 py-1 text-white font-barlow text-sm' >Supabase</button>
                </div>
                <div className='flex mt-5 items-center gap-3'>
                    <p className='text-white font-barlow text-xl'>sayeedanwar593@gmail.com</p>
                    <button className='bg-white py-2 px-2.5 rounded-'>
                        <i className='fa-solid fa-envelope text-[#2B59B0] text-xl'/>
                    </button>
                </div>
            </div>
            {/* <img className='absolute h-[50%] object-cover left-[35%] aspect-square rounded-full' src={myPic} alt="" /> */}
        </div>
    </div>
  )
}

export default Banner