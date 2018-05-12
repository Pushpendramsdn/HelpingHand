import React, {Component} from 'react';
import classes from './Sidebar.css';
import Logo from '../../../../Assets/logo.png';
const sidebar = (props) => {
    let attachedClasses = [classes.sideNav, classes.Close];
    if (props.open) {
        attachedClasses = [classes.sideNav, classes.Open];
    }

    return(
        
           
            <div className={attachedClasses.join(' ')}>
                <a href="#"><img src={Logo} alt="Logo" style={{width:'200px', height:'200px'}}/></a>
            
                <a href="#">Home</a>
                <hr/>
                <a href="#">About</a>
                <hr/>
                <a href="#">Services</a>
                <hr/>
                <a href="#">Contact</a>
            </div>
      
    );
};
export default sidebar;