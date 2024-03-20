import React from 'react'
import MyComTwo from './MyComTwo'




function MyCompOne({data}) {
  return (
    <div>
      <h1>Hello {data.name}!!</h1>
      <MyComTwo data={data}/>
    </div>
  )
}

export default MyCompOne
