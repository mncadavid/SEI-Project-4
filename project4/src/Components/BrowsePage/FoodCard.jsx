import React from 'react';
import {Button} from 'antd';
import {FileSearchOutlined} from '@ant-design/icons';

function FoodCard(props){
    return(
        <div className="food-card">
            <h2>
                {props.food.name}
            </h2>
            <FileSearchOutlined onClick={(e) => {props.handleOpenFood(e,props.food.name)}}/>
            <p>Last exposure: Nov. 2</p>
            <Button type="primary" onClick={(e)=> {props.handleAddToList(e,props.food.name)}}>
                Add to grocery list
            </Button>
        </div>
    )
}

export default FoodCard;