import React from 'react'


import {services} from "../data"
function Services() {
  return (
    <section id='services' className='section bg-tertiary'>

    <div className='container mx-auto '>
      <div className="flex flex-col items-center text-center">
        <h2 className='section-title
          before:content-services relative
          before:absolute before:opacity-40
          before:-top-[1rem] before:-left-[145px]
          before:hidden before:lg:block tracking-[12px]
          '>Services</h2>
          <p className='subtitle'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, culpa quam error eligendi voluptatibus cumque? ipsum dolor sit amet consectetur adipisicing elit. Saepe quam doloribus neque, architecto suscipit explicabo perferendis! Nisi ipsum voluptas pariatur quisquam vero rerum! Corrupti, eaque non totam iste quo provident? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci ad maxime tempore totam quam nihil!</p>
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        {services.map((item,index)=>{
          return <div className="bg-secondary rounded-2xl p-6" key={index}>
            {/* icons */}
            <div className="text-accent rounded-sm w-12 h-12 flex justify-center items-center ,b-24 text-[28px]">
              {item.icon}
            </div>
            <h4 className='text-xl font-medium mb-2'>{item.name}</h4>
            <p >{item.description}</p>
          </div>
        })}
      </div>
    </div>
      </section>
  )
}

export default Services
