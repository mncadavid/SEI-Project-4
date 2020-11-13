import React from 'react';

function List(props){
    let fruits = [];
    let vegetables = [];
    let meats = [];
    if(props.selectedList.length !== 0){ 
        fruits = props.selectedList.food.filter((food)=> food.category==="Fruit")
        vegetables = props.selectedList.food.filter((food)=> food.category==="Vegetable")
        meats = props.selectedList.food.filter((food)=> food.category==="Meat")
    }
    return(
        <div className="list-placeholder">
        {props.selectedList.length !== 0 &&
            <div className="list">
                <h2>{props.selectedList.name}</h2>
                <ul>
                    <li>Fruits
                        <ul>
                        {fruits.map((fruit,index) => {
                            return <li key={index}>{fruit.name}</li>})}
                        </ul>
                    </li>
                    <li>Vegetables
                        <ul>
                        {vegetables.map((veggie,index) => {
                            return <li key={index}>{veggie.name}</li>})}
                        </ul>
                    </li>
                    <li>Meat
                        <ul>
                        {meats.map((meat,index) => {
                            return <li key={index}>{meat.name}</li>})}
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