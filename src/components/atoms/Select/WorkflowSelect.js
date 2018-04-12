import React, {Component} from 'react';
import store from '../../../redux/store';

import './WorkflowSelect.css';

class WorkflowSelect extends Component {
    handleChange = (e) => {
     store.dispatch({
         type: 'TRELLO_STATUS',
         payload: e.target.value
     })
    };

    render() {
        return (
            <div className="SelectField">
                <p>Show projects:</p>
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

export default WorkflowSelect;