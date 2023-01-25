import React,{useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHandPointUp } from '@fortawesome/free-solid-svg-icons'


import {Link,animateScroll as scroll} from "react-scroll"


import {ChevronUpIcon} from "@heroicons/react/outline"

function BackToTopBtn() {
    const [show,setShow] = useState(false)

    useEffect(()=>{
         window.addEventListener("scroll",()=>{
          return  window.scrollY > 500 ? setShow(true) : setShow(false)
        }) 
    },[])

    const scrollToTop = ()=>{
        scroll.scrollToTop();
    }

  return ( show && <button onClick={scrollToTop} className='bg-accent w-12 h-12 text-white
   hover:bg-black cursor-pointer 
   rounded-lg fixed right-[30px] bottom-[45px] flex justify-center items-center ' >
        <FontAwesomeIcon className='w-6 h-6 '  size="3x" icon={faHandPointUp} />
    </button>
  )
}

export default BackToTopBtn