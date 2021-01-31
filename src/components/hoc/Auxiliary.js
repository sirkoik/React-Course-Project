// returns what is between the opening and closing tag of the component in the JSX
// useful for creating a wrapper component that doesn't affect the DOM structure.
const aux = props => props.children;

export default aux;