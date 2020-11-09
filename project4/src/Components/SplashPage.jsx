import React from 'react';
import {Button} from 'antd';

function SplashPage(){
    return(
        <div className="splash-page">
            <h1>Food Folio</h1>
            <img className="splash-image" src="./food-clipart.png" alt="Logo"/>
            <div>
                <Button type="primary" size="large" className="auth-button">Log In</Button>
                <Button type="primary" className="auth-button">Sign Up</Button>
            </div>
        </div>
    )
}

export default SplashPage;