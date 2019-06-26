import React, { Component } from 'react';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

class App extends Component {
  state = {
    username: 'Dickhead'
  }

  handleClick = (newName) => {
    
  };

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({username: event.target.value});
  };

  render() {
    return (
      <div className="App">
        <UserInput changeHandler={this.handleChange} username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
