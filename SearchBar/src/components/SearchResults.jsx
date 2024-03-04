import React from 'react'
import './SearchResults.css'
import FetchedResult from './FetchedResult'
function SearchResults({results}) {
  return (
    <div className='results-list'>
      {
        results.map((result, id)=>{
            return <FetchedResult  result={result} key={id} />
        })
      }
    </div>
  )
}

export default SearchResults
