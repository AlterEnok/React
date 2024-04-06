import React from 'react';



class Toggler extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isOn: false };
    }

    handleClick = () => {
        this.setState((prevState) => ({
            isOn: !prevState.isOn
        }));
    }

    render() {
        return (
            <div className="toggler" onClick={this.handleClick}>
                {this.state.isOn ? 'On' : 'Off'}
            </div>
        );
    }


}



export default Toggler;