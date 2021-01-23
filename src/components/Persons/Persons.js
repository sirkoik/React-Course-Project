import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    // should have an initial state in order to use this.
    // this is the first lifecycle hook that runs.
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps')

    //     return state;
    // }

    // triggers when component may be receving new props.
    // deprecated
    componentWillReceiveProps(props) {
        console.log('[Persons.js] componentWillReceiveProps', props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');

        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'snapshot!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    render() {
        console.log('[Persons.js] rendering...');

        return this.props.persons.map((person, index) => {
            return (
                <Person 
                onClick={() => {this.props.clicked(index)}}
                name={person.name} 
                age={person.age}
                key={person.id}
                changed={(event) => {this.props.changed(event, person.id)}}></Person>
            );
        });
    }
}

export default Persons;