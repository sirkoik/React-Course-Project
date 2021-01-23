import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

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

  constructor(props) {
    super(props);
    console.log('app.js constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
  }

  // only older versions of React support this
  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');

    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
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
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
      />;
    }

    return (
      <div className={classes.App}>
        <Cockpit
          persons={this.state.persons}
          showPersons = {this.state.showPersons}
          clicked={this.togglePersonsHandler}
          title={this.props.appTitle}
          >
        </Cockpit>
        {persons}
      </div>
    );
  }
}

export default App;
