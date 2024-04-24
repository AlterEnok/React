import React from 'react';
import moment from 'moment';
const Transaction = ({ from, to, amount, rate, time }) => {
    const formattedAmount = new Intl.NumberFormat('en-GB').format(amount);
    const formattedTime = moment(time).format('DD MMM, HH:mm');

    return (
        <li className="transaction">
            <span className="transaction__date">{formattedTime}</span>
            <span className="transaction__time">{formattedTime}</span>
            <span className="transaction__assets">{`${from} → ${to}`}</span>
            <span className="transaction__rate">{rate}</span>
            <span className="transaction__amount">{formattedAmount}</span>
        </li>
    );
};
export default Transaction;