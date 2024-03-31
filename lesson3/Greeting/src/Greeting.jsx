import React from 'react';

function Greeting(props) {
    console.log(props);
    const { firstName, lastName, birthDate } = props;
    const age = calculateAge(birthDate);
    const greetingText = `My name is ${firstName} ${lastName}. I am ${age} years old.`;

    return (
        <div className="greeting">
            {greetingText}
        </div>
    );
}

function calculateAge(birthDate) {
    const today = new Date();
    const diff = today - birthDate;
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export default Greeting;