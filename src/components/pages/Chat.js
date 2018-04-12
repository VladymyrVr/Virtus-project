import React, { Component } from 'react';

import './Chat.css';

//components
import InboxChat from "../organisms/InboxChat";
import SentChat from "../organisms/SentChat";
import ChatSelect from "../atoms/Select/ChatSelect";
import ChatTrash from "../molecules/ChatTrash";

const SelectData = ['Date', 'Online first', 'Unread first'];

class Chat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tab: 'a',
            count: '',
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
                    count: res,
                    isLoading: false
                })
            });
    }

    tabChange = (value) => {
        this.setState({
            tab: value
        })
    };

    unreadCount = (value) => {
        if(value) {
            return value;
        }
        return false
    };

    InboxCount = () => {
        let count = this.state.count.filter(function (item) {
           return this.unreadCount(item.isUnread)
        }.bind(this));
        return count.length;
    };


    render() {
        return ( !this.state.isLoading &&
            <section className="ChatPage">
                <div className="ChatHeader">
                    <div className="ChatTabs">
                        <p className={this.state.tab === 'a' ? 'InboxActive Inbox' : 'Inbox'} onClick={ () => this.tabChange('a')}>Inbox ({this.InboxCount()})</p>
                        <p className={this.state.tab === 'b' ? 'SentActive Sent' : 'Sent'} onClick={ () => this.tabChange('b')}>Sent</p>
                        <p className={this.state.tab === 'c' ? 'TrashActive Trash' : 'Trash'} onClick={ () => this.tabChange('c')}>Trash</p>
                    </div>
                    <ChatSelect data={SelectData}/>
                </div>
                <div className="Chat">
                    {
                        ( () => {
                            if(this.state.tab === 'a') {
                                return <InboxChat/>
                            }
                            else if(this.state.tab === 'b') {
                                return <SentChat/>
                            }
                            else if (this.state.tab === 'c') {
                                return <ChatTrash/>
                            }
                        }) ()
                    }
                </div>
            </section>
        );
    }
}



export default Chat;