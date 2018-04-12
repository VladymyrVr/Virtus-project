import React, {Component} from 'react';

import './EnterButton.css';

class EnterButton extends Component {
        render() {
            return (
                <button className="EnterButton">{this.props.data}</button>
            )
        }
};

export default EnterButton;