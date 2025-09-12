import React from 'react'

const Mixblend = () => {
  return (
    <div className='min-h-screen w-full flex justify-center items-center'>
        <div className='relative w-[35vw] aspect-square border-1 border-white'>
            <div className='absolute w-full h-full bg-white'>

            </div>

            <div className='absolute w-full h-full text-[5vw] flex justify-center items-center font-AbrilFatface'>
                <h1 style={{
                    mixBlendMode : "difference"
                }}>Sayeed Anwar</h1>
            </div>
        </div>
    </div>
  )
}

export default Mixblend