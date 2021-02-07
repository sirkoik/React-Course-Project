import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Aux from '../../hoc/Auxiliary';
import withClass from '../../hoc/withClass';

import classes from './Person.css';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                <p key="i1" onClick={this.props.onClick}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p key="i2">{this.props.children}</p>
                <input 
                    key="i3"
                    //ref={(inputEl) => {this.inputElement = inputEl;}}
                    ref={this.inputElementRef}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}
                ></input>            
            </Aux>
        );
    }
}

Person.propTypes = {
    onClick: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);