import React from 'react';

import classes from './Person.css';

// const StyledDiv = styled.div`
//     width: 60%;
//     margin: 16px auto 16px auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16px;
//     text-align: center;

//     @media (min-width: 500px) {
//         width: 450px;
//     }
// `;

const person = (props) => {
    // const style = {
    //     '@media(min-width: 500px)': {
    //         width: '450px'
    //     }
    // }

    return (
        <div className={classes.Person}>
            <p onClick={props.onClick}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
}

export default person;

// import React, { Component } from 'react';
// class Person extends Component {
//     render() {
//         return <p>I'm a person too!</p>
//     }
// }

// export default Person;