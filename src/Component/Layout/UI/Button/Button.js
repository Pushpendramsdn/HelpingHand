import React from 'react';
import classes from './Button.css';

const button = (props) => {
    let attachedClasses = [classes.Button, classes.Disabled];
    if (!props.disabled) {
        attachedClasses = [classes.Button, classes.Enabled];
    }
    return (

        <div className={classes.btnContainer}>
                <button className={attachedClasses.join(' ')} onClick={props.clicked} disabled={props.disabled}>{props.name}</button>
            </div>
        );
};

export default button;