import React from 'react'
import gsap  from 'gsap'
import {useGSAP} from '@gsap/react'


const GSAPtimeline:React.FC = () => {

  const timeline = gsap.timeline({
    repeat: -1, repeatDelay:1, yoyo:true
  })

  useGSAP(()=>{
    timeline.to("#card-timeline",
    {
        x:250,
        rotation:360,
        borderRadius:'100%',
        duration:2,
        ease: 'back.inOut'
    }
    )
    timeline.to("#card-timeline",
    {
        x:250,
        scale:2,
        rotation:360,
        borderRadius:'12px',
        duration:2,
        ease: 'back.inOut'
    }
    )

    timeline.to("#card-timeline",
    {
        x:500,
        scale:1,
        rotation:360,
        borderRadius:'12px',
        duration:2,
        ease: 'back.inOut'
    }
    )

  })


  return (
    <div className='flex flex-col justify-around gap-2'>
       <h3>GSAPtimeline</h3> 
       <p>the method is used to create a timeline instance that can be used to manage multiple animations</p>
       <div className='bg-slate-600 rounded-md h-max w-max py-2 px-4 cursor-pointer' onClick={()=> {
        if(timeline.paused()){
            timeline.play()
            }else{
                timeline.pause()
                }}}>
        Play/Pause
       </div>
       <div id='card-timeline' className="bg-[#213547] rounded-md h-20 w-20 mt-10  ">
          
          </div>
    </div>
  )
}

export default GSAPtimeline