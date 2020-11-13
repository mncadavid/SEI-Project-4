import React, { Component } from 'react';
import List from './List';
import ListConfigPane from './ListConfigPane';
import ListFoodCard from './ListFoodCard';

class ListPage extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.callGetLists(this.props.user.id);
    }
    render(){
        console.log(this.props)
        return(
            <div className="list-page">
                <ListConfigPane lists={this.props.lists} handleCreateList={this.props.handleCreateList}/>
                <List />
                <ListFoodCard />
            </div>
        )
    }
}

export default ListPage;