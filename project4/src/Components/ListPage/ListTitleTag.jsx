import React from 'react';

function ListTitleTag(props){
    return(
        <div className={props.list.id===props.selectedList.id ? 'list-title-tag selected':'list-title-tag'}
            onClick={(e)=> {props.setSelectedList(props.list.id)}}>
            <p>{props.list.name}</p>
        </div>
    )
}

export default ListTitleTag;