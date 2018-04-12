import React, { Component } from 'react';
import {connect} from 'react-redux'

import './Users.css';

//components
import UsersSelect from "../atoms/Select/UsersSelect";
import Userstable from '../molecules/UsersTable';

const UsersSelectData = [ 'All Users', 'Online only', 'Offline only'];

class Users extends Component {
    render() {
        return (
            <section className="UsersPage">
                <div className="UsersHeader">
                    <p className='PageName'>Users ({this.props.userDataLength})</p>
                    <UsersSelect data={UsersSelectData}/>
                </div>
                <div className="UsersContent">
                    <Userstable/>
                </div>
            </section>
        );
    }
}

const mapState = (state, props) => {
    return {
        userDataLength: state.userLength
    }
};

export default connect(mapState)(Users);