import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';
import { render } from '@testing-library/react';

const app = props => {
 const stateArr = useState({
  persons: [
    {name: 'Ifeoma', age: '25'},
    {name: 'Chichi', age: '17'},
    {name: 'Somto', age: '20'}
  ],
  otherState: 'some value'
 })

render() {
  return (
    <div className="App">
      <h1>React App Test</h1>
      <h1> Its working!</h1>
      <button onClick={this.switchNameHandler}> Switch name</button>
      <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}/>
      <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}/>
      <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}/>
  </div>
  );
}
}



export default app;



state = {
  persons: [
    {name: 'Ifeoma', age: '25'},
    {name: 'Chichi', age: '17'},
    {name: 'Somto', age: '20'}
  ]
}

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