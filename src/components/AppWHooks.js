import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';
import Person from './Person';

const PeopleList = ({persons}) => {
  const list = persons.map((person, index) =>
    <Person name={person.name} age={person.age} key={index}>{person.info}</Person>);

  return list;
};

const App = () => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Timmy', age: 12 },
      { name: 'Kimmy', age: 31, info: "I LIKE TURTLES" },
      { name: 'Jeffrey', age: 53 }
    ]
  })

  const handleClick = () => {
    setPersonsState({ persons: [
      { name: 'TIMMMAAAAAY', age: 12 },
      { name: 'KIMMMMAAAAAAY', age: 31, info: "I LIKE TURTLES" },
      { name: 'JEFFFREAAAAY', age: 55 }
    ] });
  };

  return (
    <div className="App">
      <h1>Hi, I am not React dev.</h1>
      <button onClick={handleClick}>switch name</button>
      <PeopleList persons={personsState.persons} />
    </div>
  );
}

export default App;
