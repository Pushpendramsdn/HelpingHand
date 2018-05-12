import React from 'react';
import Input from '../Layout/UI/Input/Input';
import classes from './SearchResultContainer.css';
import Button from '../Layout/UI/Button/Button';
import SearchResult from '../SearchResult/SearchResult';
import GoBack from '../Layout/UI/GoBack/GoBack';
const searchResultContainer = (props) => {
    let searchedOptions='';
    if(props.searchResults.length > 0){

    searchedOptions = props.searchResults.map(SearchOption => {
        return  <SearchResult key={SearchOption.id} name={SearchOption.Name} type={SearchOption.Type} price={SearchOption.Price} composition={SearchOption.Composition} clicked={(id)=>props.clicked(SearchOption.id)}/>
    });
    }
     else{
         searchedOptions=<h2 style={{textAlign:'center'}}>No Result Found</h2>
    }
    return (
        <div>
            <div style={{marginBottom:'62px'}}>
            <div className={classes.searchBoxHolder}>
                <GoBack clicked={props.goBackClicked}/>
                <Input type={'text'} placeholder={props.searched} changed={props.changed} />
            </div>
            {searchedOptions}
            </div>
        </div>

    );
};

export default searchResultContainer;