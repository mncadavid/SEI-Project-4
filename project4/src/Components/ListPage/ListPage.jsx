import React from 'react';
import List from './List';
import ListConfigPane from './ListConfigPane';
import ListFoodCard from './ListFoodCard';

function ListPage(){
    return(
        <div className="list-page">
            <ListConfigPane />
            <List />
            <ListFoodCard />
        </div>
    )
}

export default ListPage;