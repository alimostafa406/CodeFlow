import React from 'react'
import Navbar from './Header/Navbar'
import Sidebar from './Header/Sidebar'
import Header from './Header/Header'
import Section from './section/Section'
import About from './About/About'
import Contact from './Contact/Contact'
import Services from './Services/Services'

const Home = () => {
  return (
    <div className='h-screen overflow-auto'>
    <Navbar/>
      <div className='w-full md-56 flex-row h-auto'>
      <Sidebar/>
        <div className=''>
          <Header/>
          <Section/>
          <About/>
          <Contact/>
          <Services/>
        </div>
      </div>
  </div>
  )
}

export default Home