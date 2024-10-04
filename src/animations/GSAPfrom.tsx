import React from 'react'
import gsap  from 'gsap'
import {useGSAP} from '@gsap/react'


const GSAPfrom : React.FC = () => {
    useGSAP( () => {
      gsap.fromTo(".card-from",
      {
        x:0,
        rotation:0,
  
      },
      {x:550, repeat: -1 , yoyo:true, rotation:360, duration:2, ease:'power1.inOut'})
    }
    ,[]) 
  return (
    <div>

    <h3>GSAP.from animation</h3>
    <p> Elements animate from new state to current state</p>
    <p>Meanwhile fromTo does it from a new state to a new state</p>
  <div className="card-from bg-[#213547] rounded-lg h-20 w-20 mt-10">
  </div></div>
  )
}

export default GSAPfrom