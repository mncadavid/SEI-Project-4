import React from 'react';
import ListTitleTag from './ListTitleTag';

function ListsContainer(props){
    return(
        <div className="lists-container">
            {props.lists.map((list,index) => {
                return <ListTitleTag key={index} list={list} setSelectedList={props.setSelectedList} selectedList={props.selectedList}/>
            })}
        </div>
    )
}

export default ListsContainer;