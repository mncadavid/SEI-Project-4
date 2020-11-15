import React from 'react';
import ListsContainer from '../ListPage/ListsContainer';


function AddToListModal(props){
    return(
        <div className="modal-container" 
            onClick={(e) => 
                {if(e.currentTarget===e.target)
                {props.closeAddToListModal()}}}>
            <div className="add-to-list-modal">
                <ListsContainer lists={props.lists} setSelectedList={props.setSelectedList} selectedList={props.selectedList}/>
                <br/>
                <button onClick={(e)=> {props.handleAddToList(e,props.selectedFood);props.closeAddToListModal();}}>Add to List</button>
            </div>
        </div>
    )
}

export default AddToListModal;