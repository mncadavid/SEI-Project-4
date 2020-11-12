import React, { Component } from 'react';
import {Input} from 'antd';
import CardContainer from './CardContainer';
import AddFood from './AddFood';
import FilterPane from './FilterPane';

class BrowsePage extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.callGetAllFood();
    }
    render(){
        return(
            <div className="browse-page">
                <div className="search">
                    <Input/>
                    <button>Search</button>
                </div>
                <div className="browse-lower">
                    <FilterPane />
                    <CardContainer 
                        foods={this.props.allFood}
                        handleOpenFood={this.props.handleOpenFood}
                        handleAddToList={this.props.handleAddToList}
                        currentUser={this.props.currentUser}
                        callGetLastExposure={this.props.callGetLastExposure}
                        lastExposureDates={this.props.lastExposureDates}
                    />
                    <AddFood 
                        handleAddFood={this.props.handleAddFood}/>
                </div>
            </div>
        )
    }
}

export default BrowsePage;