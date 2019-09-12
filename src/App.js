import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { name: 'Max' },
      { name: 'Min' }
    ]  
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName },
        { name: 'Min' }
      ]  
    });       
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value },
        { name: 'Min' }
      ]  
    });    
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <button onClick={this.switchNameHandler.bind(this, 'Amogh')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name}
          click={() => this.switchNameHandler('Test')}
          nameChange={this.nameChangedHandler}>  
              My hobbies are reading and driving.           
        </Person>
        <Person 
          name={this.state.persons[1].name}
          click={() => this.switchNameHandler('Hello')}>
        </Person>
      </div>
    );

    //return (React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am a react app.')));
  }
}

export default App;
