import React, { useContext } from 'react'
import Navbar from './Header/Navbar'
import Sidebar from './Header/Sidebar'
import Header from './Header/Header'
import Contact from './Contact/Contact'
import Services from './Services/Services'
import Technologies from './technology/technologies'
import SideContext from '../Context/SidebarContext'
import Footer from './Footer/Footer'
import HomeAbout from './Home/HomeAbout'


const Home = () => {
const {open } = useContext(SideContext);

  return (
    <div className='h-screen overflow-auto'>
      <Navbar/>
        <div className='w-full md-56 flex-row h-auto'>
        {open? <Sidebar/> : null}
          <div className=''>
            <Header/>
            <HomeAbout/>
            <Services/>
            <Technologies/>
            <Contact/>
            <Footer/>
          </div>
        </div>
    </div>
  )
}

export default Home