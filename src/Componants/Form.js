import React from 'react';
import './Form.css';
import './bootstrap.min.css';

const TextField = (props) => {
    return (
        <input type="text"  placeholder={props.placeholder} />
    );
}

const Button = (props) => {
    return (
        <button>{props.name}</button>
    );
}

const Form = () => {

    return (
        <div className="form-area">
            <TextField placeholder="Course Title" />
            <TextField placeholder="Credit Hour" />
            <Button name="Add" />
        </div>
    );
}

export default Form;