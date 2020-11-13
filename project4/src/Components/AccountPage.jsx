import React from 'react';


function AccountPage(props){
    return(
        <div className="account-page">
            <h2>Hello, {props.user.name}!</h2>
            <h3>Child: {props.child.name}</h3>
            <h4>Age: {props.child.age}</h4>
        </div>
    )
}

export default AccountPage;