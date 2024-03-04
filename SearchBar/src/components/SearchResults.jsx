import React from 'react'
import './SearchResults.css'
function SearchResults({results}) {
  return (
    <div className='results-list'>
      {
        results.map((result, id)=>{
            return <div key={id}>{result.name}</div>
        })
      }
    </div>
  )
}

export default SearchResults
