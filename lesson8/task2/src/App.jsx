import React, { useState } from 'react';
import Clock from './Clock';

const App = () => {
    const cities = [
        { name: 'London', offset: 0 },
        { name: 'Kyiv', offset: 2 },
        { name: 'New York', offset: -5 }
    ];
    const [visible, setVisible] = useState(true);

    const toggleClocks = () => {
        setVisible(!visible);
    };

    return (
        <div>
            <button onClick={toggleClocks}>Toggle</button>
            {visible && cities.map(city => (
                <Clock key={city.name} location={city.name} offset={city.offset} />
            ))}
        </div>
    );
};

export default App;