import React, { useState } from 'react'

function Product() {
  const [a,b] = useState(true)
  return (
    <div className=' p-4 w-full bg-blue-500 h-60 rounded-xl' >
      <h1 className={`${a === false ?'text-red-600':'text-green-600'}`}>{a === false ? 'Hello!' : 'Hi!!'}</h1>
      <button onClick={()=>b(!a)} className='p-2 bg-red-400'>Swap</button>
    </div>
  )
}

export default Product
