import React from 'react'

import {social} from "../data"
function Social() {
  return (
    <ul className='flex space-x-4'>
      {social.map((item,index)=>{
        return (
          <li className='flex justify-center items-center text-white hover:text-accent' key={index} >
            <a className='text-[22px]' target={"_blank"} href={item.href}>{item.icon}</a>
          </li>
        )
      })} 
    </ul>
  )
}

export default Social
