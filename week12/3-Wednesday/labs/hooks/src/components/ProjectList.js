import React from 'react'

const ProjectList = ({project, onDelete}) => {

    
  return (
    <>
      {project.title} {project.category} <button onClick={() => onDelete(project.id)}>Delete</button><br />
    </>
  )
}

export default ProjectList
