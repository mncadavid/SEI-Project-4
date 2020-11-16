import React, { useState } from 'react';
import LogInModal from './LogInModal';
import SignUpModal from './SignUpModal';

function SplashPage(props){
    const [openLogin, setOpenLogin] = useState(false);
    const [openSignUp, setOpenSignUp] = useState(false);
    return(
        <div className="splash-page">
            <h1>Picky Preventer</h1>
            <img className="splash-image" src="./food-clipart.png" alt="Logo"/>
            <div>
                <button 
                    size="large" 
                    className="auth-button"
                    onClick={(e) => {
                        e.preventDefault();
                        setOpenLogin(true);
                    }}>Log In</button>
                <button
                    className="auth-button"
                    onClick={(e) => {
                        e.preventDefault();
                        setOpenSignUp(true);
                    }}>Sign Up</button>
            </div>
            {openLogin && <LogInModal handleLogin={props.handleLogin} setOpenLogin={setOpenLogin}/>}
            {openSignUp && <SignUpModal handleSignUp={props.handleSignUp} setOpenSignUp={setOpenSignUp}/>}
        </div>
    )
}

export default SplashPage;