  import React, { Component } from 'react';
  import App from './App';
  import users from './randomUsers.json';
  import { BrowserRouter as Router, Route, Link } from "react-router-dom";
  import {FaArrowLeft, FaEnvelope, FaMobileAlt, FaGlobeAmericas} from 'react-icons/fa'; 
  import {FaUserAlt} from 'react-icons/fa'; 
  import {FaUserCircle} from 'react-icons/fa';
  import "./app.css";


  class IndividualContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    location: ''
  };

  getUsers = (id) => {
    const people = users.find(user => id == user.id)

    this.setState({
      name: people.name.first + ' ' + people.name.last,
      email: people.email,
      phone: people.phone,
      location: people.location.state + ', ' + people.location.city
    })
  }

  componentWillReceiveProps(newprops) {
    if(newprops.match.params.id !== this.props.match.params.id) {
      this.getUsers(newprops.match.params.id)
    }
  }

  componentDidMount() {
  this.getUsers(this.props.match.params.id)

  }

  render() {
    return (
      <div id='contactDiv'>
      <div id="contactHeading">
        <Link to='/'><FaArrowLeft id="arrow"/></Link>
        <FaUserCircle id="contactIcon"/>
      </div>
        <ul>
          <li><FaUserAlt className="contacts"/> {this.state.name}</li>
          <li><FaEnvelope className="contacts"/> {this.state.email}</li>
          <li><FaMobileAlt className="contacts"/>  {this.state.phone}</li>
          <li><FaGlobeAmericas className="contacts"/>  {this.state.location}</li>
        </ul>
      <Route exact path="/" component={App} />
    </div>
    )
  }
}

export default IndividualContact;