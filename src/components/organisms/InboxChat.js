import React, {Component} from 'react';
import {connect} from 'react-redux';

import './InboxChat.css';


//img
import Michelle from '../../assets/img/michelle.png';
import John from '../../assets/img/john.png';
import Dominic from '../../assets/img/dominic.png';
import Jolene from '../../assets/img/jolene.png';
import Lyall from '../../assets/img/lyall.png';

//components
import ConversationsButton from "../atoms/Buttons/ConversationsButton";
import CompanionInfo from "../molecules/CompanionInfo";
import ChatConversations from "./ChatConversations";
import store from '../../redux/store';


class InboxChat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            devMessage: '',
            inboxData: [],
            isLoading: true,
            chatId: '',
            chatData: '',
            reload: false
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
                    inboxData: res.sort(this.compare),
                    isLoading: false
                })
            });
    }

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


    changeChatId = (target) => {
        if (target === '1') {
            let setCompanion = this.state.inboxData.filter(function (item) {
                if (item.id === target) {
                    return item
                }
                return setCompanion;
            });
            store.dispatch({
                type: 'CHAT_ID',
                payload: setCompanion
            });
            this.setState({
                chatData: setCompanion
            });

        }
        else if (target === '2') {
            let setCompanion = this.state.inboxData.filter(function (item) {
                if (item.id === target) {
                    return item
                }
                return setCompanion
            });
            this.setState({
                chatData: setCompanion
            });
            store.dispatch({
                type: 'CHAT_ID',
                payload: setCompanion
            })
        }

        else if (target === '3') {
            let setCompanion = this.state.inboxData.filter(function (item) {
                if (item.id === target) {
                    return item
                }
                return setCompanion
            });
            this.setState({
                chatData: setCompanion,
            });
            store.dispatch({
                type: 'CHAT_ID',
                payload: setCompanion
            })
        }
        else if (target === '4') {
            let setCompanion = this.state.inboxData.filter(function (item) {
                if (item.id === target) {
                    return item
                }
                return setCompanion
            });
            this.setState({
                chatData: setCompanion
            });
            store.dispatch({
                type: 'CHAT_ID',
                payload: setCompanion
            })
        }
        this.setState({
            chatId: target
        })
    };

    refreshConversation = (target) => {
            return target.devmessages[target.devmessages.length - 1].message

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

    filterChats = (chatStatus) => {
        if(chatStatus === 'Online first') {
            let sortChatOnline = this.state.inboxData.sort(function (a, b) {
                if (a.developer.isOnline && b.developer.isOnline)
                    return 0;
                else if (b.developer.isOnline && !a.developer.isOnline)
                    return 1;
                else if (!a.developer.isOnline && !b.developer.isOnline)
                    return 0;
                return 0;
            });
            this.setState({
                inboxData: sortChatOnline
            })
        }
        else if (chatStatus === 'Unread first') {
            let sortChatUnread = this.state.inboxData.sort(this.compare);
            this.setState({
                inboxData: sortChatUnread
            })
        }
        else if (chatStatus === 'Date') {
let sortChatDate = this.state.inboxData.sort(function (a, b) {
        if(new Date(a.devmessages[a.devmessages.length -1 ].time) === new Date(b.devmessages[b.devmessages.length -1 ].time)) {
            return 0
        }
        else if (new Date(a.devmessages[a.devmessages.length -1 ].time) > new Date(b.devmessages[b.devmessages.length -1 ].time)) {
            return -1
        }
        else if (new Date(a.devmessages[a.devmessages.length -1 ].time) < new Date(b.devmessages[b.devmessages.length -1 ].time)) {
            return  1
        }

});
            this.setState({
                inboxData: sortChatDate
            })
        }
    };

    render() {
        store.subscribe((state) => {
            this.filterChats(store.getState().chatStatus)
        });
        console.log(this.state.inboxData)
        return (
            <div className="InboxChat">
                {!this.state.isLoading &&
                <div className="SideControlConversations">
                    <ul className="ConversationsList">
                        {
                            this.state.inboxData.map((item, index) =>
                                <li key={index} onClick={() => this.changeChatId(item.id)}>
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
                    <ConversationsButton/>
                </div>
                }
                <div className="ChatRoom">
                    <ChatConversations/>
                    <CompanionInfo/>
                </div>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        wop: state.chatId
    }
};


export default connect(mapState)(InboxChat)
