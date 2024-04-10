import React from 'react';
import Online from './Online';
import Offline from './Offline';

const Status = ({ isOnline, onReconnect }) => {
    return isOnline ? <Online /> : <Offline onReconnect={onReconnect} />;
};

export default Status;