import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
state = {
  persons: [
    {name: 'Ifeoma', age: '25'},
    {name: 'Chichi', age: '17'},
    {name: 'Somto', age: '20'}
  ]
}

switchNameHandler = () =>{
  //console.log('Was clicked');
  this.state.persons[0].name = Maximillia
}

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



export default App;
