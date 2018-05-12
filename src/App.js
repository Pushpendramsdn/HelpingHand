import React, { Component } from 'react';
import './App.css';
import Layout from './Component/Layout/Layout';
import SearchHolder from './Container/SearchHolder/SearchHolder';
import { Switch, Route } from 'react-router-dom';
import SearchResults from './Container/SearchResults/SearchResults';
import MedicineDetails from './Container/MedicineDetails/MedicineDetails';

class App extends Component {
  render() {
    return (
      <Layout>
       <Switch>
      <Route exact path='/' component={SearchHolder}/>
      <Route path='/searchResults' component={SearchResults}/>
    </Switch>
      </Layout>
    );
  }
}

export default App;
