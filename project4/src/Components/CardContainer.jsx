import { Card } from 'antd';
import React from 'react';
import FoodCard from './FoodCard';

function CardContainer(){
    return(
        <div className="card-container">
            <FoodCard />
        </div>
    )
}

export default CardContainer;