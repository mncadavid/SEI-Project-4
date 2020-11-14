import React from 'react';
import {Link} from 'react-router-dom';

function Header(props){
    return(
        <header className="header">
            <img className="logo" src="./food-clipart.png" alt="Logo"/>
            <h1>Picky Preventer</h1>
            <div className="auth-header">
                <Link to="/account">My Account</Link>
                <button onClick={(e) => props.handleLogout()}>Log Out</button>
            </div>
        </header>
    )
}

export default Header;