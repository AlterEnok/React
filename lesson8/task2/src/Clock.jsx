import React, { useState, useEffect } from 'react';

const Clock = ({ location, offset }) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formattedTime = new Date(time.getTime() + offset * 3600 * 1000)
        .toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    return (
        <div className="clock">
            <div className="clock__location">
                {location}
            </div>
            <div className="clock__time">
                {formattedTime}
            </div>
        </div>
    );
};

export default Clock;