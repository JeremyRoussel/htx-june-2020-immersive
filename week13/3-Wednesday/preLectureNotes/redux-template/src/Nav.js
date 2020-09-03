import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'

const Nav = (props) => {

    const [redirectTo, setRedirectTo] = useState(false)
    

    let handleClick = async () => {
      
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let result = await response.json();
        

        setRedirectTo(true)
       
    }
    
    return (
        redirectTo 
        ?
        <Redirect to="/nav2" />
        :
        <>

            This is a nav component

            <button onClick={handleClick}>Nav</button>
        </>
    )
    
}

export default Nav
