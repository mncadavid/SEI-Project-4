import React, { Component } from 'react';
import {Input, Button} from 'antd';
import CardContainer from './CardContainer';
import AddFood from './AddFood';
import FilterPane from './FilterPane';
import {getAllFood, addFood} from '../../services/api_helper';

class BrowsePage extends Component{
    constructor(props){
        super(props);

        this.state = {
            foods: null
        }
    }

    callGetAllFood = async () => {
        const foods = await getAllFood();
        if(foods){
            this.setState({
                foods: foods.data
            })
        }
    }

    handleAddFood = async (e,newFood) => {
        e.preventDefault();
        const allFoodsPlusNew = await addFood(newFood);
        console.log(`Response: ${allFoodsPlusNew}`);
        if(allFoodsPlusNew){
            this.setState({
                foods: allFoodsPlusNew.data
            })
        }

    }

    componentDidMount(){
        this.callGetAllFood();
    }

    render(){
        return(
            <div className="browse-page">
                <div className="search">
                    <Input/>
                    <Button>Search</Button>
                </div>
                <div className="browse-lower">
                    <FilterPane />
                    <CardContainer 
                        foods={this.state.foods}
                        handleOpenFood={this.props.handleOpenFood}
                        handleAddToList={this.props.handleAddToList}
                        currentUser={this.props.currentUser}
                    />
                    <AddFood 
                        handleAddFood={this.handleAddFood}/>
                </div>
            </div>
        )
    }
}

export default BrowsePage;