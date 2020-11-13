import React from 'react';
import {Link} from 'react-router-dom';


function AccountPage(props){
    return(
        <div className="account-page">
            <h2>Hello, {props.user.name}!</h2>
            <h3>Child: {props.child.name}</h3>
            <h4>Age: {props.child.age}</h4>
            <Link to="/browse">Back to Browse</Link> <br />
            <Link to="/lists">My Grocery Lists</Link>
        </div>
    )
}

export default AccountPage;