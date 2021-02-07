import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');

        // setTimeout(() => {
        //     alert('saved data to cloud')
        // }, 1000);

        toggleBtnRef.current.click();

        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, [props.persons]);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');

        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd    useEffect');
        };
    });

    let btnClass = '';
    if (props.showPersons) btnClass = classes.Red;

    const classesArray = [];
    if (props.personsLength <= 2) {
      classesArray.push(classes.red); // classes = ['red']
    }
    if (props.personsLength <= 1) {
      classesArray.push(classes.bold); // classes = ['red', 'bold']
    }
    const classesArrayJoin = classesArray.join(' ');

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classesArrayJoin}>This is really working.</p>
            <button 
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>
                Toggle Persons
            </button>
        </div>    
    )
}

export default React.memo(cockpit);