import React from 'react';
import {Button} from 'antd';

function FoodCard(props){
    return(
        <div className="food-card">
            <h2>
                {props.food.name}
            </h2>
            <p>Last exposure: Nov. 2</p>
            <Button type="primary">Add to grocery list</Button>
        </div>
    )
}

export default FoodCard;