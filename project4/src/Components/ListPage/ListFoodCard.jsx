import React from 'react';
import {Button} from 'antd';

function ListFoodCard(){
    return(
        <div className="list-food-card">
            <h3>Apple</h3>
            <p>Quantity: 3</p>
            <p>Last Exposure: Nov. 7</p>
            <Button>Remove from List</Button>
        </div>
    )
}

export default ListFoodCard;