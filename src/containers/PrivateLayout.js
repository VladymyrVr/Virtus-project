import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';

//components
import TopBar from '../components/organisms/TopBar';
import LeftBar from '../components/organisms/LeftBar';

class PrivateLayout extends Component {
    render() {
        const {component: Component, ...rest} = this.props;
        return (
            <Route {...rest} render={() => {
                if (!localStorage.getItem('checkUser')) {
                    return <Redirect to="/login"/>
                }
                else if (localStorage.getItem('checkUser')) {
                    return (
                        <div>
                            <div className="MainWrapper">
                                <TopBar/>
                                <LeftBar/>
                                <Component/>
                            </div>
                            <div className="SearchWrapper">
                                <button id="BtnSearchClose" className="btn BtnSearchClose" aria-label="Close search form"></button>
                                <form className="SearchForm" action="">
                                    <input className="SearchInput" name="search" type="search" placeholder="Search" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" />
                                    <span className="SearchInfo">Hit enter to search or ESC to close</span>
                                </form>
                            </div>
                        </div>
                    )
                }
            }}/>
        );
    }
}

export default PrivateLayout;
