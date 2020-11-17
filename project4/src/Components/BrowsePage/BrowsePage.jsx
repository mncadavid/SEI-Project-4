import React, { Component } from 'react';
import CardContainer from './CardContainer';
import AddFood from './AddFood';
import FilterPane from './FilterPane';
import AddToListModal from './AddToListModal';

class BrowsePage extends Component{
    constructor(props){
        super(props);

        this.state={
            openAddToListModal: false,
            selectedFood: {},
            categoryFilter: "All",
            foods: this.props.allFood
        }
    }
    //Opens the add to list modal and sets the selected food
    handleOpenAddToListModal = (e,food) => {
        e.preventDefault();
        this.props.callGetLists();
        this.setState({
            openAddToListModal: true,
            selectedFood: food
        })
    }
    //Closes the add to list modal
    closeAddToListModal = () => {
        this.setState({
            openAddToListModal: false
        })
    }
    //Filters the foods based on the filter drop down
    filterFoods = (filter) => {
        if(filter === "All"){
            this.setState({
                foods: this.props.allFood
            })
        }
        else{
            let filteredFoods = this.props.allFood.filter(food => food.category === filter);
            this.setState({
                foods: filteredFoods,
                categoryFilter: filter
            })
        }
    }
    //After the page mounts, this uses the api helper to get all of the foods in the database
    componentDidMount = async () => {
        let allFood = await this.props.callGetAllFood();
        this.setState({
            foods: allFood
        })
    }
    //When the page updates, if the filter is set to all and the list of all foods is not complete
    //(i.e., a new food has been added) update the list of all foods
    componentDidUpdate(){
        if(this.state.foods !== this.props.allFood && this.state.categoryFilter === "All"){
            this.setState({
                foods: this.props.allFood
            })
        }
    }
    render(){
        return(
            <div className="browse-page">
                {this.state.openAddToListModal && <AddToListModal 
                    lists={this.props.lists}
                    setSelectedList={this.props.setSelectedList}
                    closeAddToListModal={this.closeAddToListModal}
                    handleAddToList={this.props.handleAddToList}
                    selectedFood={this.state.selectedFood}
                    selectedList={this.props.selectedList}/>}
                <div className="browse-lower">
                    <FilterPane filterFoods={this.filterFoods}/>
                    <CardContainer 
                        foods={this.state.foods}
                        handleOpenFood={this.props.handleOpenFood}
                        currentUser={this.props.currentUser}
                        callGetLastExposure={this.props.callGetLastExposure}
                        lastExposureDates={this.props.lastExposureDates}
                        handleOpenAddToListModal={this.handleOpenAddToListModal}
                        serverErrorMessage={this.props.serverErrorMessage}
                    />
                    <AddFood 
                        handleAddFood={this.props.handleAddFood}
                        serverErrorMessage={this.props.serverErrorMessage}/>
                </div>
            </div>
        )
    }
}

export default BrowsePage;