import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [myData , setMyData] = useState([])
  const [isError, setIsError] = useState("")
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => setMyData(res.data))
    .catch((e) =>{
      setIsError(e.message)
      console.log('Error : ',e);
    })
  },[]) 
    
  return (
    <>
      {isError !=="" && <h2>{isError}</h2>}
      {myData.map((data) => {
        const {id,title,body} = data
        return <div key={id}>
                  <h2>{title}</h2>
                  <p>{body}</p>
        </div>
      })}
    </>
  )
}

export default App
