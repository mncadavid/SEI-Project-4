import React from 'react';
import AddExposureForm from './AddExposureForm';
import ExposuresContainer from './ExposuresContainer';

function FoodModal(){
    return(
        <div className="food-modal">
            <h2>Avocado</h2>
            <div className="food-modal-lower">
                <ExposuresContainer />
                <AddExposureForm />
            </div>
        </div>
    )
}

export default FoodModal;