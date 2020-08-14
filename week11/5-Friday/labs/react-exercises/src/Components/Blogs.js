import React from 'react'

const Blogs = (props) => {
  return (
    <>
      <h1>Blogs</h1>
      <br />
      <h4>Blog ID: {props.match.params.blogsID}</h4>
      <h5>{props.location.pathname}</h5>
    </>
  )
}

export default Blogs
