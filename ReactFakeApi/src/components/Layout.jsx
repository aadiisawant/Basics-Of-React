import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function Layout() {
  return (
    <div>
      This one Layout.
      <Header />
      <Outlet />
      
    </div>
  )
}

export default Layout
