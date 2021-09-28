import Topbar from "./components/topbar/Topbar";
import Introduction from "./components/Introduction/Introduction";
import Portfolio from "./components/portfolio/Portfolio";
import Work from "./components/works/Work";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import React, { useState } from 'react';
import "./app.scss";
import Menu from "./components/menu/Menu";
import Experience from "./components/experince/Experience";
import Education from "./components/education/Education";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
   
    <div className="sections">
      <Introduction/>
      <Experience/>
      <Work/>
      {/* <Portfolio/> */}
      <Education/>
      {/* <Testimonials/> */}
      <Contact/>
    </div>
    </div>
  );
}

export default App;
