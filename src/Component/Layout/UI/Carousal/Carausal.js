import React from 'react';
import classes from './Carausal.css'
import Banner from '../../../../Assets/1.jpg';

const carousal = (props) => {
    return(
        <div>
            <div className={classes.Banner}>
            {/* <img src={Banner} alt="Smiley face" className={classes.carousal}/> */}
            <div className={classes.Title}>
			<h1 style={{'fontWeight': 300}}>Bone up Daily</h1>	
			</div>
			
			<p>Get your daily calcium by popping a tab, chugging milk or eating yoghurt. It’ll keep your bones strong. Remember that your bone density declines after the age of 30. You need at least 200 milligrams daily, which you should combine with magnesium, or it simply won’t be absorbed.</p>
            </div>
        </div>
    );
};

export default carousal;