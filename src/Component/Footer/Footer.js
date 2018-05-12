import React from 'react';
import classes from './Footer.css';
import share from '../../Assets/share.png';
import rateApp from '../../Assets/google.png';
import emailTo from '../../Assets/whatsapp.png'
const footer = (props) => {
    return(
        
            <div className={classes.container}>
                <div><img src={emailTo}/></div>
                <div><img src={rateApp}/></div>
                <div onClick={props.shareIconClicked}><img src={share}/></div>
            </div>
       
    );
};

export default footer;