import React, { Component } from 'react';
import Carousal from '../../Component/Layout/UI/Carousal/Carausal';
import SearchHere from '../../Component/SearchHere/SearchHere';
import { connect } from 'react-redux';

class SearchHolder extends Component{
    // state={
    //     searchButtonDisable:true
    // }
    searchHereHandler = () => {
        this.props.history.push("/searchResults");
    }
   
    render(){
        return (
            <div>
                <div style={{'textAlign': 'center'}}>
                <SearchHere clicked={this.searchHereHandler} searchButtonStatus={this.props.searchButtonstatus} changed={(event) => this.props.onSearchHandler(event.target.value)}/>
                </div>
                <Carousal />
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
         searchMed: state.medSearchedByUser,
         searchButtonstatus: state.searchButton

    };
};

const mapDispatchToProps = dispatch => {
    return {
         onSearchHandler: (medName) => dispatch({type: 'seaerchedMed', Value: medName})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchHolder);
