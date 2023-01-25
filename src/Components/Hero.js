import React from 'react'

import MiblePic from "../assets/img/mobile.jpg";
import PlayStore from "../assets/img/playstore.svg"
import AppStore from "../assets/img/appstore.svg"
import Custom from "../assets/custum.svg"

export default function Hero() {
  return (
    <section className="section  flex items-center
     bg-black py-[33px] overflow-hidden  ">

        <div className="container mx-auto h-full justify-aroun">
          <div className="flex flex-col lg:flex-row items-center h-full pt-16">
        
           {/* right side  */}
            <div className=" section flex justify-center py-3 flex-1 h-full">
              <img className=' lg:w-[50%] h-[760px] rounded-xl' src={Custom} alt="" />
             </div>

            {/* Left side */}
             <div className="flex-1 flex flex-col items-center lg:items-start">
              {/* <p className=' text- mb-6 text-4xl text-center md:text-5xl font-script '>Hey, I'm Syed Dilawar Hussain</p> */}

              <h1 className='text-2xl text-center leading-[44px] md:text-4xl
               md:leading-tight lg:text-4xl lg:leading-[1-2] lg:text-start xl:text-5xl
                font-bold md:tracking-[-2]'>Application Titil</h1>
                <p className='text-lg pt-4 
                pb-8 md:pt-6 md:pb-12 mx-w-[80%] lg:max-w-[480px]
                 text-center lg:text-left font-Khula tracking-wider '>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum animi repellat laudantium architecto nam quae illo atque earum, aut, ab fuga quas fugit, sapiente quisquam incidunt quam odio aspernatur at! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores obcaecati error nobis quam quia nam delectus consectetur provident suscipit repellat eligendi fuga dicta enim ipsam dignissimos, ex voluptas molestiae quidem?
                  </p>  
                  <div className="flex flex-col  md:flex-row gap-y-3 md:gap-x-3 md:gap-y-0">
                    <img className='w-[250px]' src={PlayStore} alt="" />
                    <img className='w-[250px]' src={AppStore} alt="" />

                    </div>   
                </div>
          </div>
        </div>

    </section>
  )
}
