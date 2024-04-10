import React from 'react';

const Offline = ({ onReconnect }) => {
    return (
        <div className="offline">
            <div>Offline</div>
            <button className="btn" onClick={onReconnect}>Reconnect</button>
        </div>
    );
};
export default Offline;