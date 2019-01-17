import React, { Component } from 'react';
import './Styles/userInput.css'
import UserInput from './components/userInput';
import UserOutput from './components/userOutput';


class App extends Component {

    state = {
      username: 'Luiiidsss'
    }
    usernameChangedHandler = (event) => {
      this.setState({username: event.target.value});
    }

  render() {
    return (
      <div>
        <UserInput changed={this.usernameChangedHandler} currentName={this.state.username} />
        <UserOutput username= { this.state.username } />
      </div>
    );
  }
}

export default App;
