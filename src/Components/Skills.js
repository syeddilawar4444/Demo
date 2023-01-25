import React from 'react'

// import skill from data.js
import {skills} from "../data"
//  className='flex items-center justify-center'
// className='grid  md:grid-flow-row'
import Tai from "../assets/img/skills/tailwind.svg"
function Skill() {
  return (
    <section className='bg-tertiary py-12'>
        <div className="container mx-auto">
            <div className='grid grid-cols-8 md:grid-flow-row'>
            {skills.map((item,index)=>{
                return(
                    <div key={index} className='flex items-center justify-center' >
                        <img className='w-[96px]' src={item.image} alt="" />
                    </div>
                    )
            })}
            </div>
        </div>
      
    </section>
  )
}

export default Skill
