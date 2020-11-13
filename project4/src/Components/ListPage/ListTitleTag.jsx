import React from 'react';

function ListTitleTag(props){
    return(
        <div className='list-title-tag' onClick={(e)=> {props.setSelectedList(props.list)}}>
            <p>{props.list.name}</p>
        </div>
    )
}

export default ListTitleTag;