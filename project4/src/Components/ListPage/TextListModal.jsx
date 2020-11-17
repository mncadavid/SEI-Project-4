import React, { useState } from 'react';
import ListsContainer from './ListsContainer';

function TextListModal(props){
    const [phoneNumber, setPhoneNumber] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    //Updates the phone number as the user types in the input box
    const updatePhoneNumber = (e) => {
        setPhoneNumber({
            [e.target.name]: e.target.value
        })
    }
    //Basic error handling for the phone number input
    const errorHandling = (e, number) => {
        e.preventDefault();
        if(number.phone_number.length !== 11 || number.phone_number.substring(0,1) !== "1"){
            setErrorMessage("Please input a valid number");
        }
        else{
            props.handleSendText(number);
            props.setOpenTextModal(false);
            setErrorMessage("");
        }
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
                <p><i>Must be in the format 15555555555</i></p>
                <p className="error-message">{errorMessage}</p>
                <input required 
                    autoFocus 
                    name="phone_number"
                    type="text"
                    onChange={(e)=>{updatePhoneNumber(e)}}>
                </input>
                <button onClick={(e)=>{errorHandling(e,phoneNumber)}}>Send List</button>
            </div>
        </div>
    )
}

export default TextListModal;