import { Link } from 'react-router-dom';
import React  from 'react';
const Footer= ()=>{

    const d = new Date();
    const year = d.getFullYear();


    return(
        
    <div className="px-4 py-12 mx-auto  overflow-hidden mt-5">
        <nav className="d-flex flex-wrap justify-content-center -mx-5 -my-2">
            <div className="px-5 py-2">
                <Link to="#" className="text-base leading-6 text-dark">
                    About
                </Link>
            </div>
            <div className="px-5 py-2">
                <Link to="/blog" className="text-base leading-6 text-dark">
                   Blog
                </Link>
            </div>
            <div className="px-5 py-2">
                <Link to="/team" className="text-base leading-6 text-dark">
                    Team
                </Link>
            </div>
            <div className="px-5 py-2">
                <Link to="/pricing" className="text-base leading-6 text-dark">
                    Pricing
                </Link>
            </div>
            <div className="px-5 py-2">
                <Link to="/contact" className="text-base leading-6 text-dark">
                    Contact
                </Link>
            </div>
            <div className="px-5 py-2">
                 <Link to="/terms" className="text-base leading-6 text-dark">
                   Terms
                </Link>
            </div>
        </nav>
        <div className="d-flex justify-content-center mt-2">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="text-lg text-dark">
                <span className="fa fa-facebook fa-2x"></span>
                
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className=" text-dark text-lg ml-5">
                <span className="fa fa-instagram fa-2x"></span>
                
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer"  className=" text-dark text-lg ml-5">
                <span className="fa fa-twitter fa-2x"></span>
                
            </a>
            <a href="https://www.github.com" target="_blank"  rel="noreferrer" className=" text-dark text-lg ml-5 hover:text-dark">
                <span className="fa fa-github fa-2x"></span>
                
            </a>
            
        </div>
        <p className="mt-8  mt-2 text-center text-gray-400">
            © {year} OptimoStore, Inc. All rights reserved.
        </p>
    </div>
    )
}

export default Footer;