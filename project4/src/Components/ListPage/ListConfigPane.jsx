import React, { useState } from 'react';
import {Input, Button}  from 'antd';
import ListsContainer from './ListsContainer';
import {Link} from 'react-router-dom';


function ListConfigPane(props){
    const [createListName, setCreateListName] = useState(null);
    return(
        <div className="list-config-pane">
            <p>List Name:</p>
            <Input />
            <Button>Update List Name</Button> <br />
            <Link to="/browse"><Button>Browse for Food</Button></Link> <br />
            <Button onClick={(e)=> {e.preventDefault(); props.setOpenEmailModal(true);}}>Email My List</Button>
            <p>See Another List</p>
            <ListsContainer 
                lists={props.lists}
                setSelectedList={props.setSelectedList}
                selectedList={props.selectedList}/>
            <br />
            <p>New List Name:</p>
            <Input required name="name" onChange={(e) => {setCreateListName(e.target.value)}}/>
            <Button onClick={(e) => {e.preventDefault(); props.handleCreateList(createListName)}}>Create List</Button>
            <br />
            <Button onClick={(e) => {props.handleDeleteList(e)}}>Delete Selected List</Button>
        </div>
    )
}

export default ListConfigPane;