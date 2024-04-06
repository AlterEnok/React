import React, { useState } from 'react';

const ColorPicker = () => {
    const [color, setColor] = useState('');

    return (
        <div>
            <div className="picker__title">{color}</div>
            <div>
                <button
                    className="picker__button picker__button_coral"
                    onMouseEnter={() => setColor('Coral')}
                    onMouseLeave={() => setColor('')}
                ></button>
                <button
                    className="picker__button picker__button_aqua"
                    onMouseEnter={() => setColor('Aqua')}
                    onMouseLeave={() => setColor('')}
                ></button>
                <button
                    className="picker__button picker__button_bisque"
                    onMouseEnter={() => setColor('Bisque')}
                    onMouseLeave={() => setColor('')}
                ></button>
            </div>
        </div>
    );
};

export default ColorPicker;