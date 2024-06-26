import React, { Component } from "react";
import './counter.scss';


let counter = 0;



class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: props.start,
        };

        setInterval(() => {
            this.setState((prevState) => ({
                counter: prevState.counter + 1
            }));

        }, props.interval)
    }

    render() {
        return (
            <div className="counter">{this.state.counter}</div>
        )
    }
}

export default Counter;