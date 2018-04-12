import React, {Component} from 'react';
import {connect} from 'react-redux'

import './CompanionInfo.css';

//img
import Michelle from '../../assets/img/michelle.png';
import John from '../../assets/img/john.png';
import Dominic from '../../assets/img/dominic.png';
import Jolene from '../../assets/img/jolene.png';
import Lyall from '../../assets/img/lyall.png';


class CompanionInfo extends Component {

    setAvatar = (target) => {
        if (target === '1') {
            return Michelle
        }
        else if (target === '2') {
            return Jolene
        }
        else if (target === '3') {
            return Lyall
        }
        else if (target === '4') {
            return Dominic
        }
        else if (target === '5') {
            return John
        }
    };

    render() {
        return (
                    this.props.idChat !== undefined &&
                    <div className="CompanionInfo">
                        <div
                            className={this.props.idChat[0].developer.isOnline ? 'OnlineStatus ProfileWrapper' : 'ProfileWrapper'}>
                            <div
                                className='UserAvatar'>
                                <img src={this.setAvatar(this.props.idChat[0].id)} alt={this.props.idChat[0].developer.name}/>
                            </div>
                        </div>
                        <div className="UserName">
                            <p className='CompanionName'>{this.props.idChat[0].developer.name}</p>
                            <p className='CompanionProff'>{this.props.idChat[0].developer.proff}</p>
                        </div>
                        <div className="ShortInfo">
                            <p>{this.props.idChat[0].developer.shortInfo}</p>
                        </div>
                        <div className="EmailInfo">
                            <span>Email</span>
                            <p>{this.props.idChat[0].developer.mail}</p>
                        </div>
                        <div className="PhoneInfo">
                            <span>Phone</span>
                            <p>{this.props.idChat[0].developer.phone}</p>
                        </div>
                        <div className="AdressInfo">
                            <span>Adress</span>
                            <p>{this.props.idChat[0].developer.adress}</p>
                        </div>
                        <div className="CompanyInfo">
                            <span>Organization</span>
                            <p>{this.props.idChat[0].developer.company}</p>
                        </div>
                    </div>
        )
    }
}


const mapState = (state) => {
    return {
        idChat: state.chatId
    }
};

export default connect(mapState)(CompanionInfo);