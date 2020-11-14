import React from 'react';
import {Button} from 'antd';

function ListFoodCard(props){
    return(
        <div className="list-food-card-placeholder">
            {props.selectedFood && 
                <div className="list-food-card">
                    <h3>{props.selectedFood.name}</h3>
                    {/* <p>Quantity: 3</p> */}
                    <p>Last Exposure: Nov. 7</p>
                    <Button
                    onClick={(e)=>{e.preventDefault();props.setSelectedFood(null);props.handleRemoveFood(props.selectedFood)}}>Remove from List</Button>
                </div>
            }
        </div>
    )
}

export default ListFoodCard;