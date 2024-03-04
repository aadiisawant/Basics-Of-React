import React from 'react'
import './FetchedResult.css'
function FetchedResult({result}) {
  return (
    <div className='search-result' onClick={(e)=>{ alert(`User : ${result.name}`)}}>{result.name}</div>
  )
}

export default FetchedResult
