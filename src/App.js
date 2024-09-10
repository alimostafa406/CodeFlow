import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Header/Layout';
import Header from './pages/Header/Header';
import Section from './pages/section/Section';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home';
import { useState } from 'react';
import Technologies from './pages/technology/technologies';


function App() {

  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return(
    <BrowserRouter>
    <Routes>
      <Route path="" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="section" element={<Section/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="technology" element={<Technologies/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;