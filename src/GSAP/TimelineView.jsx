import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const TimelineView = () => {
    const timeline = gsap.timeline({
        repeat : -1,
        yoyo : true,
        repeatDelay : 1
    })

    useGSAP(() => {
        timeline.to('#box', {
            x : 250,
            borderRadius : "50%",
            duration : 1,
            ease : 'back.inOut'
        })
        timeline.to('#box', {
            y : 250,
            borderRadius : "0%",
            duration : 1,
            ease : 'back.inOut'
        })
        timeline.to('#box', {
            y : -250,
            borderRadius : "50%",
            duration : 1,
            ease : 'back.inOut'
        })
        timeline.to('#box', {
            y : 0,
            borderRadius : "0%",
            duration : 1,
            ease : 'back.inOut'
        })
        timeline.to('#box', {
            x : 500,
            borderRadius : "50%",
            duration : 1,
            ease : 'back.inOut'
        })
    }, [])


  return (
    <div className='w-full min-h-screen flex items-center p-10'>
        <div id='box' className='w-[100px] aspect-square bg-white'></div>
    </div>
  )
}

export default TimelineView