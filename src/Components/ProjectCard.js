import React from 'react'

function ProjectCard({item}) {
  return (
    <div key={item.id} className='flex flex-col items-center text-center  '>
      <div className="mb-4">
        <img className='rounded-2xl' src={item.image} alt="" />
      </div>
      <p className='capitalize text-accent text-sm mb-2'>{item.category}</p>
      <h3 className='text-[22px]  capitalize mb-3 font-Roboto'>{item.name}</h3>
      <div className="  py-2 w-[100%]">
      <p className='text-center font-Hubballi text-[20px] lg:text-justify ' >{item.description}</p>
      </div>

      <div className='flex gap-4 mt-2 '>
      <button className='btn  bg-teal-500 py-2 capitalize hover:bg-teal-800'> 
      <a href={item.github} target="_blank"  > Code</a>
       </button>
      <button className='btn bg-teal-500 py-2 capitalize hover:bg-teal-800'>
        <a href={item.view} target="_blank">View</a>
      </button>
      </div>

    </div>
  )
}

export default ProjectCard
