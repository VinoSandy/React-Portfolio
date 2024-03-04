
import React , {useState} from "react";

import Nav from "../NavBar/Nav";
import Home from "../Home/Home";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";


function PortfolioContainer(){
 
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
    

return(<div>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} ></Nav>
        {renderCurrentPage()}

      </div>)


}

export default PortfolioContainer;