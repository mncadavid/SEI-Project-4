import React from 'react';
import ListTitleTag from './ListTitleTag';

function ListsContainer(props){
    console.log(props.lists)
    return(
        <div className="lists-container">
            {props.lists.map((list,index) => {
                <ListTitleTag key={index} list={list}/>
            })}
        </div>
    )
}

export default ListsContainer;