import React, { Component } from 'react';
import Clock from './Clock';

class App extends Component {
    state = {
        visible: true,
    };

    toggle = () => {
        this.setState({
            visible: !this.state.visible,
        });
    };

    render() {
        return (
            <div>
                <button onClick={this.toggle}>Toggle</button>
                {this.state.visible && (
                    <div>
                        <Clock location="London" offset={0} />
                        <Clock location="Kyiv" offset={2} />
                        <Clock location="New York" offset={-5} />
                    </div>
                )}
            </div>
        );
    }
}

export default App;