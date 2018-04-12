import React, {Component} from 'react';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import './ProjectOptionButton.css';

class ProjectOptionButton extends Component {
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
                <button className="ProjectOptionButton" onClick={this.handleClick}></button>
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
                        <MenuItem primaryText="Change status"/>
                        <MenuItem primaryText="Send project to QA"/>
                        <MenuItem primaryText="Up value"/>
                        <MenuItem primaryText="Set as important project"/>
                    </Menu>
                </Popover>
            </div>
        )
    }
}

export default ProjectOptionButton;