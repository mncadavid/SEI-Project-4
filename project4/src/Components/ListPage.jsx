import React from 'react';
import List from './List';
import ListConfigPane from './ListConfigPane';

function ListPage(){
    return(
        <div className="list-page">
            <ListConfigPane />
            <List />
        </div>
    )
}

export default ListPage;