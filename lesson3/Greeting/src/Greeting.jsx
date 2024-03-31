import React from 'react';

const Greeting = ({ firstName, lastName, birthDate }) => {
    const calculateAge = (birthDate) => {
        const today = new Date();
        const dob = new Date(birthDate);
        let age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate)) {
            age--;
        }
        return age;
    };

    const age = calculateAge(birthDate);

    return (
        <div className="greeting">
            My name is {firstName} {lastName}. I am {birthDate} years old.
        </div>
    );
};

export default Greeting;