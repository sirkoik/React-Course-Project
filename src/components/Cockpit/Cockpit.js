import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    let btnClass = '';
    if (props.showPersons) btnClass = classes.Red;

    const classesArray = [];
    if (props.persons.length <= 2) {
      classesArray.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
      classesArray.push(classes.bold); // classes = ['red', 'bold']
    }
    const classesArrayJoin = classesArray.join(' ');

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classesArrayJoin}>This is really working.</p>
            <button 
                className={btnClass}
                onClick={props.clicked}>
                Toggle Persons
            </button>
        </div>    
    )
}

export default cockpit;