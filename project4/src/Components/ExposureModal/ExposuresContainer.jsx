import React from 'react';
import SingleExposure from './SingleExposure';


function ExposuresContainer(){
    return(
        <div className="exposures-container">
            <SingleExposure />
            <SingleExposure />
        </div>
    )
}

export default ExposuresContainer;