import React from 'react';
import {Link} from 'react-router-dom';


function AccountPage(props){
    return(
        <div className="account-page">
            <h2>Hello, {props.user.name}!</h2>
            <h3>Child: {props.child.name}</h3>
            <h4>Age: {props.child.age}</h4>
            <Link to="/lists" style={{textDecoration:'none',color:'black'}}>My Grocery Lists</Link>
            <br /><br />
            <Link to="/browse" style={{textDecoration:'none',color:'black'}}>Back to Browse</Link>
        </div>
    )
}

export default AccountPage;