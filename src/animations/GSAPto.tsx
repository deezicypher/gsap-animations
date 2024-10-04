import React from 'react'
import gsap  from 'gsap'
import {useGSAP} from '@gsap/react'

const GSAPto : React.FC = () => {
  useGSAP( () => {
    gsap.to(".card",{x:550, repeat: -1 , yoyo:true, rotation:360, duration:2, ease:'elastic'})
  }
  ,[]) 
  return (
    <div><div className='pg'>

    <h3>GSAP.to animation</h3>
    <p> elements animate from current state to new state</p>
  <div className="card">
          
          </div>
  </div></div>
  )
}

export default GSAPto