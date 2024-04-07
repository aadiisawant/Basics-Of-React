import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <nav>
        <ul>
            <li>
                <Link to="/posts">Posts</Link>
            </li>
            <li>
                <Link to="/comments">Comments</Link>
            </li>
            
        </ul>
      </nav>
    </>
  )
}

export default Header
