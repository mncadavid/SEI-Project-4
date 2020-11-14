import React from 'react';
import {categories} from '../../categories';

function FilterPane(props){
    return(
        <div className="filter-pane">
            <p>Filter by Category:</p>
                <select required name="category" onChange={(e)=>props.filterFoods(e.target.value)}>
                      <option value="All" selected>All Foods</option>
                      {categories.map((category,index) => {
                        return <option key={index} value={category}>{category}</option>
                      })}
                </select>
        </div>
    )
}

export default FilterPane;