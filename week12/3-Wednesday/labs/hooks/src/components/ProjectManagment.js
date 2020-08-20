import React, {useState, useEffect} from 'react'
import {v1 as uuidv1}from 'uuid'
import AddProject from './AddProject'
import Project from './Project'

const ProjectManagement = () => {

    const [projects, setProjects] = useState([])

    let addProject = (project) => {
      
        setProjects([...projects, project])
    }
    
    useEffect(() => {

        let projectArr = [
            {
                id: uuidv1(),
                title: "Javascript",
                category: 'Front-End'
            },
            {
                id: uuidv1(),
                title: "Node",
                category: 'Back-End'
            },
            {
                id: uuidv1(),
                title: "React",
                category: 'Front-End'
            }
        ]
      
        setProjects([...projects, ...projectArr])

    }, [])

    const onDelete = (id) => {
        
        let oldProjects = [...projects]

        let index = oldProjects.findIndex(project => {
            return project.id === id
        })

        oldProjects.splice(index, 1)

        setProjects([...oldProjects])

    }

  return (
    <>
      {/* {projects.map((project) => {
        return <div key={project.id}>{project.title} {project.category} </div>
      })} */}

      <AddProject addProject={addProject} />

      <Project projects={projects} onDelete={onDelete} />
    </>
  )
}

export default ProjectManagement
