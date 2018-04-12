import React, {Component} from 'react';

//img
import Michelle from '../../assets/img/michelle.png';
import John from '../../assets/img/john.png';
import Dominic from '../../assets/img/dominic.png';
import Jolene from '../../assets/img/jolene.png';
import Lyall from '../../assets/img/lyall.png';

import './InboxMessages.css';

class InboxMessages extends Component {
    constructor(props) {
        super(props);

        this.state ={
            messagesData: '',
            isLoading: true
        }
    }

    componentWillMount() {
        fetch('/api/chat/inbox', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'GET',
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    messagesData: res.sort(this.compare),
                    isLoading: false
                })
            });
    }

    unreadCount = (value) => {
        if(value) {
            return value;
        }
        return false
    };

    InboxCount = () => {
        let count = this.state.messagesData.filter(function (item) {
            return this.unreadCount(item.isUnread)
        }.bind(this));
        return count.length;
    };


    compare = (a, b) => {
        if (a.isUnread && b.isUnread)
            return 0;
        else if (b.isUnread && !a.isUnread)
            return 1;
        else if (!a.isUnread && !b.isUnread)
            return 0;
        return 0;
    };


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

    refreshConversation = (target) => {
        return target.devmessages[target.devmessages.length - 1].message

    };

    render() {
        return (
            !this.state.isLoading &&
            <div className="InboxMessages">
                <div className="HeaderMessagesHome">
                    <h2>Inbox (<span>{this.InboxCount()}</span>)</h2>
                </div>
                <ul className="InboxMessagesList">
                    {
                        this.state.messagesData.map((item, index) =>
                            <li key={index}>
                                <div className="ConversationsInfo">
                                    <div className="UserInfo">
                                        <div
                                            className={item.developer.isOnline ? 'OnlineStatus ProfileWrapper' : 'ProfileWrapper'}>
                                            <div className="UserAvatar">
                                                <img src={this.setAvatar(item.id)} alt={item.developer}/>
                                            </div>
                                        </div>
                                        <p>{item.developer.name}</p>
                                    </div>
                                    <p className={item.isUnread === true ? 'Unread' : 'Read'}>{item.devmessages[item.devmessages.length - 1].time}</p>
                                </div>
                                <div className="LastMessage">
                                    <p>
                                        {

                                            this.refreshConversation(item)
                                        }
                                    </p>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default InboxMessages;