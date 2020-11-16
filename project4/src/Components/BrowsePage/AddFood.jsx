import React, {Component} from 'react';
import {Input} from 'antd';
import {categories} from '../../categories';


class AddFood extends Component{
    constructor(props){
      super(props);
      this.state ={
        newFoodInfo: {
          name: '',
          category: ''
        },
        errorMessage: ""
      }
    }

    handleChange = (e) => {
      const {name, value}= e.target;
      let setNewFoodInfo = this.state.newFoodInfo;
      setNewFoodInfo[name] = value;
      this.setState({
          newFoodInfo: setNewFoodInfo
      })
  }

    handleErrorHandling = (e) => {
      e.preventDefault();
      if(!this.state.newFoodInfo.name.trim()){
          this.setState({
              errorMessage: "Name cannot be empty"
          })
      }
      else{
          this.setState({
              errorMessage: ""
          })
          this.props.handleAddFood(this.state.newFoodInfo);
      }
    }
    
    render(){
      return(
          <div className="add-food">
              <form onSubmit={(e) => this.handleErrorHandling(e)}>
                  <h3>Add a Food</h3>
                  {this.state.errorMessage}
                  <p>Name:</p>
                  <Input required name="name" onChange={(e) => this.handleChange(e)}/>
                  <p>Category:</p>
                  <select required name="category" onChange = {(e) => this.handleChange(e)}>
                      <option value="" disabled selected defaultValue>Choose Category</option>
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