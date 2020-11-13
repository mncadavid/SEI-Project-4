import React from 'react';
import AddExposureForm from './AddExposureForm';
import ExposuresContainer from './ExposuresContainer';

function FoodModal(props){
    return(
        <div className="modal-container" onClick={(e)=>props.handleCloseFood(e)}>
            <div className="food-modal">
                <h2>{props.foodData.food}</h2>
                <div className="food-modal-lower">
                    <ExposuresContainer exposures={props.foodData.exposures}/>
                    <AddExposureForm 
                        handleAddExposure={props.handleAddExposure}
                        foodId={props.foodData.foodId}
                        currentUser={props.currentUser}/>
                </div>
            </div>
        </div>
    )
}

export default FoodModal;