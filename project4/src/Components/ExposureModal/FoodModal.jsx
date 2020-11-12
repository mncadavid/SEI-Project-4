import React from 'react';
import AddExposureForm from './AddExposureForm';
import ExposuresContainer from './ExposuresContainer';

function FoodModal(props){
    let foodName=props.foodData.food;
    let exposures=props.foodData.Exposures;
    return(
        <div className="food-modal-container" onClick={(e)=>props.handleCloseFood(e)}>
            <div className="food-modal">
                <h2>{foodName}</h2>
                <div className="food-modal-lower">
                    <ExposuresContainer exposures={exposures}/>
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