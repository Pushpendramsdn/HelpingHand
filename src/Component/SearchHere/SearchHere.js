import React from 'react';
import classes from './SearchHere.css';
import Input from '../Layout/UI/Input/Input';
import Button from '../Layout/UI/Button/Button';
const searchHere = (props) => {
        return (
            <div>
                <div className={classes.componentTitle}>
                    <h2>Looking For Medicine?</h2>
                </div>
                <div className={classes.componentSubTitle}>
                   <p>Please consult physician before use of any medicine!</p>
                </div>
                <Input type={'text'} placeholder={"Search Here.."} classname={'InputField'} changed={props.changed}/>
                <Button disabled={props.searchButtonStatus} name={'Search'} clicked={props.clicked}/>

            </div>
        );
};

export default searchHere;