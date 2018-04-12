import React, {Component} from 'react';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import './SettingsButton.css';

class SettingsButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    handleClick = (event) => {
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    render() {
        return (
            <div>
                    <button className="SettingsButton" onClick={this.handleClick}></button>
                    <Popover
                        open={this.state.open}
                        anchorEl={this.state.anchorEl}
                        anchorOrigin={{horizontal: 'middle', vertical: 'top'}}
                        targetOrigin={{horizontal: 'left', vertical: 'top'}}
                        onRequestClose={this.handleRequestClose}
                        animation={PopoverAnimationVertical}
                        className='PersonMenu'
                    >
                        <Menu>
                            <MenuItem primaryText="Move to Quened"/>
                            <MenuItem primaryText="Move to Planning"/>
                            <MenuItem primaryText="Move to Design"/>
                            <MenuItem primaryText="Move to Development"/>
                            <MenuItem primaryText="Move to Testing"/>
                            <MenuItem primaryText="Move to Production"/>
                            <MenuItem primaryText="Move to Completed"/>
                        </Menu>
                    </Popover>
            </div>
        )
    }
}

export default SettingsButton;