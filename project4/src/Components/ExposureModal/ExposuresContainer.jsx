import React from 'react';
import SingleExposure from './SingleExposure';


function ExposuresContainer(props){
    return(
        <div className="exposures-container">
            {props.exposures.map(exposure => {
                return <SingleExposure exposure={exposure}/>
            })}
        </div>
    )
}

export default ExposuresContainer;