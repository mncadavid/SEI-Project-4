import React, {useState} from 'react';
import EmailListModal from './EmailListModal';
import List from './List';
import ListConfigPane from './ListConfigPane';
import ListFoodCard from './ListFoodCard';
import TextListModal from './TextListModal';

function ListPage(props){
    const [selectedFood, setSelectedFood] = useState(null);
    const [openEmailModal, setOpenEmailModal] = useState(false);
    const [openTextModal, setOpenTextModal] = useState(false);
    if(props.lists.length === 0 && props.user !== null){
        props.callGetLists();
    }
    const handleCloseEmailModal = (e) => {
        if(e.currentTarget===e.target){
            setOpenEmailModal(false);
          }
    }
    const handleCloseTextModal = (e) => {
        if (e.currentTarget===e.target){
            setOpenTextModal(false);
        }
    }
        return(
            <div className="list-page">
                <ListConfigPane
                    lists={props.lists} 
                    handleCreateList={props.handleCreateList}
                    setSelectedList={props.setSelectedList}
                    handleDeleteList={props.handleDeleteList}
                    selectedList={props.selectedList}
                    setOpenEmailModal={setOpenEmailModal}
                    setOpenTextModal={setOpenTextModal}/>
                <List selectedList={props.selectedList} setSelectedFood={setSelectedFood}/>
                <ListFoodCard 
                    selectedFood={selectedFood} 
                    handleRemoveFood={props.handleRemoveFood}
                    setSelectedFood={setSelectedFood}
                    lastExposureDates={props.lastExposureDates}/>
                {openEmailModal && 
                <EmailListModal 
                    lists={props.lists}
                    setSelectedList={props.setSelectedList}
                    selectedList={props.selectedList}
                    handleCloseEmailModal={handleCloseEmailModal}
                    setOpenEmailModal={setOpenEmailModal}
                    sendGroceryListEmail={props.sendGroceryListEmail}/>}
                {openTextModal && 
                <TextListModal 
                    lists = {props.lists}
                    setSelectedList = {props.setSelectedList}
                    selectedList={props.selectedList}
                    handleSendText={props.handleSendText}
                    setOpenTextModal={setOpenTextModal}
                    handleCloseTextModal={handleCloseTextModal}
                />}
            </div>
        )
}

export default ListPage;