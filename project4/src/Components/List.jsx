import { Menu } from 'antd';
import React from 'react';

function List(){
    return(
        <div className="list">
            <h2>My Grocery List</h2>
            <ul>
                <li>Produce
                    <ul>
                        <li>Apple</li>
                        <li>Spinach</li>
                        <li>Cilantro</li>
                    </ul>
                </li>
                <li>Dairy and Eggs
                    <ul>
                        <li>Eggs</li>
                        <li>Cottage Cheese</li>
                        <li>Greek Yogurt</li>
                    </ul>
                </li>
                <li>Pantry
                    <ul>
                        <li>Peanut Butter</li>
                        <li>Rice</li>
                        <li>Cinnamon</li>
                        <li>Black Olives</li>
                        <li>Spaghetti</li>
                        <li>Pita Chips</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default List;