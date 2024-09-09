import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Header/Layout';
import Header from './pages/Header/Header';
import Section from './pages/section/Section';
import Services from './pages/Services/Services';  // Only one import for Services
import Technologies  from './pages/technology/technologies';  // Only one import for Services
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home';

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/" element={<Header />} />
            <Route path="about" element={<About />} />
            <Route path="section" element={<Section />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      <Technologies />  
    </>
  );
}

export default App;
