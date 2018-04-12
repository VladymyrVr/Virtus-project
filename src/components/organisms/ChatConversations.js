import React, {Component} from 'react';
import {connect} from 'react-redux'
import moment from 'moment';

import './ChatConversations.css';

import Michelle from '../../assets/img/michelle.png';
import John from '../../assets/img/john.png';
import Dominic from '../../assets/img/dominic.png';
import Jolene from '../../assets/img/jolene.png';
import Lyall from '../../assets/img/lyall.png';

const randomMessages = ['Sorry i am busy now', 'Please write later', 'Woops wopps', 'NaVi', 'I am boss , i work when i want work)', 'Okey', 'Hi i work at home today. See tomorrow', 'Hi, how do you do?'];


class ChatConversations extends Component {
    constructor(props) {
        super(props);


        this.state = {
            random: '',
            userId: localStorage.getItem("id"),
            message: '',
            randomMessage: '',
        }
    }

    scrollToBottom = () => {
        if (this.messagesEnd !== undefined && this.props.idChat !== undefined) {
            this.messagesEnd.scrollIntoView({behavior: "smooth"});
        } else {
            return ''
        }
    };

    componentDidMount() {
        this.scrollToBottom();

    }


    componentDidUpdate() {
        this.scrollToBottom();
    }


    setConversationsImg = (target) => {
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

    setUserImg = (target) => {

        if (target === '1') {
            return John
        }
        else if (target === '2') {
            return Lyall
        }
        else if (target === '3') {
            return Michelle
        }
        else if (target === '4') {
            return Dominic
        }
        else if (target === '5') {
            return Jolene
        }
    };

    handleMessage = (e) => {
        let name = e.target.name;
        this.setState({
            [name]: e.target.value
        })
    };

    correctMessage = () => {
        let userMessage = {
            id: this.props.idChat[0].id,
            message: this.state.message,
            user: true,
            time: moment(new Date()).format('D MMMM YYYY hh:mm:ss'),
        };


        this.props.idChat[0].usermessages.push(userMessage);

        fetch('/api/pushUserMessage', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(userMessage),
        });

        if (this.props.idChat[0].developer.isOnline) {
            setTimeout(this.randomMessage, 5000);
        }

    };

    randomMessage = () => {
        let random = Math.floor(Math.random() * randomMessages.length);
        let lastMessage = {
            message: randomMessages[random],
            time: moment(new Date()).format('D MMMM YYYY hh:mm:ss'),
        };

        this.props.idChat[0].devmessages.push(
            lastMessage
        );

        let NotificationsMessages = {
            id: this.props.idChat[0].id,
            developer: this.props.idChat[0].developer.name,
            message: randomMessages[random],
            time: moment(new Date()).format('D MMMM YYYY hh:mm:ss'),
        };

        fetch('/api/pushDevMessages', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(NotificationsMessages),
        });


        fetch('/api/notificationsMessages', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(NotificationsMessages),
        });

        this.setState({
            random: this.props.idChat,
        });

    };

    pushMessage = (e) => {
        e.preventDefault();

        this.correctMessage();

        this.setState({
            message: ''
        });
    };


    render() {
        return (
            this.props.idChat !== undefined &&
            <div className="ChatConversation">
                <ul className="MessagesField">
                    {
                        this.props.idChat[0].devmessages.concat(this.props.idChat[0].usermessages).sort((a, b) => new Date(a.time) - new Date(b.time)).map((item, index) => {
                            return <li key={index}
                                       className={item.user ? 'MessageFiled UserMessage' : 'MessageFiled ConversationMessage'}>
                                <div
                                    className={!item.user && this.props.idChat[0].developer.isOnline ? 'OnlineStatus ProfileWrapper' : 'ProfileWrapper'}>
                                    <div className="UserAvatar">
                                        <img
                                            src={item.user === true ? this.setUserImg(this.state.userId) : this.setConversationsImg(this.props.idChat[0].id)}
                                            alt={this.props.idChat[0].developer.name}/>
                                    </div>
                                </div>
                                <div className="MessageBody">
                                    <p>{item.message}</p>
                                    <span>{item.time}</span>
                                </div>
                            </li>
                        })
                    }
                    <li ref={(el) => {
                        this.messagesEnd = el;
                    }}></li>
                </ul>
                <form onSubmit={this.pushMessage}>
                    <input type="text" name='message' className="MessageInput" placeholder='Write a message'
                           value={this.state.message} onChange={this.handleMessage} autoComplete="off" required/>
                </form>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        idChat: state.chatId
    }
};


export default connect(mapState)(ChatConversations);
