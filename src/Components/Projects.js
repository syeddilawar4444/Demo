import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

//import projects Data from data.js
import { projectsData } from "../data"

//import projectNavBar from data
import { projectsNav } from "../data"

// import component
import ProjectCard from './ProjectCard'



function Projects() {
  const [nav, setNav] = useState({ bar: "all" })
  const [projects, setPrjects] = useState([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (nav.bar === "all") {
      setPrjects(projectsData)
      // console.log(projectsData)
    } else {
      const newProject = projectsData.filter((project) => {
        return project.category.toLowerCase() === nav.bar
      })
      setPrjects(newProject)
      // console.log("new==>", newProject)
    }


  }, [nav])

  // handle to set the data state
  const handleBar = (e, index) => {
    setNav({ bar: e.target.textContent.toLowerCase() })
    setActive(index)
  }
  return (
    <div>
      <nav className='mb-12 max-w-xl mx-auto'>
        <ul className='flex flex-col md:flex-row justify-evenly items-center text-white'>
          {projectsNav.map((item, index) => {
            return <li key={index} onClick={(e) => { handleBar(e, index) }} className={`${active === index ? "active" : ''} 
          cursor-pointer capitalize mt-2`}>{item.name}</li>
          })}
        </ul>
      </nav>
      <section className='container grid lg:grid-cols-3 gap-y-12 lg:gap-8 mx-auto'>
        {projects.map((item) => {
          return  <ProjectCard item={item} key={item.id} />
          })}
      </section>
    </div>
  )
}

export default Projects
