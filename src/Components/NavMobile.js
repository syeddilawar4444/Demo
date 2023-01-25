import React from 'react'
// import navigation to data.js
import { navigation } from "../data"

// import icons
import { XIcon } from "@heroicons/react/outline"
import { MenuAlt3Icon } from "@heroicons/react/outline"
//import component
import Social from './Social'
// import framer motion 
import { motion } from "framer-motion"
// import link
import { Link } from "react-scroll"
import { useState } from 'react'
function NavMobile() {
    const [isOpen, setIsOpen] = useState(false)
    //create Variants to framer motion
    const circleVariants = {
        hidden: {
            scale: 0,
        },
        visible: {
            scale: 180,
            transition: {
                type: "spring",
                stiffness: 160,
                damping: 60,
            },
        },
    }

    const ulVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.1,
            }
        }

    }
    return (
        <nav className='relative'>
            <div onClick={() => setIsOpen(true)} className="cursor-pointer text-white hover:text-purple-500">
                <MenuAlt3Icon className='w-9 h-9' />
            </div>

            {/* Circle */}
            <motion.div variants={circleVariants} initial="hidden" animate={isOpen ? "visible" : "hidden"} className="w-4 h-4 rounded-full bg-accent fixed top-0 right-0" ></motion.div>
            {/* Menu  */}
            <motion.ul variants={ulVariants} initial="hidden" animate={isOpen ? 'visible' : ''} className={`${isOpen ? 'right-0' : '-right-full'} fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}>
                <div onClick={()=>setIsOpen(false)} className='cursor-pointer absolute top-8 right-4'>
                <XIcon  className='w-8 h-8'/>
                </div>
                {navigation.map((item, index)=>{
                    return(
                        <li key={index} className="mb-7">
                            <Link onClick={()=> setIsOpen(false)} className='text-xl cursor-pointer capitalize' to={item.href} smooth={true} duration={500} offset={-70}>{item.name}</Link>
                        </li>
                    )
                })}
            </motion.ul>
        </nav>
    )
}

export default NavMobile
