import React, { useState } from 'react';
import ListsContainer from './ListsContainer';

function TextListModal(props){
    const [phoneNumber, setPhoneNumber] = useState(null);
    const updatePhoneNumber = (e) => {
        setPhoneNumber({
            [e.target.name]: e.target.value
        })
    }
    return(
        <div className="modal-container" onClick={(e)=>props.handleCloseTextModal(e)}>
            <div className="text-list-modal">
                <p>Select list to send:</p>
                <ListsContainer 
                lists={props.lists}
                setSelectedList={props.setSelectedList}
                selectedList={props.selectedList}/>
                <p>Enter the phone number:</p>
                <input required 
                    autoFocus 
                    name="phone_number"
                    type="text"
                    onChange={(e)=>{updatePhoneNumber(e)}}>
                </input>
                <button onClick={(e)=>{props.handleSendText(e,phoneNumber);props.setOpenTextModal(false);}}>Send List</button>
            </div>
        </div>
    )
}

export default TextListModal;