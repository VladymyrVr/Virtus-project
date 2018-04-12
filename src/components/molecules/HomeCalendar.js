import React, {Component} from 'react';
import Calendar from 'react-calendar';

import './HomeCalendar.css'

class HomeCalendar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
        };
    }


    onChange = date => this.setState({ date });

    render() {
        return (
                <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                    locale='us-US'
                    className='HomeCalendar'
                />
        );
    }
}

export default HomeCalendar