import React from 'react';
import {categories} from '../../categories';
import {Link} from 'react-router-dom';

function FilterPane(props){
    return(
        <div className="filter-pane">
            <h3>Filter by Category</h3>
                <select required name="category" onChange={(e)=>props.filterFoods(e.target.value)}>
                      <option value="All" defaultValue>All Foods</option>
                      {categories.map((category,index) => {
                        return <option key={index} value={category}>{category}</option>
                      })}
                </select>
            <br/>
            <Link to="/lists" style={{textDecoration:'none',color:'black'}}><button>My Grocery Lists</button></Link>
        </div>
    )
}

export default FilterPane;