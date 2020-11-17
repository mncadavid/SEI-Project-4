import React, { Component } from 'react';
import {Input} from 'antd'; 
const { TextArea } = Input;

class AddExposureForm extends Component{
    constructor(props){
        super(props);
        //This creates today's date and formats a string to the format I need to default the date
        //input selector
        let today = new Date();
        let month = today.getUTCMonth() + 1;
        let day = today.getUTCDate();
        let year = today.getUTCFullYear();
        let todayDate = year + "-" + month + "-" + day;
        this.state = {
            date: todayDate,
            reaction: "",
            food_id: this.props.food_id,
            user_id: this.props.currentUser.id,
            child_id: this.props.currentUser.child_id
        }
    }
    //updates the state as the user changes the inputs
    handleChange= (e) => {
        const {name,value} = e.target;
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div className="add-exposure-form">
                <form onSubmit={(e)=>{
                        this.props.handleAddExposure(e,this.state)
                        this.setState({
                            date: null,
                            reaction: ""
                        });
                        }}>
                    <h3>Add an Exposure</h3>
                    <p>Date:</p>
                    <input type="date" name="date" value={this.state.date} onChange={this.handleChange}/>
                    <p>Notes:</p>
                    <TextArea name="reaction" rows={4} value={this.state.reaction} onChange={this.handleChange}/>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddExposureForm;