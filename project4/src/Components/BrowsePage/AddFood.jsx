import React, {Component} from 'react';
import {Input} from 'antd';
import {categories} from '../../categories';


class AddFood extends Component{
    constructor(props){
      super(props);
      this.state ={
        name: '',
        category: ''
      }
    }

    handleChange = (e) => {
      const {name, value}= e.target;
      this.setState({
        [name]: value
      })
    }
    
    render(){
      return(
          <div className="add-food">
              <form onSubmit={(e) => this.props.handleAddFood(e,this.state)}>
                  <h3>Add a Food</h3>
                  <p>Name:</p>
                  <Input required name="name" onChange={(e) => this.handleChange(e)}/>
                  <p>Category:</p>
                  <select required name="category" onChange = {(e) => this.handleChange(e)}>
                      <option value="" disabled selected>Choose Category</option>
                      {categories.map((category,index) => {
                        return <option key={index} value={category}>{category}</option>
                      })}
                  </select>
                  <br /><br />
                  <button type="submit">Add Food</button>
              </form>
          </div>
      )
    }
}

export default AddFood;