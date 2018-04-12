import React, {Component} from 'react';

import './HomeUsersProjects.css'

//img
import Michelle from '../../assets/img/michelle.png';
import John from '../../assets/img/john.png';
import Dominic from '../../assets/img/dominic.png';
import Jolene from '../../assets/img/jolene.png';
import Lyall from '../../assets/img/lyall.png';

//components
import ProjectOptionButton from "../atoms/Buttons/ProjectOptionButton";

class HomeUsersProjects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projectsData: [],
            userId: JSON.parse(localStorage.getItem("id"))
        }
    }

    componentWillMount() {
        if (this.state.userId === 1) {
            fetch('/api/home/projects', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'GET',
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        projectsData: res.id_1,
                    });
                });
        }
        else if (this.state.userId === 2) {
            fetch('/api/home/projects', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'GET',
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        projectsData: res.id_2,
                    });
                });
        }
        else if (this.state.userId === 3) {
            fetch('/api/home/projects', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'GET',
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        projectsData: res.id_3,
                    });
                });
        }
        else if (this.state.userId === 4) {
            fetch('/api/home/projects', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'GET',
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        projectsData: res.id_4,
                    });
                });
        }
        else if (this.state.userId === 5) {
            fetch('/api/home/projects', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'GET',
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        projectsData: res.id_5,
                    });
                });
        }
    }

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


    render() {
        return (
            <div className="HomeUsersProjects">
                <div className="HeaderUsersProjects">
                    <h2>Your Projects</h2>
                </div>
                <ul>
                    {
                        this.state.projectsData.map((item, index) =>
                            <li key={index} className='ProjectsCard'>
                                <div className="ProjectInfo">
                                    <div className="UserAvatar">
                                        <img src={this.setUserImg(this.state.userId)} alt={item.project}/>
                                    </div>
                                    <div className="ProjectsFlexWrapper">
                                        <p className="Title">{item.project}</p>
                                        <div className="DetailInfo">
                                            <p className='Company'>{item.company}</p>
                                            <p className='Price'>{'$' + item.price}</p>
                                        </div>
                                    </div>
                                </div>
                                <ProjectOptionButton/>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default HomeUsersProjects