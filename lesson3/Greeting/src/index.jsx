import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting';

ReactDOM.render(
    <Greeting firstName="John" lastName="Doe" birthDate={new Date(2005, 0, 1)} />,
    document.getElementById('root')
);