
import React, { useState, useEffect } from 'react'


const Hooks = () => {

    const [data, setData] = useState([]);

    //acts like componentDidMount
    useEffect(() => {
        try {
            fetch('http://localhost:3001/api')
            .then(result => result.json())
            .then(serverData =>{

                setData(serverData)
            })

        }
        catch{
            console.log('fetch failed')
        }

    }, [])


    return (
        <>
            <h1>Hooks Component</h1>
            {data.map(d => {
                return <div>{d.username}</div>
            })}
        </>
    )
}

export default Hooks
