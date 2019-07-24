import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import IndividualContact from "./IndividualContact"
import users from './randomUsers.json';
import "./App.css";

class Contacts extends Component {
  render() {
    return (
      <div>
      <nav id="wrapper">
        <h2 id ="mainHeading">My Peeps</h2>
        <ul> 
          {users.map(user => (
            <li className="userLinks" key={user.id}>
              <Link to={"/user/" + user.id} className="mainLinks">
              <div><img src={user.picture.thumbnail}id="mainIcons" alt="user thumbnail"/></div>
              <div id='haha'>{user.name.first + ' ' + user.name.last}</div>
              </Link>
            </li> 
          ))}
        </ul>
      </nav>
    </div>
    )
  };
}

  export default Contacts;