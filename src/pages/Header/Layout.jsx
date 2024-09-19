import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import SideContext from '../../Context/SidebarContext'
import LayoutNavbar from '../Layout/LayoutNavbar'
import Footer from '../Footer/Footer'


const Layout = () => {
const {open } = useContext(SideContext);

  return (
    <div className='h-screen overflow-auto'>
      <LayoutNavbar/>
        <div className='w-full md-56 flex-row h-auto'>
        {open? <Sidebar/> : null}
          <div className=''>
            <Outlet/>
            <Footer/>
          </div>
        </div>
    </div>
  )
}


export default Layout