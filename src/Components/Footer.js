import React from 'react'
import {social} from "../data"

import Logo from "../assets/img/logo.png"

function Footer() {
  return (
    <footer className='bg-tertiary py-9'>
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row
             space-y-6 lg:space-y-0
              items-center justify-between">

                {/* <div className="flex space-x-6 items-center justify-center ">
                    {social.map((info,index)=>{
                        const {icon,href} = info
                        return <a key={index} className='text-white text-[30px] hover:text-accent-hover' href={href}>{icon}</a>
                    })}
                </div> */}
                {/* logo */}
                {/* <div className='w-[300px]'>
                    <img src={Logo} alt="" />
                </div> */}
                {/* copyright */}
                <p className='text-center'>&copy; 2023 Syed Dilawar Hussain. All rights reserved. </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer