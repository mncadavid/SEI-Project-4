import React from 'react';

function Header(props){
    return(
        <header className="header">
            <img className="logo" src="./food-clipart.png" alt="Logo"/>
            <h1>Food Folio</h1>
            <div className="auth-header">
                <a href="#">My Account</a>
                <button onClick={(e) => props.handleLogout()}>Log Out</button>
            </div>
        </header>
    )
}

export default Header;