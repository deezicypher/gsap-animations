import React from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'


const GSAPstagger:React.FC = () => {

  useGSAP(() => {
    gsap.to('.stagger-box',
    {
        y:250,
        rotation:360,
        borderRadius:'100%',
        repeat:-1,
        yoyo:true,
        stagger:{
            amount:1.5,
            grid:[2,1],
            axis:'y',
            ease: 'circ.inOut',
            from: 'center'
        }
    }
    )
  },[])

  return (
    <div className='flex flex-col justify-around gap-2 mt-20'>
       <h3>GSAP stagger</h3> 
       <p>this feature allows you to apply animations with a staggered delay to group of elements</p>
       <div className=" mb-40">
        <div className="flex gap-5">
          <div className="w-20 h-20 bg-indigo-200 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-300 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-400 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-500 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-600 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-700 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-800 rounded-lg stagger-box" />
        </div>
      </div>
    </div>

  )
}

export default GSAPstagger