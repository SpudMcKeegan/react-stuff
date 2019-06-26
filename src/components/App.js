import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';
import Person from './Person';

const PeopleList = ({persons, clickHandler, changeHandler}) => {
  const list = persons.map((person, index) =>
    <Person name={person.name} age={person.age} key={index} clickHandler={clickHandler} changeHandler={changeHandler}>{person.info}</Person>);

  return list;
};

class App extends Component {
  state = {
    persons: [
      { name: 'Timmy', age: 12 },
      { name: 'Kimmy', age: 31, info: "I LIKE TURTLES" },
      { name: 'Jeffrey', age: 53 }
    ]
  }

  handleClick = (newName) => {
    this.setState({ persons: [
      { name: newName, age: 12 },
      { name: 'KIMMMMAAAAAAY', age: 31 },
      { name: 'JEFFFREAAAAY', age: 55 }
    ]})
  };

  handleNameChange = (event) => {
    this.setState({ persons: [
      { name: 'Timmy', age: 12 },
      { name: event.target.value, age: 31 },
      { name: 'JEFFFREAAAAY', age: 55 }
    ]})
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I am not React dev.</h1>
        <button onClick={this.handleClick.bind(this, 'djfioasa')}>switch name</button>
        <PeopleList persons={this.state.persons} clickHandler={() => this.handleClick('test')} changeHandler={this.handleNameChange} />
      </div>
    );
  }
}

export default App;
