import React, { Component } from 'react';
import {Input} from 'antd';
import CardContainer from './CardContainer';
import AddFood from './AddFood';
import FilterPane from './FilterPane';
import AddToListModal from './AddToListModal';

class BrowsePage extends Component{
    constructor(props){
        super(props);

        this.state={
            openAddToListModal: false,
            selectedFood: {}
        }
    }
    handleOpenAddToListModal = (e,food) => {
        e.preventDefault();
        this.setState({
            openAddToListModal: true,
            selectedFood: food
        })
    }
    closeAddToListModal = () => {
        this.setState({
            openAddToListModal: false
        })
    }
    componentDidMount(){
        this.props.callGetAllFood();
        this.props.callGetLists();
    }
    render(){
        return(
            <div className="browse-page">
                {this.state.openAddToListModal && <AddToListModal 
                    lists={this.props.lists}
                    openAddToListModal={this.state.openAddToListModal}
                    setSelectedList={this.props.setSelectedList}
                    closeAddToListModal={this.closeAddToListModal}
                    handleAddToList={this.props.handleAddToList}
                    selectedFood={this.state.selectedFood}/>}
                <div className="search">
                    <Input/>
                    <button>Search</button>
                </div>
                <div className="browse-lower">
                    <FilterPane />
                    <CardContainer 
                        foods={this.props.allFood}
                        handleOpenFood={this.props.handleOpenFood}
                        currentUser={this.props.currentUser}
                        callGetLastExposure={this.props.callGetLastExposure}
                        lastExposureDates={this.props.lastExposureDates}
                        handleOpenAddToListModal={this.handleOpenAddToListModal}
                    />
                    <AddFood 
                        handleAddFood={this.props.handleAddFood}/>
                </div>
            </div>
        )
    }
}

export default BrowsePage;