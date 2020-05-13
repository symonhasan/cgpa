import React from 'react';
import './Form.css';

const TextField = (props) => {
    return (
        <input type="text"  placeholder={props.placeholder} id={props.id} />
    );
}

const Button = (props) => {
    return (
        <button onClick={props.func}>{props.name}</button>
    );
}

const Form = (props) => {

    return (
        <div className="form-area">
            <TextField placeholder="Course Title" id="course-title" />
            <TextField placeholder="Credit Hour" id="credit-hour" />
            <TextField placeholder="GPA" id="gpa"/>
            <Button name="Add" func={props.func}  />
        </div>
    );
}

export default Form;