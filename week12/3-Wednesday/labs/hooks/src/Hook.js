import React, {useState, useEffect} from 'react'

const Hook = () => {

    const [count, setCount] = useState(0);

    const [title, setTitle] = useState("Hooks");

    const [arr, setArr] = useState([1, 2, 5, 6, 7])

    const [imgURL, setImgURL] = useState("")

    useEffect(() => {
      fetch('https://randomuser.me/api')
        .then(response => response.json())
        .then(data => {

            let picURL = data.results[0].picture.large

            setImgURL(picURL);
        })
    }, []) // the brackets here indictes no dependencies, and will then only run once!
    

    let hookDisplay = 
    <>
        <button onClick={() => setCount(count +1)} >Increment in {title} </button>
        <br /><br />
        Count in App.js delivered by {title}: {count}
        <br /><br />
       Array in {title}: {arr.map(a => a*2 + ' ')}
       <br /><br />
       Push to Array: <button onClick={() => setArr([...arr, 4])} >Push a 4</button>
        
    </>
    
  return (
    <>
        {/* {hookDisplay} */}
        <br />
        <img src={imgURL} alt="random image" />
    </>
  )
}

export default Hook
