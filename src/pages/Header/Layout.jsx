import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div className='h-screen overflow-auto'>
      <Navbar/>
        <div className='w-full md-56 flex-row h-auto'>
        <Sidebar/>
          <div className=''>
            <Outlet/>
          </div>
        </div>
    </div>
  )
}


export default Layout