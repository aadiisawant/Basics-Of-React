import { useCallback, useEffect, useState } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ASDFGHJKLZXCVBNMQWERTYUIOPqazxswedcvfrtgbnhyujmkiopl"
    if(numAllowed) str += "0123456789"
    if(charAllowed) str +="!@#$%^&*()_+{}[]~`_="
    for(let i=1;i<=length;i++){
      let char =Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length,numAllowed,charAllowed,setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-center text-white my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'><input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password' 
        readOnly
        />
        <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded outline-none'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex  items-center gap-x-1'>
            <input type="range"
            min={8}
            max={15}
            value={length}
            className='cursor-pointer' 
            onChange={(e)=> setLength(e.target.value)}/>
            <label>Length: {length}</label>
          </div>
          <div className='flex  items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={numAllowed}
            id='numberInput'
            onChange={()=>{
              setNumAllowed((prev) => !prev)
            }} />
            <label>Numbers</label>
          </div>
          <div className='flex  items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={charAllowed}
            id='numberInput'
            onChange={()=>{
              setCharAllowed((prev) => !prev)
            }} />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
