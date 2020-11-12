import React from 'react';

function Header(){
    return(
        <header className="header">
            <img className="logo" src="./food-clipart.png" alt="Logo"/>
            <h1>Food Folio</h1>
            <div className="auth-header">
                <a href="#">My Account</a>
                <button>Log Out</button>
            </div>
        </header>
    )
}

export default Header;