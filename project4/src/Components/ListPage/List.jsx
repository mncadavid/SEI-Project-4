import React from 'react';
import {categories} from '../../categories';

function List(props){
    return(
        <div className="list-placeholder">
        {props.selectedList.length !== 0 &&
            <div className="list">
                <h2 className="list-title">{props.selectedList.name}</h2>
                <p className="list-title"><i> - (Click food name to see more)</i></p>
                <ul>
                    {categories.map((category,index) => {
                        return <li key={index}>{category}
                                    <ul>
                                        {props.selectedList.food.filter((food => food.category===category)).map((food,idx) => {
                                            return <li className="list-item" key={idx} onClick={(e) => {props.setSelectedFood(food)}}>{food.name}</li>
                                        })}
                                    </ul>
                                </li>
                    })}
                </ul>
            </div>
            }
        </div>
    )
}

export default List;