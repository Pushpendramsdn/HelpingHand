import React from 'react';
import classes from '../ShareApp.css';
import Whatsapp from '../../../Assets/whatsapp.png';
import Facebook from '../../../Assets/facebook.png';
import Allo from '../../../Assets/allo.png';
import LinkedIn from '../../../Assets/linkedin.png';
import Gmail from '../../../Assets/gmail.png';
import Twitter from '../../../Assets/twitter.png';
import Messages from '../../../Assets/messages.png'


const shareApp = (props) => {

    return(
        <div>
            <div className={classes.shareApp}>
                <div className={classes.header}><h3>Share App with Your Friends</h3></div>
                    <div className={classes.content}>
                    <table>
                        <tbody>
                            <tr>
                                <td><img src={Whatsapp} style={{width:'75px', height:'75px'}}/></td>
                                <td><img src={Facebook} style={{width:'75px', height:'75px'}}/></td>
                            </tr>
                            <tr>
                                <td><img src={Allo} style={{width:'75px', height:'75px'}}/></td>
                                <td><img src={LinkedIn} style={{width:'75px', height:'75px'}}/></td>
                            </tr>
                            <tr>
                                 <td><img src={Gmail} style={{width:'75px', height:'75px'}}/></td>
                                <td><img src={Twitter} style={{width:'75px', height:'75px'}}/></td>
                            </tr>
                            <tr>
                                 <td><img src={Messages} style={{width:'75px', height:'75px'}}/></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
        
    );
};

export default shareApp;