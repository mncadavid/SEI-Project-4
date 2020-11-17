import React, { useState } from 'react';
import ListsContainer from './ListsContainer';

function EmailListModal(props){
    const [email, setEmail] = useState(null);
    //Updates the email hook as the user types in the input box
    const updateEmail = (e) => {
        setEmail({
            [e.target.name]: e.target.value
        })
    }
    return(
        <div className="modal-container" onClick={(e)=>props.handleCloseEmailModal(e)}>
            <div className="email-list-modal">
                <p>Select to send:</p>
                <ListsContainer 
                lists={props.lists}
                setSelectedList={props.setSelectedList}
                selectedList={props.selectedList}/>
                <p>Enter the e-mail address:</p>
                <input required 
                    autoFocus 
                    name="email"
                    type="email"
                    onChange={(e)=>{updateEmail(e)}}>
                </input>
                <button onClick={(e)=>{props.sendGroceryListEmail(e,email);props.setOpenEmailModal(false);}}>Send List</button>
            </div>
        </div>
    )
}

export default EmailListModal;