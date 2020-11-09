import React from 'react';
import {Button} from 'antd';

function Header(){
    return(
        <header className="header">
            <img className="logo" src="./food-clipart.png" alt="Logo"/>
            <h1>Food Folio</h1>
            <div className="auth-header">
                <a href="#">My Account</a>
                <Button type="primary" >Log Out</Button>
            </div>
        </header>
    )
}

export default Header;