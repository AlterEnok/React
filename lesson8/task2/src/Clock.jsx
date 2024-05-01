import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: this.getLocalTime(props.offset),
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                date: this.getLocalTime(this.props.offset),
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getLocalTime(offset) {
        const now = new Date();
        const utc = now.getTime() + now.getTimezoneOffset() * 60000;
        const localTime = new Date(utc + 3600000 * offset);
        return localTime.toLocaleTimeString();
    }

    render() {
        return (
            <div className="clock">
                <div className="clock__location">{this.props.location}</div>
                <div className="clock__time">{this.state.date}</div>
            </div>
        );
    }
}

export default Clock;