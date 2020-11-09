import React from 'react';
import {Input, Button} from 'antd';
import CardContainer from './CardContainer';
import AddFood from './AddFood';
import FilterPane from './FilterPane';

function BrowsePage(){
    return(
        <div className="browse-page">
            <div className="search">
                <Input/>
                <Button>Search</Button>
            </div>
            <div className="browse-lower">
                <FilterPane />
                <CardContainer />
                <AddFood />
            </div>
        </div>
    )
}

export default BrowsePage;