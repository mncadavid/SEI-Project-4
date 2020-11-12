import React from 'react';

function SingleExposure(props){
    const months = ['Jan.','Feb. ','Mar. ','Apr. ','May ','June ','July ','Aug. ','Sept. ','Oct. ','Nov. ','Dec. '];
    let fullDate = props.exposure.date;
    let monthIndex = fullDate.substring(5,7);
    let month = months[monthIndex-1];
    let day = fullDate = fullDate.substring(8,10);
    return(
        <div className="single-exposure">
            <h3>{month}{day}</h3>
            <p>{props.exposure.reaction}</p>
        </div>
    )
}

export default SingleExposure;