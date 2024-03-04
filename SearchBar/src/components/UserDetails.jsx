import React from 'react'

function UserDetails({result}) {
  return (
    <div>
      <div>Name : {result.name}</div>
      <div>Username : {result.username}</div>
      <div> email : {result.email}</div>
    </div>
  )
}

export default UserDetails
