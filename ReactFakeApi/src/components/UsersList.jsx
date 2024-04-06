// import { Axios } from "axios";
import { useState, useEffect } from "react";
import { json } from "react-router-dom";
// import axios from "axios";
function UsersList() {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState("");
  const url = 'https://reqres.in/api/users/2';
  useEffect(() => {
    
    const fetchData = async ()=>{
      const result = await fetch(url)
      result.json().then(res =>{
        setData(res)
        console.log(res);
      })

    }
    fetchData();
  },[])
  return (
  <>
    <h1 key={data.data.id}>Name : {data.data.first_name} {data.data.last_name}</h1>
    <h5>Email : {data.data.email}</h5>
  </>
  )
}

export default UsersList;
