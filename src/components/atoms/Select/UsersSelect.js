import React, {Component} from 'react';
import store from '../../../redux/store';

import './UsersSelect.css';

class UsersSelect extends Component {

    handleChange = (e) => {
        store.dispatch({
            type: 'ONLINE_STATUS',
            payload: e.target.value
        })
    };

    render() {
        return (
            <div className="SelectField">
                <p>Show Users</p>
                <select onChange={this.handleChange}>
                    {
                        this.props.data.map((item, index) => {
                            return <option key={index} value={item}>{item}</option>
                        })
                    }
                </select>
            </div>
        )
    }
}

export default UsersSelect;