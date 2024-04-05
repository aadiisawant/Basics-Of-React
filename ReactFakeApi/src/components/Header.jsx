import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <nav>
        <ul>
            <li><Link to="users">List Of Users</Link></li>
            <li><Link to="user">Single User</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
