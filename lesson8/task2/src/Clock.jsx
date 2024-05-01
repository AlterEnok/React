import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                date: new Date(),
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { location, offset } = this.props;
        const localDate = new Date(this.state.date.getTime() + offset * 3600000);
        const hours = localDate.getHours();
        const minutes = localDate.getMinutes();
        const seconds = localDate.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        return (
            <div className="clock">
                <div className="clock__location">
                    {location}
                </div>
                <div className="clock__time">
                    {`${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds} ${ampm}`}
                </div>
            </div>
        );
    }
}

export default Clock;