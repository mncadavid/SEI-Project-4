import React, { useState } from 'react';
import {Input}  from 'antd';
import ListsContainer from './ListsContainer';
import {Link} from 'react-router-dom';


function ListConfigPane(props){
    const [createListName, setCreateListName] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
  
    //A new list name cannot be empty, otherwise tries to create the new list for the user
    const handleErrorHandling = (e) => {
        e.preventDefault();
        if(!createListName.trim()){
            setErrorMessage("Name cannot be empty");
        }
        else{
            setErrorMessage("List Created!");
            props.handleCreateList(createListName);
        }
      }


    return(
        <div className="list-config-pane">
            <Link to="/browse" style={{textDecoration:'none',color:'black',display:'inline-block'}}><button>Browse for Food</button></Link> <br />
            <button onClick={(e) => {e.preventDefault();props.setOpenTextModal(true)}}>Text My List</button> <br />
            <button onClick={(e)=> {e.preventDefault(); props.setOpenEmailModal(true);}}>Email My List</button>
            <p>See Another List</p>
            <ListsContainer 
                lists={props.lists}
                setSelectedList={props.setSelectedList}
                selectedList={props.selectedList}/>
            <br />
            <p>{errorMessage}</p>
            <p>New List Name:</p>
            <Input required name="name" onChange={(e) => {setCreateListName(e.target.value)}}/>
            <button onClick={(e) => {handleErrorHandling(e)}}>Create List</button>
            <br />
            <button onClick={(e) => {props.handleDeleteList(e)}}>Delete Selected List</button>
        </div>
    )
}

export default ListConfigPane;