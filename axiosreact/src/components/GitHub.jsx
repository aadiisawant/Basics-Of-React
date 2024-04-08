import React, { useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom'
function GitHub() {
    // const [data , setData] = useState({})
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/aadiisawant")
    //     .then((res)=> res.json())
    //     .then((result) => setData(result))
    // },[])
    const data = useLoaderData();
  return (
    <div>
        <h1>Github Profile: </h1>
        username: {data.login}
        <div>
            <img src={data.avatar_url} alt="" height={200}/>
        </div>    
    </div>
  )
}

export default GitHub

export const GithubInfo = async ()=>{
    const res = await fetch("https://api.github.com/users/aadiisawant")
    return res.json();
}
