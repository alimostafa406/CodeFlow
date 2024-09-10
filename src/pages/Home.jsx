import React from 'react'
import Navbar from './Header/Navbar'
import Sidebar from './Header/Sidebar'
import Header from './Header/Header'
import About from './About/About'
import Contact from './Contact/Contact'
import Services from './Services/Services'
import Technologies from './technology/technologies'


const Home = () => {
  return (
    <div className='h-screen overflow-auto'>
      <Navbar/>
        <div className='w-full md-56 flex-row h-auto'>
          <Sidebar/>
          <div className=''>
            <Header/>
            <About/>
            <Services/>
            <Technologies/>
            <Contact/>
          </div>
        </div>
    </div>
  )
}

export default Home