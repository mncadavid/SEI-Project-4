import React from 'react';
import FoodCard from './FoodCard';

function CardContainer(props){
    return(
        <div className="card-container">
            {props.foods && props.foods.map((food,index) => {
                let gridClass = "";
                let food_id = food.id;
                // {index%2 == 0 ? gridClass = "grid-right" : gridClass = "grid-left"};
               return <FoodCard 
                        food={food}
                        key={index}
                        handleOpenFood={props.handleOpenFood}
                        className={gridClass}
                        currentUser={props.currentUser}
                        callGetLastExposure={props.callGetLastExposure}
                        lastExposureDate={props.lastExposureDates[food_id]}
                        handleOpenAddToListModal={props.handleOpenAddToListModal}/>
            })}
        </div>
    )
}

export default CardContainer;