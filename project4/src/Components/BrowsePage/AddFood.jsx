import React, {Component} from 'react';
import {Button, Input} from 'antd';


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
                  <Input name="name" onChange={(e) => this.handleChange(e)}/>
                  <p>Category:</p>
                  <select name="category" onChange = {(e) => this.handleChange(e)}>
                      <option value="Fruit">Fruit</option>
                      <option value="Vegetable">Vegetable</option>
                      <option value="Meat">Meat</option>
                  </select>
                  <br />
                  <button type="submit">Add Food</button>
              </form>
          </div>
      )
    }
}

export default AddFood;