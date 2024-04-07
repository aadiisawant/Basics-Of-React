import React, { useState } from 'react'
import axios from "./axios";
function PostsData() {
    const [myData , setMyData] = useState([])
    const [isError, setIsError] = useState("")

    const API = "https://jsonplaceholder.typicode.com"


  // note: using axios to fetch details
  // useEffect(()=>{
  //   axios.get("https://jsonplaceholder.typicode.com/posts")
  //   .then((res) => setMyData(res.data))
  //   .catch((e) =>{
  //     setIsError(e.message)
  //     console.log('Error : ',e);
  //   })
  // },[]) 
    
  // NOTE : Using Async Await
  // using the base url from axios file (src/axios)

    const getAPIdata = async ()=>{
        
        try{
        const result =await axios.get("/posts")
        setMyData(result.data)
        
        }catch(e){
          setIsError(e.message)
        }
      }
      getAPIdata()
    
      return (
        <>
          
          {isError !=="" && <h2>{isError}</h2>}
          {myData.slice(0,12).map((data) => {
            const {id,title,body} = data
            return <div key={id}>
                      <h2>{title}</h2>
                      <p>{body}</p>
            </div>
          })}
        </>
      )
}

export default PostsData
