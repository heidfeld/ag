import React, { Component } from 'react';
import './AddItemForm.css';
import CommonForm from './../../common/CommonForm/CommonForm';

class AddItemForm extends Component {
    render() {
        return (
            <div className="AddItemForm">
                <CommonForm></CommonForm>
            </div>
        );
    }
}

export default AddItemForm;