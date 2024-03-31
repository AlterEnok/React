import React from 'react';

function Greeting(props) {
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
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
    return age;
}

export default Greeting;