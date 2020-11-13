import React from 'react';
import ListsContainer from '../ListPage/ListsContainer';


function AddToListModal(props){
    return(
        <div className="modal-container" 
            onClick={(e) => 
                {if(e.currentTarget===e.target)
                {props.closeAddToListModal()}}}>
            <div className="add-to-list-modal">
                <ListsContainer lists={props.lists} setSelectedList={props.setSelectedList}/>
            </div>
        </div>
    )
}

export default AddToListModal;