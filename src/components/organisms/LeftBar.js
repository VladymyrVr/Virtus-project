import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './LeftBar.css';

class LeftBar extends Component {
    render() {
        return (
            <div className="LeftBar">
                <ul className="MainNavigation">
                    <li>
                        <NavLink className='ToHome' activeClassName='ActiveHome' exact to='/'></NavLink>
                    </li>
                    <li>
                        <NavLink className='ToWorkflow' activeClassName='ActiveWorkflow' to='/workflow'></NavLink>
                    </li>

                    <li>
                        <NavLink className='ToProjects' activeClassName='ActiveProjects' exact to='/projects'></NavLink>
                    </li>
                    <li>
                        <NavLink className='ToChat' activeClassName='ActiveChat' exact to='/chat'></NavLink>
                    </li>
                    <li>
                        <NavLink className='ToRaport' activeClassName='ActiveRaport' exact to='/users'></NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default LeftBar;