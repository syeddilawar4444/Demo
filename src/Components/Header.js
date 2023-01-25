import React,{useState,useEffect} from 'react'

// imports components
import Logo from "../assets/img/logo.png"
import Nav from './Nav'
import NavMobile from './NavMobile'
import Social from "./Social"
export default function Header() {
    const [bg,setBg] = useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
           return window.scrollY > 80 ? setBg(true) : setBg(false)
        })
    },[])


  return (
    <header className={`${bg? "bg-tertiary h-20" : "h-24 "} flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`} >
     <div className='container mx-auto h-full flex items-center justify-between'>
        {/* logo for my  */}
        <a href="/">

        <img className='w-[60px] h-[60px]' src={Logo} alt="" />
        </a>
        {/* nav.js */}
        <div className="hidden lg:block">
            <Nav/>
        </div>
        {/* Social.js */}
        {/* <div className="hidden lg:block">
            <Social/>
        </div> */}
        {/* NavMobile.js */}
        <div className="lg:hidden">
            <NavMobile/>
        </div>
     </div>
    </header>
  )
}
