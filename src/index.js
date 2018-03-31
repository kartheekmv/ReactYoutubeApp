import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This component should produce some HTML

// components in this case "App" is like a class? and we can use instances of thet using this syntax
// <App></App>
// since there is nothing between the tags we can write it as <App /> it is a valid JSX
const App = () => {        // "=>"(fat arrow) almost same as function(){}
    return <div>Hi!</div>;
}

// Take this component's generated HTML and put it
// on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
