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
    //Updates the state as the user types in the inputs
    handleChange = (e) => {
      const {name, value}= e.target;
      let setNewFoodInfo = this.state.newFoodInfo;
      setNewFoodInfo[name] = value;
      this.setState({
          newFoodInfo: setNewFoodInfo
      })
    }
    //Does not allow an empty food otherwise tries to create the new food
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
                  <p className="error-message">{this.state.errorMessage}</p>
                  <p className="error-message">{this.props.serverErrorMessage.includes('exists') && this.props.serverErrorMessage}</p>
                  <p>Name:</p>
                  <Input required name="name" onChange={(e) => this.handleChange(e)}/>
                  <p>Category:</p>
                  <select required name="category" defaultValue="" onChange = {(e) => this.handleChange(e)}>
                      <option value="" disabled >Choose Category</option>
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