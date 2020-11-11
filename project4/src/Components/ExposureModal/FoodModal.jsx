import React from 'react';
import AddExposureForm from './AddExposureForm';
import ExposuresContainer from './ExposuresContainer';

function FoodModal(props){
    return(
        <div className="food-modal-container" onClick={(e)=>props.handleCloseFood(e)}>
            <div className="food-modal">
                <h2>Avocado</h2>
                <div className="food-modal-lower">
                    <ExposuresContainer />
                    <AddExposureForm />
                </div>
            </div>
        </div>
    )
}

export default FoodModal;