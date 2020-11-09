import React from 'react';
import {Input, Button}  from 'antd';
import ListsContainer from './ListsContainer';


function ListConfigPane(){
    return(
        <div className="list-config-pane">
            <p>List Name:</p>
            <Input />
            <Button>Update List Name</Button> <br />
            <Button>Browse for Food</Button> <br />
            <Button>Clear List</Button><br />
            <Button>Email My List</Button>
            <p>See Another List</p>
            <ListsContainer />
            <Button>Add a List</Button>
        </div>
    )
}

export default ListConfigPane;