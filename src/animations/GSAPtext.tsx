import React from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

const GSAPtext = () => {

  useGSAP(() => {
    gsap.to('.text',{
        ease:'power1.inOut',
        opacity:1,
        y:0
    })

    gsap.fromTo('.para',{
        opacity:0,
        y:0
    },{
        opacity:1,
        y:0,
        delay:1,
        stagger:0.1
        })
  },[])
  return (
        <div className='flex flex-col justify-around gap-2 '>
       <h3 className='text'>GSAP text</h3> 
       <p className='para'>using this method we can achieve various text animations and effects like fade in, fade out, slide in, slide out and many others. </p>
    </div>
  )
}

export default GSAPtext