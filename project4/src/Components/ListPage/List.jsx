import React from 'react';

function List(props){
    return(
        <div className="list-placeholder">
        {props.selectedList.length !== 0 &&
            <div className="list">
                <h2>{props.selectedList.name}</h2>
                <ul>
                    <li>Fruits
                        <ul>
                        {props.selectedList.Food.filter((food)=> food.category==="Fruit")}
                        </ul>
                    </li>
                    <li>Vegetables
                        <ul>
                        {props.selectedList.Food.filter((food)=> food.category==="Vegetable")}
                        </ul>
                    </li>
                    <li>Meat
                        <ul>
                        {props.selectedList.Food.filter((food)=> food.category==="Meat")}
                        </ul>
                    </li>
                </ul>

                {/* <ul>
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
                </ul> */}
            </div>
            }
        </div>
    )
}

export default List;