import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {connect} from 'react-redux';

//img
import Logo from '../../assets/img/logo.png';
import Dominic from '../../assets/img/dominic.png';
import John from '../../assets/img/john.png';
import Jolene from '../../assets/img/jolene.png';
import Lyall from '../../assets/img/lyall.png';
import Michelle from '../../assets/img/michelle.png';

//components
import AddButton from '../atoms/Buttons/AddButton';

import './TopBar.css';

class TopBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            openNotifications: false,
            userId: JSON.parse(localStorage.getItem("id")),
            lastMessages: '',
        }
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

    setUserImg = (target) => {

        if (target === 1) {
            return John
        }
        else if (target === 2) {
            return Lyall
        }
        else if (target === 3) {
            return Michelle
        }
        else if (target === 4) {
            return Dominic
        }
        else if (target === 5) {
            return Jolene
        }
    };


    searchOpen = () => {

        var mainContainer = document.querySelector('.MainWrapper'),
            openCtrl = document.getElementById('BtnSearch'),
            closeCtrl = document.getElementById('BtnSearchClose'),
            searchContainer = document.querySelector('.SearchWrapper'),
            inputSearch = searchContainer.querySelector('.SearchInput'),
            lastFocusedElement;

        function init() {
            initEvents();
        }

        function initEvents() {
            openCtrl.addEventListener('click', openSearch);
            closeCtrl.addEventListener('click', closeSearch);
            document.addEventListener('keyup', function (ev) {
                // escape key.
                if (ev.keyCode === 27) {
                    closeSearch();
                }
            });
        }

        function openSearch() {
            lastFocusedElement = document.activeElement;
            mainContainer.classList.add('MainWrapMove');
            searchContainer.classList.add('SearchOpen');
            inputSearch.focus();
        }

        function closeSearch() {
            mainContainer.classList.remove('MainWrapMove');
            searchContainer.classList.remove('SearchOpen');
            inputSearch.blur();
            inputSearch.value = '';
            if (lastFocusedElement) { // restore focus
                lastFocusedElement.focus();
            }
        }

        init();

    };

    componentDidMount() {
        this.searchOpen()
    }

    handleOpenNotifications = (e) => {
        e.preventDefault();
        this.setState({
            openNotifications: true,
            anchorEl: e.currentTarget,
        });

        fetch('/api/lastMessages', {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            method: 'GET',
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    lastMessages: res
                });
            });
    };

    handleRequestCloseNotifications = () => {
        this.setState({
            openNotifications: false
        })
    };

    handleOpen = (e) => {
        e.preventDefault();

        this.setState({
            open: true,
            anchorEl: e.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    newMessages = () => {
        if (this.state.lastMessages.length === 0) {
            return <div className="NewMessages">
                <p>new Messages is not found</p>
            </div>
        }
        else if (this.state.lastMessages.length > 0) {
            return (
                <ul className="LastMessagesList">
                    {
                        this.state.lastMessages.sort((a, b) => new Date(b.time) - new Date(a.time)).map((item, index) =>
                            <li key={index}>
                                <div className="MessagesInfo">
                                    <div className="MessagesUserInfo">
                                        <div className="UserAvatar">
                                            <img src={this.setAvatar(item.id)} alt={item.developer}/>
                                        </div>
                                        <p>{item.developer}</p>
                                    </div>
                                    <p className='MessagesLast'>{item.time}</p>
                                </div>
                                <div className="LastMessage">
                                    <p>
                                        {
                                            item.messages
                                        }
                                    </p>
                                </div>
                            </li>
                        )}
                </ul>
            )
        }
    };

    handleLogOut = () => {
        localStorage.clear();
        this.props.history.push("/login")
    };

    render() {
        return (
            <div className="TopBar">
                <div className="Logo">
                    <img src={Logo} alt="V/irtus"/>
                </div>
                <div className="RightPanel">
                    <AddButton/>
                    <button className="Search" id="BtnSearch" onClick={this.searchOpen}></button>
                    <div className="NotificationsGroup">
                        <button className="Notifications" onClick={this.handleOpenNotifications}></button>
                        <Popover
                            open={this.state.openNotifications}
                            anchorEl={this.state.anchorEl}
                            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                            targetOrigin={{horizontal: 'middle', vertical: 'top'}}
                            onRequestClose={this.handleRequestCloseNotifications}
                            animation={PopoverAnimationVertical}
                            className="NotificationsMessages"
                        >
                            <div className="NewestMessages">
                                {
                                    this.newMessages()
                                }
                            </div>
                        </Popover>
                    </div>

                    <div className="Person">
                        <div className="AvatarWrapper">
                            <img src={this.setUserImg(this.state.userId)} alt="Avatar"/>
                        </div>
                        <button className="DropButton"
                                onClick={this.handleOpen}>
                        </button>
                        <Popover
                            open={this.state.open}
                            anchorEl={this.state.anchorEl}
                            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                            targetOrigin={{horizontal: 'left', vertical: 'top'}}
                            onRequestClose={this.handleRequestClose}
                            animation={PopoverAnimationVertical}
                            className="PersonMenu"
                        >
                            <Menu>
                                <MenuItem primaryText="Refresh"/>
                                <MenuItem primaryText="Help &amp; feedback"/>
                                <MenuItem primaryText="Settings"/>
                                <MenuItem onClick={this.handleLogOut} primaryText="Log out"/>
                            </Menu>
                        </Popover>
                    </div>
                </div>

            </div>
        );
    }
}

const mapState = (state) => {
    return {
        newMessages: state.chatId
    }
};


export default connect(mapState)(withRouter(TopBar));