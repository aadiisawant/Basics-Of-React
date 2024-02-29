import React, { useState } from 'react'
import Product from './Product';

function App() {
  var [a,b] = useState(55);
  return (
    <div className='bg-zinc-800 h-screen w-full text-white p-5'>
      <h1>{a}</h1>
      <button onClick={()=> b(a+1)} className=' px-3 py-2 rounded-md bg-green-500'>Increment</button>
      <Product age={a} data={{name:'Aditya',age:23}}/>
    </div>
  )
}

export default App
