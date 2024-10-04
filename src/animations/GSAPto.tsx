import React from 'react'
import gsap  from 'gsap'
import {useGSAP} from '@gsap/react'

const GSAPto : React.FC = () => {
  useGSAP( () => {
    gsap.to(".card-to",{x:550, repeat: -1 , yoyo:true, rotation:360, duration:2, ease:'elastic'})
  }
  ,[]) 
  return (
<div >

    <h3>GSAP.to animation</h3>
    <p> Elements animate from current state to new state</p>
    
  <div className="card-to bg-[#213547] rounded-full h-20 w-20 mt-10" >
  </div>
</div>
  )
}

export default GSAPto