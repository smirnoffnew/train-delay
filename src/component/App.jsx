import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return <Redirect
      to={`/DelayPage?lang=en&refresh=5000`}
    />;
  }
}

export default App;
