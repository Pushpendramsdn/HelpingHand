import React from 'react';
import classes from './SearchResult.css';
const searchResult = (props) => {
    return (
        <div>
            <div className={classes.container} onClick={props.clicked}>
                <div>
                    <h3>Name </h3>
                    <p>{props.name}</p>
                </div>
                <div>
                    <h3>Type</h3>
                    <p>{props.type}</p>
                </div>
                <div>
                    <h3>Price</h3>
                    <p>{props.price}</p>
                </div>
                <div>
                    <h3>Composition</h3>
                    <p>{props.composition}</p>
                </div>
            </div>
        </div>
    );
};

export default searchResult;