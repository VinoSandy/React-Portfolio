
import React , {useState} from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from "../NavBar/Nav";
import Home from "../Home/Home";
import About from "../About/About";
import Projects from "../Projects/ProjectContent";
import Contact from "../Contact/Contact";


function PortfolioContainer(){
 
return(<Router>
       <div>
       <Nav/>
       <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/projects" element={<Projects/>} />
       <Route path="/contact" element={<Contact/>} />
       </Routes>
       </div>
      </Router>)
}

export default PortfolioContainer;