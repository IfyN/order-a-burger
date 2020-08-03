import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';
import { render } from '@testing-library/react';

const app = props => {
 const [personState, setPersonsState] = useState({
  persons: [
    {name: 'Ifeoma', age: '25'},
    {name: 'Chichi', age: '17'},
    {name: 'Somto', age: '20'}
  ],
  otherState: 'some value'
 });

render() {
  return (
    <div className="App">
      <h1>React App Test</h1>
      <h1> Its working!</h1>
      <button onClick={this.switchNameHandler}> Switch name</button>
      <Person name = {personState.persons[0].name} age = {personState.persons[0].age}/>
      <Person name = {personState.persons[1].name} age = {personState.persons[1].age}/>
      <Person name = {personState.persons[2].name} age = {personState.persons[2].age}/>
  </div>
  );
}
}



export default app;



switchNameHandler = () =>{
  //console.log('Was clicked');
  this.setState(
    {
      persons: [
        {name: 'Mungolo', age: '25'},
        {name: 'Bumbolo', age: '17'},
        {name: 'Sompolo', age: '20'}
      ]
    }
  )
}