import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';

const App = props => {
 const [personsState, setPersonsState] = useState({
  persons: [
    {name: 'Ifeoma', age: '25'},
    {name: 'Chichi', age: '17'},
    {name: 'Somto', age: '20'}
  ],
  otherState: 'some value'
 });

 console.log(personsState);

 const switchNameHandler = () => {
  //console.log('Was clicked');
  setPersonsState({
      persons: [
        {name: 'Mungolo', age: '25'},
        {name: 'Chimpolo', age: '17'},
        {name: 'Sompolo', age: '20'}
      ]
    });
}
  return (
    <div className="App">
      <h1>This is a react App</h1>
      <h1> Its working!</h1>
      
      <button onClick={switchNameHandler}> Switch name</button>
      <Person name = {personsState.persons[0].name} 
      age = {personsState.persons[0].age} />
      <Person name = {personsState.persons[1].name} 
      age = {personsState.persons[1].age}
       > My hobbies: Racing</Person>
      <Person name = {personsState.persons[2].name} 
      age = {personsState.persons[2].age}/>
  </div>
  );
} ;

export default App;