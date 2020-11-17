import React from 'react';
import {Link} from 'react-router-dom';

function Footer(){
    return(
        <div className="footer">
            <Link to="/about" style={{textDecoration:'none',color:'black'}}>Why Picky Preventer?</Link>
            <a href="https://www.linkedin.com/in/marissaberns/"
            target="_blank" rel="noreferrer">Created by Marissa Cadavid Berns</a>
            <a href="https://github.com/mncadavid/SEI-Project-4/issues"
            target="_blank" rel="noreferrer">Report an Issue</a>
        </div>
    )
}

export default Footer;