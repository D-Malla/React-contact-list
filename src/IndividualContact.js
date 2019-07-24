import React, { Component } from 'react';


class IndividualContact extends Component {
  render() {
    return (
      <div>
        <p>Name: {this.props.first} {this.props.last}</p>
        <p>Email: {this.props.name}</p>
        <p>Phone: {this.props.name}</p>
        <p>Location: {this.props.name}</p>
      </div>
    )
  }
}

export default IndividualContact;