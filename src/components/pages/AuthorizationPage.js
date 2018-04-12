import React, { Component } from 'react';

import './AuthorizationPage.css';

//img
import Logo from '../../assets/img/logo.png'

//components
import Login from '../molecules/Authorization/Login';
import Register from '../molecules/Authorization/Register';

class AuthorizationPage extends Component {
    constructor(props) {
        super(props);

        this.state= {
            tab: 'b'
        }
    }

    tabChange = (value) => {
        this.setState({
            tab: value
        })
    };

    componentWillMount() {
        if (localStorage.getItem('checkUser')) {
            return (
                this.props.history.push('/')
            )
        }
    }
    render() {
        return (
            <section className="AuthorizationPage">
                <header className="AuthorizationPanel">
                    <div className="Logo">
                        <img src={Logo} alt="Logo"/>
                    </div>
                    <ul className="AuthPanel">
                        <li className={this.state.tab === 'a' ? 'ActiveTab RegisterLink' : 'RegisterLink'} onClick={() => this.tabChange('a')}>Sign up</li>
                        <li className={this.state.tab === 'b' ? 'ActiveTab LoginLink' : 'LoginLink'} onClick={() => this.tabChange('b')}>Log  in</li>
                    </ul>
                </header>
                <div className="Authorization">
                    {this.state.tab === 'a' ?
                        <Register/>
                        :
                        <Login/>
                    }
                </div>
            </section>
        );
    }
}

export default AuthorizationPage;