import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Contact from "./Contact"
import users from './randomUsers.json';
import "./app.css";
import {FaUserCircle} from 'react-icons/fa';


class App extends Component {
  render() { 
      return (
        <Router>
          <div>
            <nav id="wrapper">
              <h2 id ="mainHeading">My Peeps</h2>
              <ul> 
                {users.map(user => (
                  <li className="userLinks" key={user.id}>
                    <Link to={"/user/" + user.id} className="mainLinks">
                    <div><FaUserCircle id="mainIcons"/></div>
                    <div id='haha'>{user.name.first + ' ' + user.name.last}</div>
                    </Link>
                  </li> 
                ))}
              </ul>
            </nav>
          </div>
          <Route path="/user/:id" component={Contact} />
        </Router> 
    );
  };
};

export default App;
