import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.showPersons? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.showPersons? 'salmon' : 'lightgreen'};
    color: black;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: 'a2abds52f', name: 'Alex', age: 35 },
      { id: 'z7b7zs57a', name: 'Doug', age: 40 },
      { id: '34225SDFb', name: 'Jen', age: 38 }
    ],
    otherState: 'Another value',
    showPersons: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // do NOT simply copy the array and assign a value
    // to a property of one of the sub-objects. Copy the
    // sub-object and assign to it. This is a deeper copy
    // that maintains the immutability of the state object.
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  render() {
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person 
                onClick={() => {this.deletePersonHandler(index)}}
                name={person.name} 
                age={person.age}
                key={person.id}
                changed={(event) => {this.nameChangedHandler(event, person.id)}}></Person>
            );
          })}
        </div>        
      );
      
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    //let classes = ['red', 'bold'].join(' '); // 'red bold' - valid CSS class list
    const classesArray = [];
    if (this.state.persons.length <= 2) {
      classesArray.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classesArray.push('bold'); // classes = ['red', 'bold']
    }
    const classes = classesArray.join(' ');

    return (
      <div className="App">
        <h1>Hi, I'm a react app!</h1>
        <p className={classes}>This is really working.</p>
        <StyledButton 
          showPersons={this.state.showPersons} 
          onClick={this.togglePersonsHandler}>
            Toggle Persons
        </StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
