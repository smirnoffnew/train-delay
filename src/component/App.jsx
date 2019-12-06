import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return <Redirect to={`/DelayPage?lang=en&refresh=30`} />;
  }
}

export default App;
