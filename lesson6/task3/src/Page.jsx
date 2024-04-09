import React, { Component } from 'react';
import Info from './Info';

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: null
        };
    }

    setInfo = info => {
        this.setState({
            info
        });
    };

    render() {
        return (
            <div className="page">
                <Info info={this.state.info} />
                <div className="actions">
                    <button className="btn" onClick={() => this.setInfo('Price is 500$. Available in 2 colors')} >Info 1</button>
                    <button className="btn" onClick={() => this.setInfo('Price is 650$. Not available')}>Info 2</button>
                    <button className="btn" onClick={() => this.setInfo('')}>Clear</button>
                </div>
            </div>
        );
    }
}

export default Page;