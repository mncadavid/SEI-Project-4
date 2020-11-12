import React from 'react';
import AddExposureForm from './AddExposureForm';
import ExposuresContainer from './ExposuresContainer';

function FoodModal(props){
    console.log(props.foodData);
    let foodName=props.foodData.food;
    let exposures=props.foodData.Exposures;
    return(
        <div className="food-modal-container" onClick={(e)=>props.handleCloseFood(e)}>
            <div className="food-modal">
                <h2>{foodName}</h2>
                <div className="food-modal-lower">
                    <ExposuresContainer exposures={exposures}/>
                    <AddExposureForm />
                </div>
            </div>
        </div>
    )
}

export default FoodModal;