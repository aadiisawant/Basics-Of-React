import React, { useState } from 'react'
import './FetchedResult.css'
import UserDetails from './UserDetails'
function FetchedResult({result}) {
    const [showDetails, setShowDetails] = useState(false);

  const handleResultClick = () => {
    setShowDetails(true);
  };

  return (
    <div>
      <div className='search-result' onClick={handleResultClick}>
        {result.name}
      </div>
      {showDetails && <UserDetails result={result} />}
    </div>
  );
    
  
}

export default FetchedResult
