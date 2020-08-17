import React from 'react'

// reset the count in app.js

const H2 = (props) => {
  return (
    <>
      <button onClick={props.reset}>Reset</button>
    </>
  )
}

export default H2
