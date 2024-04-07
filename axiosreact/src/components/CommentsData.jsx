import React, { useEffect, useState } from 'react'
import axiox from './axios'

function CommentsData() {
    const [comments, setComments]= useState([])
    const [isError, setIsError] = useState("")

    useEffect(()=>{
        
        const getAPIcomments = async ()=>{
            try{
            const result = await axiox.get('/comments');
            console.log(result.data);
            setComments(result.data)
        }
        catch(e){
            setIsError(e.message)
        }
    }
        getAPIcomments()
    },[])
    
  return (
    <>
    <h1>COMMENTS!</h1>
    {isError !=="" && <h2>{isError}</h2>}
    {comments.slice(0,50).map((data)=>{
        const {id,email,body} = data;
        return <div key={id}> 
                <h2>{id} : {email}</h2>
                <p>{body}</p>
        </div>
    })}
    </>
  )
}

export default CommentsData
