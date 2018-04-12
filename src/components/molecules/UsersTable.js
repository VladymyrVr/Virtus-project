import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {connect} from 'react-redux';

import './UsersTable.css';

//components
import store from "../../redux/store";
import ProjectOptionButton from '../atoms/Buttons/ProjectOptionButton'

//img
import Dominic from '../../assets/img/dominic.png';
import John from '../../assets/img/john.png';
import Jolene from '../../assets/img/jolene.png';
import Lyall from '../../assets/img/lyall.png';
import Michelle from '../../assets/img/michelle.png';


class UsersTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            resUsersList: '',
            usersList: '',

        }
    }

    componentWillMount() {
        fetch('/api/users', {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            method: 'GET',
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    resUsersList: res,
                    usersList: res
                });
                store.dispatch({
                    type: 'USER_LENGTH',
                    payload: this.state.resUsersList.length
                });
            });
    }

    setUserImg = (target) => {
        if (target === 'Dominic Lynton') {
            return Dominic
        }
        else if (target === 'Lyall Roach') {
            return Lyall
        }
        else if (target === 'Michelle Stewart') {
            return Michelle
        }
        else if (target === 'John Dracula') {
            return John
        }
        else if (target === 'Jolene Slater') {
            return Jolene
        }
    };

    ProfileWrap = (cell, row) => {
        return (
            <div className="UsersTableTableCell align-items-center">
                <div className="ProfileInfoWrap">
                    <p className={row.activity === 'Online now!' ? "Online" : "Offline"}></p>
                    <div className="ProfilePhotoWrap">
                        <img src={this.setUserImg(row.name)} alt={row.name}/>
                    </div>
                </div>
                <div>
                    <span className="ProfileName">{row.name}</span>
                    <span className="ProfileProf">{row.prof}</span>
                </div>
            </div>
        )
    };

    Activity = (cell, row) => {
        return (
            <div className="UsersTableTableCell">
                <div className="ActivityWrapper">
                    <p className={row.activity === 'Online now!' ? "ActivityStatusOnline OnlineActive" : "ActivityStatusOffline" +
                        " OfflineActive"}>
                        {row.activity === 'Online now!' ? "Online now!" : row.activity}
                    </p>
                </div>
            </div>
        )
    };

    Email = (cell, row) => {
        return (
            <div className="UsersTableTableCell">
                <a className="email" href="mailto:">{row.mail}</a>
            </div>
        )
    };

    MenuWrapper = () => {
        return (
            <ProjectOptionButton/>
        )
    };

    TelNumber = (cell, row) => {
        return (
            <div className="UsersTableTableCell">
                <a className="tel" href="">{row.phone}</a>
            </div>
        )
    };


    filterUsers = (status) => {
        if (status === 'All Users') {
            this.setState({
                usersList: this.state.resUsersList
            });
            store.dispatch({
                type: 'USER_LENGTH',
                payload: this.state.resUsersList.length
            });
        }
        else if (status === 'Online only') {
            let result = this.state.resUsersList.filter((item) => {
                return item.activity === 'Online now!'
            });
            store.dispatch({
                type: 'USER_LENGTH',
                payload: result.length
            });
            this.setState({
                usersList: result
            })
        }
        else if (status === 'Offline only') {
            let result = this.state.resUsersList.filter((item) => {
                return item.activity !== 'Online now!'
            });
            store.dispatch({
                type: 'USER_LENGTH',
                payload: result.length
            });
            this.setState({
                usersList: result
            })
        }
    };

    render() {
        store.subscribe((state) => {
            this.filterUsers(store.getState().onlineStatus);
        });
        const options = {
            sizePerPage: 5,
            hideSizePerPage: true,
            sizePerPageList: [5, 10, 15]
        };
        return (
            <div className='UsersTable'>
                <BootstrapTable
                    data={this.state.usersList}
                    tableStyle={{border: 'none'}}
                    options={options}
                    pagination
                    tableBodyClass='UsersTable-Body'>

                    <TableHeaderColumn
                        width="360"
                        dataField='name'
                        thStyle={{border: 'none'}}
                        dataFormat={this.ProfileWrap}
                        isKey>Name
                    </TableHeaderColumn>
                    <TableHeaderColumn
                        width="300"
                        thStyle={{border: 'none'}}
                        dataFormat={this.Activity}
                        dataField='activity'
                    >Last activity</TableHeaderColumn>
                    <TableHeaderColumn
                        dataField='mail'
                        dataFormat={this.Email}
                        width="300"
                        thStyle={{border: 'none'}}
                    >Mail
                    </TableHeaderColumn>
                    <TableHeaderColumn
                        dataField='phone'
                        width="300"
                        dataFormat={this.TelNumber}
                        thStyle={{border: 'none',}}>
                        Phone
                    </TableHeaderColumn>
                    <TableHeaderColumn
                        dataField=''
                        thStyle={{border: 'none'}}
                        width="80"
                        dataFormat={this.MenuWrapper}/>
                </BootstrapTable>
            </div>
        )
    }
}

export default connect()(UsersTable);
