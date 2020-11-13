import React from 'react';

function ListTitleTag(props){
    return(
        <div className='list-title-tag'>
            <p>{props.list.name}</p>
        </div>
    )
}

export default ListTitleTag;