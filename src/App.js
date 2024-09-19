import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Header/Layout';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home';
import { useState } from 'react';
import Technologies from './pages/technology/technologies';
import SideContext from './Context/SidebarContext';
import LayoutAbout from './pages/Layout/LayoutAbout';


function App() {

const [open, setOpen] = useState(false);

const toggleSidebar = () => {
  setOpen(!open);
};



  return(
    <SideContext.Provider value={{open, toggleSidebar,}}>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="" element={<Layout/>}>
        <Route path="about" element={<LayoutAbout/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="technology" element={<Technologies/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </SideContext.Provider> 
  )
}

export default App;