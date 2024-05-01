import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: this.calculateTime(props.offset),
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                date: this.calculateTime(this.props.offset),
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    calculateTime(offset) {
        const currentDate = new Date();
        const utc = currentDate.getTime() + (currentDate.getTimezoneOffset() * 60000);
        const newDate = new Date(utc + (3600000 * offset));
        return newDate;
    }

    render() {
        return (
            <div className='clock'>
                <div className='clock__location'>{this.props.location}</div>
                <div className='clock__time'>{this.state.date.toLocaleTimeString()}</div>
            </div>
        );
    }
}

export default Clock;