import React from 'react'
import MyCompThree from './MyCompThree'

function MyComTwo({data}) {
  return (
    <div>
      My email is {data.email}
      <MyCompThree data={data}/>
    </div>
  )
}

export default MyComTwo
