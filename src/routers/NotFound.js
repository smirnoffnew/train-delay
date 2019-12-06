import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import './NotFound.css'

class NotFound extends Component {
  render() {
    return <Redirect to={`/?lang=en&refresh=30`} />
  }
}

export default NotFound;




