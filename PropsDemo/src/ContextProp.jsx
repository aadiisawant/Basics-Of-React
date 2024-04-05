import React, { useContext, useState } from 'react'

let context = React.createContext(null);
function ContextProp() {
    const [fname,setFname] = useState("Aditya")
    const [lname,setLname] = useState("Sawant")
  return (
    <context.Provider value={{fname,lname}}>
        This is From Parent Component. <br />
        <ChildB />
    </context.Provider>
  )
}
function ChildB(){
    return(
        <>
          This is From ChildB. <br />
          <ChildC />
        </>
    )
}
function ChildC(){
    return(
        <>
          This is From ChildC. <br />
          <ChildD />
        </>
    )
}
function ChildD(){
    const {fname,lname} = useContext(context)
    return(
        <>
          This is From ChildD. <br />
          
            The Properties from Parent are: <br />
            Firstname: {fname} <br />
            Lastname: {lname}
          
        </>
    )
}
export default ContextProp
