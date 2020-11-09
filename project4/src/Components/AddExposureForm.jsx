import React from 'react';
import {DatePicker, Input, Button} from 'antd'; 
const { TextArea } = Input;

function AddExposureForm(){
    return(
        <div className="add-exposure-form">
            <form>
                <h3>Add an Exposure</h3>
                <p>Date:</p>
                <DatePicker />
                <p>Notes:</p>
                <TextArea rows={4} />
                <br />
                <Button type="primary">Submit</Button>
            </form>
        </div>
    )
}

export default AddExposureForm;