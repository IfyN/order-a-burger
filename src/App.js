import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
state = {
  persons: [
    {name: 'Ifeoma', age: '25'},
    {name: 'Chichi', age: '17'},
    {name: 'Somto', age: '20'},
  ]
}
}

render(){
  return(
    <div className="App">
      <h1>React App Test</h1>
      <h1> Its working!</h1>
      <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}> Habelo
      </Person>
      <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}> Habelo
      </Person>
      <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}> Habelo
      </Person>



    
    </div>
  )
}

export default App;
