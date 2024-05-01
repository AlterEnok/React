import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: this.calculateTime(),
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                date: this.calculateTime(),
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    calculateTime() {
        const { offset } = this.props;
        const currentDate = new Date();
        const utc = currentDate.getTime() + (currentDate.getTimezoneOffset() * 60000);
        const newDate = new Date(utc + (3600000 * offset));

        return newDate;
    }

    formatTime(date) {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12;

        return `${this.formatDigit(formattedHours)}:${this.formatDigit(minutes)}:${this.formatDigit(seconds)} ${ampm}`;
    }

    formatDigit(digit) {
        return digit < 10 ? `0${digit}` : digit;
    }

    render() {
        return (
            <div className='clock'>
                <div className='clock__location'>{this.props.location}</div>
                <div className='clock__time'>{this.formatTime(this.state.date)}</div>
            </div>
        );
    }
}

export default Clock;