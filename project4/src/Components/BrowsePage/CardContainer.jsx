import React from 'react';
import FoodCard from './FoodCard';

function CardContainer(props){
    return(
        <div className="card-container">
            {props.foods && props.foods.map(food => {
               return <FoodCard food={food}/>
            })}
        </div>
    )
}

export default CardContainer;