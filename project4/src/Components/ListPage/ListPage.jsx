import React, { Component } from 'react';
import List from './List';
import ListConfigPane from './ListConfigPane';
import ListFoodCard from './ListFoodCard';

function ListPage(props){
        return(
            <div className="list-page">
                <ListConfigPane
                    lists={this.props.lists} 
                    handleCreateList={props.handleCreateList}
                    setSelectedList={props.setSelectedList}/>
                <List selectedList={props.selectedList}/>
                <ListFoodCard />
            </div>
        )
}

export default ListPage;