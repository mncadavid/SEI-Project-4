import React, { Component } from 'react';
import {FileSearchOutlined} from '@ant-design/icons';
import {getLastExposure} from '../../services/api_helper';


class FoodCard extends Component{
    constructor(props){
        super(props);

        this.state = {
            lastExposureDate: ""
        }
    }

    callGetLastExposure = async (foodId) => {
        let searchObject = {
            foodId: foodId,
            childId: this.props.currentUser.childId 
        }
        const lastExposure = await getLastExposure(searchObject);
        console.log(`Last: ${lastExposure}`);
        if(lastExposure){
            const months = ['Jan.','Feb. ','Mar. ','Apr. ','May ','June ','July ','Aug. ','Sept. ','Oct. ','Nov. ','Dec. '];
            let fullDate = lastExposure;
            let monthIndex = fullDate.substring(5,7);
            let month = months[monthIndex-1];
            let day = fullDate = fullDate.substring(8,10);
            this.setState({
                lastExposureDate: `${month}${day}`
            });
        }
        else{
            this.setState({
                lastExposureDate: "New Food"
            })
        }
    }

    componentDidMount(){
        {this.props.currentUser && this.callGetLastExposure(this.props.food.id)};
    }

    render(){
        return(
            <div className="food-card">
                <h2>
                    {this.props.food.name}
                </h2>
                <FileSearchOutlined onClick={(e) => {this.props.handleOpenFood(e,this.props.food.id,this.props.currentUser.childId)}}/>
                <p>{this.state.lastExposureDate}</p>
                <button onClick={(e)=> {this.props.handleAddToList(e,this.props.food.name)}}>
                    Add to grocery list
                </button>
            </div>
        )
    }
}

export default FoodCard;