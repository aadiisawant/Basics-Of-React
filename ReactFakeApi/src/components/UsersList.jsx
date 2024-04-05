import { Axios } from "axios";
import { useState, useEffect } from "react";
import axios from "axios";
function UsersList() {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState("");
  
  useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => setData(response.data))
    .catch((error) => setIsError(error.message))
    console.log("In User");
  },[])
  return (
  <>
    <h1>{data}</h1>
  </>
  )
}

export default UsersList;
