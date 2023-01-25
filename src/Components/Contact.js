import React from 'react'

import { contact } from "../data"

function Contact() {
    return (
        <section id='contact' className='section bg-primary'>
            <div className="container mx-auto">
                {/* title contact me */}
            <div className="flex flex-col items-center text-center">
                <h2 className='section-title before:content-contact
                 relative before:absolute
                 before:opacity-40 before:-top-5 before:-left-[140px]
                 before:hidden before:lg:block tracking-[12px]
                 '>Contact Me</h2>
                 <p className='subtitle'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit numquam repellat, cum architecto excepturi adipisci repudiandae hic voluptates? Atque, minima!</p>
            </div>
            <div className="flex flex-col lg:gap-x-8 lg:flex-row">
                {/* information */}
                <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2 justify-start">
                    {/* reander the information  */}

                    {contact.map((item,index)=>{
                        const {icon,title,description,subtitle} = item

                        return <div key={index} className="flex flex-col lg:flex-row gap-x-4">
                            <div className="text-accent  rounded-sm w-14 h-14 flex items-start justify-center
                            mt-2 mb-4 lg:mb-0 text-2xl">
                                {icon}
                            </div>
                            <div>
                                <h4 className='font-body text-xl mb-1'>{title}</h4>
                                <p className='mb-1'>{subtitle}</p>
                                <p className='text-accent font-normal'>
                                    <a href={item.href} >
                                    {description}
                                    </a>
                                    </p>
                            </div>
                        </div>
                    })}
                </div>
                    {/* form */}
                <form  className='space-y-8 w-full max-w-[780px]'>
                    <div className="flex gap-8">
                        <input className='input' type="text" placeholder='Your Name' />
                        <input className='input' type="text" placeholder='Your Email' />
                    </div>
                    <input className='input' type="text" placeholder='Subject' />
                    <textarea className='textarea' placeholder='Your message'></textarea>
                    <button className="btn btn-lg bg-accent hover:bg-accent-hover">
                        Send Message
                    </button>
                </form>

            </div>

            </div>    
        </section>
    )
}

export default Contact
