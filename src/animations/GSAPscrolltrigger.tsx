import React,{createRef, useRef} from 'react'
import { ScrollTrigger } from 'gsap/all' 
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

const GSAPscrolltrigger:React.FC = () => {
  const scrollRef = createRef<HTMLDivElement>();

  useGSAP(()=>{
    const boxes = gsap.utils.toArray(scrollRef!.current!.children);
    boxes.forEach((box:any) => {
   gsap.to(box, {
            x: 150 * (boxes.indexOf(box) + 5),
            rotation:360,
            borderRadius:'100%',
            scale:1.5,
            scrollTrigger:{
                trigger:box,
                start:'bottom, bottom',
                end: 'top 20%',
                scrub: true
            }
        })
    },{scope:scrollRef})
  },[])

  return (
    <div className='flex flex-col justify-around gap-2 mt-40'>
    GSAP scrolltrigger
    <p>allows you to create animations that are triggered by the scroll position of the page.
    you can define various actions to be triggered at
        specific scroll points, such as starting or ending an animation,
        scrubbing through animations as the user scrolls, pinning elements to
        the screen, and more.
    </p>
       <div className="mt-20 w-full h-screen" ref={scrollRef}>
          <div className="w-20 h-20 bg-slate-500 rounded-lg " />
          <div className="w-20 h-20 bg-slate-600 rounded-lg " />
      </div>
    </div>
  )
}

export default GSAPscrolltrigger