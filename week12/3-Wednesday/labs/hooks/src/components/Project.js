import React from 'react'
import ProjectList from './ProjectList';

const Project = ({projects, onDelete}) => {
  return (
    <>
      {projects.map(p => <ProjectList project={p} key={p.id} onDelete={onDelete} /> )}
    </>
  )
}

export default Project
