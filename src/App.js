import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./Contacts"
import IndividualContact from "./IndividualContact"
import users from './randomUsers.json';
import "./App.css";



class App extends Component {
  render() { 
      return (
        <Router>
          <Route path="/user/:id" component={IndividualContact} />
          <Route exact path="/" component={Contact} />
        </Router> 
    );
  };
};

export default App;
