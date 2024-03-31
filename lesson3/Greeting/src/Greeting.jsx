import React from 'react';
import ReactDOM from 'react-dom';

const Greeting = ({ firstName, lastName, birthDate }) => {
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();


    if (today < new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate())) {
        age--;
    }

    return (
        <div className="greeting">My name is {firstName} {lastName}. I am {age} years old.</div>
    );
};

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Greeting firstName="John" lastName="Doe" birthDate={new Date('2005-12-31')} />,
    rootElement
);
export default Greeting;