import React, { Component } from 'react';
import {FileSearchOutlined} from '@ant-design/icons';

class FoodCard extends Component{
    constructor(props){
        super(props);

        this.state = {
            lastExposureDate: "",
            currentUser: this.props.currentUser,
            food: this.props.food
        }
    }

    componentDidMount(){
        this.props.currentUser && this.props.callGetLastExposure(this.props.food.id);
    }
    componentDidUpdate(){
        if(this.props.currentUser !== this.state.currentUser){
            this.setState({
                currentUser: this.props.currentUser,
            })
            this.props.currentUser && this.props.callGetLastExposure(this.props.food.id);
        }
    }

    render(){
        return(
            <div className="food-card">
                <h2>
                    {this.props.food.name}
                </h2>
                <FileSearchOutlined onClick={(e) => {this.props.handleOpenFood(e,this.props.food.id,this.props.currentUser.child_id)}}/>
                <p>Last Exposure Date:</p>
                <p className="exposure-date">{this.props.lastExposureDate}</p>
                <button 
                    onClick={(e)=>{this.props.handleOpenAddToListModal(e,this.props.food)}}>
                    Add to grocery list
                </button>
            </div>
        )
    }
}

export default FoodCard;