import React, { Component } from 'react';
import {Input, Button} from 'antd';
import CardContainer from './CardContainer';
import AddFood from './AddFood';
import FilterPane from './FilterPane';
import {getAllFood} from '../../services/api_helper';

class BrowsePage extends Component{
    constructor(props){
        super(props);

        this.state = {
            foods: null
        }
    }

    callGetAllFood = async () => {
        const foods = await getAllFood();
        console.log(`Foods ${foods}`);
        if(foods){
            this.setState({
                foods: foods.data
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
                    <CardContainer foods={this.state.foods}/>
                    <AddFood />
                </div>
            </div>
        )
    }
}

export default BrowsePage;