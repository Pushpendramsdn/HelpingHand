import React from 'react';
import classes from './Input.css';
const input = (props) =>{
    return (
       
        <div className={classes.InputContainer}>
            <input type={props.type} placeholder={props.placeholder} value={props.value} className={classes.InputField} onChange={props.changed}/>
        </div>
    );
};

export default input;