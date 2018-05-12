import React, { Component } from 'react';
import classes from './Navbar.css';
import Logo from '../../../../Assets/logo.png';

const navbar = (props) => {
   
    return (
        <div>
            <nav onClick={props.closed} className={classes.navbar}>
                <span className={classes.openSlide} >
                <a>
                    <svg width="30" height="30">
                        <path d="M0,5 30,5" stroke="#000" strokeWidth="5"/>
                        <path d="M0,14 30,14" stroke="#000" strokeWidth="5"/>
                        <path d="M0,23 30,23" stroke="#000" strokeWidth="5"/>
                    </svg>
                </a>
                </span>
                <span className={classes.brandName}>
                <a href="#">
                    <img src={Logo} alt="Logo" style={{width:'110px', height:'110px'}}/>
                </a>
                </span>
                <ul className={classes.navbarNav}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
                </ul>
                {/* <span className={classes.share}><img src={share}/></span> */}
            </nav>
        </div>
        
    );
};

export default navbar;