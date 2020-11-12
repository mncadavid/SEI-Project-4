import React, { Component } from 'react';
import {Input} from 'antd'; 
const { TextArea } = Input;

class AddExposureForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            date: null,
            reaction: "",
            foodId: this.props.foodId,
            userId: this.props.currentUser.id,
            childId: this.props.currentUser.childId
        }
    }

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