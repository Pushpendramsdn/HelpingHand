import React from 'react';
import classes from './MedDetails.css';
import GoBack from '../Layout/UI/GoBack/GoBack';
const medDetail = (props) => {
    return (
        
            <div className={classes.container}>
                    <div>
                        <div className={classes.MedName}>  <GoBack clicked={props.clicked}/><h2>{props.medproperties.Name}</h2></div>
                    </div>
                    <div>
                        <div className={classes.Type}>
                            <div className={classes.headerType}><h2>Type</h2></div>
                            <div className={classes.ContentType}><h2>{props.medproperties.Type}</h2></div>
                        </div>
                        <div className={classes.Price}>
                            <div className={classes.headerPrice}><h2>Price</h2></div>
                            <div className={classes.ContentPrice}><h2>{props.medproperties.Price}/{props.medproperties.Type}</h2></div>
                        </div>
                    </div>
                    <div>
                        <div className={classes.header}><h2>Composition</h2></div>
                        <div className={classes.Content}><h2>{props.medproperties.Composition}
                            </h2>
                        </div>
                    </div>
                    <div>
                        <div className={classes.header}><h2>Medicine Overview</h2></div>
                        <div className={classes.Content}><h2>Flucold Tablet is a combination of four medicines: Chlorpheniramine, paracetamol and phenylephrine which relieve cold symptoms. Chlorpheniramine is an antiallergic which relieves allergy symptoms like runny nose, watery eyes and sneezing. Paracetamol is an analgesic (pain reliever) and antipyretic (fever reducer). It blocks the release of certain chemical messengers in the brain that are responsible for pain and fever. Phenylephrine is a nasal decongestant which narrows the small blood vessels providing relief from congestion or stuffiness in the nose.
                            </h2>
                        </div>
                    </div>
                    <div>
                        <div className={classes.header}><h2>Alternate Generic Medicine</h2></div>
                        <div className={classes.Content}><h2>{props.genericProperties.Name}</h2>
                        </div>
                    </div>
                    <div>
                        <div className={classes.header}><h2>You will save if You go with generic</h2></div>
                        <div className={classes.Content}><h2>Rs. {props.medproperties.Price-props.genericProperties.Price}/{props.medproperties.Type}</h2>
                        </div>
                    </div>
                    
            </div>
        
    );
}

export default medDetail;