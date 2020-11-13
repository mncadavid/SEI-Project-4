import React from 'react';
import ListTitleTag from './ListTitleTag';

function ListsContainer(props){
    console.log(props.lists)
    return(
        <div className="lists-container">
            {props.lists.map((list,index) => {
                return <ListTitleTag key={index} list={list} setSelectedList={props.setSelectedList}/>
            })}
        </div>
    )
}

export default ListsContainer;