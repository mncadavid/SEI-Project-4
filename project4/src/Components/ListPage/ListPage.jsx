import React, {useState} from 'react';
import List from './List';
import ListConfigPane from './ListConfigPane';
import ListFoodCard from './ListFoodCard';

function ListPage(props){
    const [selectedFood, setSelectedFood] = useState(null);
        return(
            <div className="list-page">
                <ListConfigPane
                    lists={props.lists} 
                    handleCreateList={props.handleCreateList}
                    setSelectedList={props.setSelectedList}
                    handleDeleteList={props.handleDeleteList}
                    sendGroceryListEmail={props.sendGroceryListEmail}
                    selectedList={props.selectedList}/>
                <List selectedList={props.selectedList} setSelectedFood={setSelectedFood}/>
                <ListFoodCard 
                    selectedFood={selectedFood} 
                    handleRemoveFood={props.handleRemoveFood}
                    setSelectedFood={setSelectedFood}/>
            </div>
        )
}

export default ListPage;