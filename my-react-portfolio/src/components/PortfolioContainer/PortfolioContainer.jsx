
import React , {useState} from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from "../NavBar/Nav";
import Home from "../Home/Home";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";


function PortfolioContainer(){
 /*
    const [currentPage, setCurrentPage] = useState('Home');

    const handlePageChange = (page) => {
      
      setCurrentPage(page);

    }

    const renderCurrentPage = () => {

        if(currentPage === 'Home'){
            return (<Home/>)
        }else if(currentPage === 'About'){
            return (<About/>)
        }else if(currentPage === 'Projects'){
            return(<Projects/>)

        } else if(currentPage === 'Contact'){
            return (<Contact/>)
        }

    }
    
*/
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