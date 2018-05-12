import React, { Component } from 'react';
import SearchResultContainer from '../../Component/SearchResultContainer/SearchResultContainer';
import { connect } from 'react-redux';
import MedDetails from '../../Component/MedDetail/MedDetail';
class SearchResults extends Component {

    state = {
        suggestedmedicines : '',
        meddetails:false,
        medicineInBanner:'',
        genericMedInBanner:'',
        serchedInputChanged:''
    }
   
    searchResultHandler = (key) => {
        const random = this.props.allMeds.map(medicine => {
            if ( medicine.id== key){
                const generic = this.props.genericMeds.map(generic => {
                    if ( generic.Composition== medicine.Composition){
                        this.setState( {genericMedInBanner:generic} );
                    }
            
                });
                this.setState( { meddetails: true,
                                 medicineInBanner:medicine} );
            }

    });    
 }
 inputChangedHandler = (event) => {
   this.setState({serchedInputChanged:event.target.value})
} 
    medDetailClicked = () => {
        this.setState( { meddetails: false} );
    }
    goBackHandler = () => {
        this.props.history.push("/");
    }
    render() {
        let searchedmedicineobject=[]; 
        let serchedMedicinesSuggestions=[];
        const random = this.props.allMeds.map(medicine => {
                if ( medicine.Name.toLowerCase()==this.props.searchMed.toLowerCase() || medicine.Composition.toLowerCase() ==this.props.searchMed.toLowerCase() ||medicine.Name.toLowerCase() ==this.state.serchedInputChanged.toLowerCase() ||medicine.Composition.toLowerCase() ==this.state.serchedInputChanged.toLowerCase() ){

                    searchedmedicineobject.push(medicine);
                   
                }

        });
        const random2 = this.props.allMeds.map(medicine => {
            if(searchedmedicineobject.length > 0){
            if ( medicine.Name.toLowerCase()==searchedmedicineobject[0].Name.toLowerCase() || medicine.Composition.toLowerCase()==searchedmedicineobject[0].Composition.toLowerCase()){

                serchedMedicinesSuggestions.push(medicine);
               
            }
        }
    });
        

        let medDetailBanner='';
        if(this.state.meddetails){
            medDetailBanner = <MedDetails clicked={this.medDetailClicked} genericProperties={this.state.genericMedInBanner} medproperties={this.state.medicineInBanner}/>
        }
        return (
            <div>
                <SearchResultContainer searched={this.props.searchMed} changed={(event) => this.inputChangedHandler(event)} searchResults={serchedMedicinesSuggestions} clicked={(event) => this.searchResultHandler(event)} goBackClicked={this.goBackHandler}/>
                {medDetailBanner}
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
         searchMed: state.medSearchedByUser,
         allMeds: state.medicines,
         genericMeds: state.generics
    };
};

const mapDispatchToProps = dispatch => {
    return {
        //  onSearchHandler: (medName) => dispatch({type: 'seaerchedMed', Value: medName})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);

