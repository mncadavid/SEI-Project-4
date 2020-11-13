import React, { Component } from 'react';
import List from './List';
import ListConfigPane from './ListConfigPane';
import ListFoodCard from './ListFoodCard';

class ListPage extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedList: []
        }
    }
    componentDidMount(){
        this.props.callGetLists(this.props.user.id);
    }

    setSelectedList = (list) => {
        console.log(list);
        this.setState({
            selectedList: list
        })
    }
    render(){
        console.log(this.props)
        return(
            <div className="list-page">
                <ListConfigPane
                    lists={this.props.lists} 
                    handleCreateList={this.props.handleCreateList}
                    setSelectedList={this.setSelectedList}/>
                <List selectedList={this.state.selectedList}/>
                <ListFoodCard />
            </div>
        )
    }
}

export default ListPage;