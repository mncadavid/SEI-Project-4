import React from 'react';
import {Link} from 'react-router-dom';


function AccountPage(props){
    return(
        <div className="account-page">
            {props.user && 
                <div>
                    <h2>Hello, {props.user.name}!</h2>
                    <h3>Child: {props.child.name}</h3>
                    <h4>Age: {props.child.age}</h4>
                    <Link to="/lists" style={{textDecoration:'none',color:'black'}}><button>My Grocery Lists</button></Link>
                    <br /><br />
                    <Link to="/browse" style={{textDecoration:'none',color:'black'}}><button>Back to Browse</button></Link>
                </div>
            }
        </div>
    )
}

export default AccountPage;