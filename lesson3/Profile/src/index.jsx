import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile';

const userData = {
    firstName: 'James',
    lastName: 'Bond',
    birthDate: '1991-01-17T11:11:11.819Z',
    birthPlace: 'London',
};

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Profile userData={userData} />,
    rootElement
);