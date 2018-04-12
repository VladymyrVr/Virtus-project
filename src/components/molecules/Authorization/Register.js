import React, {Component} from 'react';
import Snackbar from 'material-ui/Snackbar';


import './Register.css';

//components
import EnterButton from '../../atoms/Buttons/EnterButton';

class Register extends Component {
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

        let personData = {
            username: this.state.username,
            pass: this.state.password
        };

        fetch('/api/register', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(personData),
        });

        this.setState({
            username: '',
            password: '',
            open: true
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
            <div className="Registration">
                    <h2>Stay part of <span className='LogoName'>V<span>/</span>irtus</span>!</h2>
                    <form className="RegistrationForm" onSubmit={this.handleSubmit}>
                        <input className="UsersField" name="username" type="text" placeholder="Username"
                               value={this.state.username} onChange={this.handleChange} required autoComplete="off"/>
                        <input className="PasswordField" name="password" type="password" placeholder="Password"
                               value={this.state.password} onChange={this.handleChange} required/>
                        <EnterButton data={'Sign up'}/>
                        <Snackbar
                            open={this.state.open}
                            message="The registration was successfully"
                            autoHideDuration={1500}
                            onRequestClose={this.handleRequestClose}
                            className="SnackBarStyle"
                        />
                    </form>
            </div>
        );
    }
}

export default Register;