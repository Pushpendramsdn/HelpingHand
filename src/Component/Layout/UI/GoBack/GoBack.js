import React from 'react';
import classes from './GoBack.css';
const goBack = (props) =>{
    return (
       
        <div className={classes.GoBack} onClick={props.clicked}>
            <i className="fas fa-chevron-left"></i>
        </div>
    );
};

export default goBack;