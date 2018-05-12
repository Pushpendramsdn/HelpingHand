import React from 'react';
import classes from './HomeBanner.css'
import Logo from '../../../../Assets/logo.png';
const homeBanner = (props) => {
    return (
            <div className={classes.container}>
                <div className={classes.logo}>
                    <img src={Logo} alt="Logo" className={classes.logoImage} />
                </div>
		     </div>

    );
}

export default homeBanner;