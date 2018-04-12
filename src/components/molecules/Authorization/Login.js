import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import Snackbar from 'material-ui/Snackbar';

import './Login.css';

//components
import EnterButton from '../../atoms/Buttons/EnterButton';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            open: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let userData = {
            login: this.state.username,
            pass: this.state.password
        };

        fetch('/api/login', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(userData),
        })
            .then(res => res.json())
            .then(res => {
                if (res.check) {
                    JSON.stringify(localStorage.setItem("checkUser", res.check));
                    JSON.stringify(localStorage.setItem("user", res.user));
                    JSON.stringify(localStorage.setItem("id", res.id));
                    this.props.history.push('/')
                } else if(res.check === false) {
                    this.setState({
                        username: '',
                        password: '',
                        open: true
                    });
                }
            });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };


    handleChange = (e) => {
        let name = e.target.name;
        this.setState({
            [name]: e.target.value
        })
    };


    render() {
        return (
            <div className="Login">
                    <h2>Welcome back in <span className="LogoName">V<span>/</span>irtus</span>!</h2>
                    <form className="LoginForm" onSubmit={this.handleSubmit}>
                        <input className="UsersField" name="username" type="text" placeholder="Username"
                               value={this.state.username} onChange={this.handleChange} required autoComplete="off" />
                        <input className="PasswordField" name="password" type="password" placeholder="Password"
                               value={this.state.password} onChange={this.handleChange} required/>
                        <EnterButton data={'Log in'}/>
                        <Snackbar
                            open={this.state.open}
                            message="Your username or login is incorrect, please try again!"
                            autoHideDuration={2500}
                            onRequestClose={this.handleRequestClose}
                            className="SnackBarStyle"
                        />
                    </form>
            </div>
        );
    }
}

export default withRouter(Login);