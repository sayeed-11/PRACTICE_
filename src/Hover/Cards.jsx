import React from 'react'
import './Hover.css'

  const images = [
    "https://i.pinimg.com/1200x/f0/38/38/f038383985e6289f4c208150818e01ab.jpg",
    "https://i.pinimg.com/1200x/b6/2d/f6/b62df6fc340a991d43dd75dcb05b5b3a.jpg",
    "https://i.pinimg.com/736x/55/34/55/553455038bf4b0b525685955068f049c.jpg",
    "https://i.pinimg.com/1200x/03/58/9d/03589dcd7133b087f053bd0c2e11c625.jpg",

     "https://i.pinimg.com/1200x/f0/38/38/f038383985e6289f4c208150818e01ab.jpg",
    "https://i.pinimg.com/1200x/b6/2d/f6/b62df6fc340a991d43dd75dcb05b5b3a.jpg",
    // "https://i.pinimg.com/736x/55/34/55/553455038bf4b0b525685955068f049c.jpg",
    // "https://i.pinimg.com/1200x/03/58/9d/03589dcd7133b087f053bd0c2e11c625.jpg",
  ];

const Cards = () => {
  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
        <div className='container flex items-center justify-center gap-1 w-full'>
            {
                images.map(url => {
                    return(
                        <div className='card w-[200px] reflect-box'>
                            <img src={url} alt="" />
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Cards