import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Contact from "./Contacts"
import IndividualContact from "./IndividualContact"
import users from './randomUsers.json';
import "./app.css";
import {FaUserCircle} from 'react-icons/fa';


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
