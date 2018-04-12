import React, {Component} from 'react';
import store from '../../../redux/store';

import './StatisticsSelect.css';

class StatisticsSelect extends Component {
    handleChange = (e) => {
        store.dispatch({
            type: 'STATISTICS_STATUS',
            payload: e.target.value
        })
    };

    render() {
        return (
            <div className="SelectField">
                <p>Show:</p>
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

export default StatisticsSelect;