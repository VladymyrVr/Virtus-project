import React, {Component} from 'react';
import InputMask from 'react-input-mask';

import AddButton from '../atoms/Buttons/AddButton';

import './Setting.css';

class Setting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            birthday: '',
            mobile: '',
            email: '',
            comment: '',
            informData: null
        }
    }

    componentWillMount() {
        fetch('/api/getSettingData', {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            method: 'GET',
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    informData: res,
                });
            });
    }

    handleChange = (e) => {
        let name = e.target.name;
        this.setState({
            [name]: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();

        let informData = {
            name: this.state.name,
            birthday: this.state.birthday,
            mobile: this.state.mobile,
            email: this.state.email,
            comment: this.state.comment
        };

        fetch('/api/settingData', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(informData),
        });

        fetch('/api/getSettingData', {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            method: 'GET',
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    informData: res,
                });
            });


        this.setState({
            name: '',
            birthday: '',
            mobile: '',
            email: '',
            comment: '',
        });
    };


    render() {
        return (
            <div className='SettingsPage'>
                <div className="RedactPanel">
                    <h2>{this.state.informData === null ? 'Set up some info about yourself' : 'Update info about yourself'} </h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="NameField">
                            <label htmlFor="name">{this.state.informData === null ? 'Enter your name and surname' : 'Change name and surname'}</label>
                            <input autoComplete="off" id='name' name='name' type="text" required value={this.state.name}
                                   onChange={this.handleChange}/>
                        </div>
                        <div className="BirthDay">
                            <label htmlFor="birthday">{this.state.informData === null ? 'Enter your data of birth' : 'Change your data of birthday'}</label>
                            <InputMask autoComplete="off" required id='birthday' name='birthday' mask="99.99.9999" maskChar=" "
                                       value={this.state.birthday} onChange={this.handleChange}/>
                        </div>
                        <div className="MobileField">
                            <label htmlFor="mobile">{this.state.informData === null ? 'Enter your mobile number' : 'Change your mobile number'}</label>
                            <InputMask autoComplete="off"   required id='mobile' name='mobile' mask="+380\ (99) 99 - 99 - 999" maskChar=" "
                                       value={this.state.mobile} onChange={this.handleChange}/>
                        </div>
                        <div className="EmailField">
                            <label htmlFor="mail">{this.state.informData === null ? 'Enter your Email address' : 'Change your Email address'}</label>
                            <input autoComplete="off" id='mail' name='email' type="mail" value={this.state.email}
                                   onChange={this.handleChange}/>
                        </div>
                        <div className="AboutYourself">
                            <label htmlFor="aboutYou">{this.state.informData === null ? "Write something about you" : 'Update information about yourself'}</label>
                            <textarea id='aboutYou' name='comment' value={this.state.comment}
                                      onChange={this.handleChange}></textarea>
                        </div>
                        <AddButton/>
                    </form>
                </div>
                {
                    this.state.informData !== null &&
                    <div className="InformativePanel">
                        <h2>Personal information
                        </h2>
                        <div className="NameInfo">
                            <p>Name:</p>
                            <span>{this.state.informData.name}</span>
                        </div>
                        <div className="DataBirthInfo">
                            <p>Data of Birthday:</p>
                            <span>{this.state.informData.birthday}</span>
                        </div>
                        <div className="MobileInfo">
                            <p>Phone number:</p>
                            <span>{this.state.informData.mobile}</span>
                        </div>
                        <div className="EmailInfo">
                            <p>Email:</p>
                            <span>{this.state.informData.email}</span>
                        </div>
                        <div className="ShortInfo">
                            <p>Short Info:</p>
                            <span>{this.state.informData.comment}</span>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Setting;