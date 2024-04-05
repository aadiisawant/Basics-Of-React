import React from 'react'
import MyCompThree from './MyCompThree'

function MyComTwo({data}) {
  function Sum(){
    return 10+11;
  }
  return (
    <div>
      My email is {data.email}
      
      <MyCompThree data={data} Sum={Sum()}/>
    </div>
  )
}

export default MyComTwo
