import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting';

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Greeting firstName="John" lastName="Doe" birthDate={new Date(2005, 0, 1)} />,

);