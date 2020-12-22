import React from 'react';
import Radium from 'radium';

import './Person.css';

const person = (props) => {
    const style = {
        '@media(min-width: 500px)': {
            width: '450px'
        }
    }

    return (
        <div className="Person" style={style}>
            <p onClick={props.onClick}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
}

export default Radium(person);

// import React, { Component } from 'react';
// class Person extends Component {
//     render() {
//         return <p>I'm a person too!</p>
//     }
// }

// export default Person;