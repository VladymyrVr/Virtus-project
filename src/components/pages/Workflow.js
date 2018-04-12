import React, {Component} from 'react';
import Board from 'react-trello';
import {connect} from 'react-redux';

import './Workflow.css';

//components
import WorkflowSelect from "../atoms/Select/WorkflowSelect";
import CustomCard from '../atoms/Board/CustomCard';
import CustomLaneHeader from '../atoms/Board/CustomLaneHeader';
import store from "../../redux/store";
import ProjectsTable from "../molecules/ProjectsTable";


const data = {
    lanes: [
        {
            id: 'lane1',
            header: 'Quened',
            label: '',
            cards: [
                {id: 'Task1', title: 'Wordpress theme', company: 'Symu.co', price: 900, user: 'michelle'},

            ]
        },
        {
            id: 'lane2',
            header: 'Planning',
            label: '',
            cards: [
                {id: 'Task2', title: 'Landing page', company: 'Google', price: 1200, user: 'jolene'},
                {id: 'Task3', title: 'New website', company: 'Symu.co', price: 2500, user: 'lyall'},
                {id: 'Task4', title: 'Dashboard', company: 'Microsoft', price: 500, user: 'john'},
                {id: 'Task5', title: 'Mobile App', company: 'Facebook', price: 1750, user: 'dominic'},
            ]
        },

        {
            id: 'lane3',
            header: 'Design',
            label: '',
            cards: [
                {id: 'Task6', title: 'New Logo', company: 'Google', price: 220, user: 'michelle'},
                {id: 'Task7', title: 'New website', company: 'JCD.pl', price: 1500, user: 'dominic'},
                {id: 'Task8', title: 'New website', company: 'Themeforest', price: 1500, user: 'john'},
                {id: 'Task9', title: 'Dashboard', company: 'JCD.pl', price: 500, user: 'jolene'},
            ]
        },

        {
            id: 'lane4',
            header: 'Development',
            label: '()',
            cards: [
                {id: 'Task10', title: 'Mobile App', company: 'Facebook', price: 1500, user: 'john'},
                {id: 'Task11', title: 'New website', company: 'Symu.co', price: 1500, user: 'michelle'},
                {id: 'Task12', title: 'Dashboard', company: 'Google', price: 500, user: 'dominic'},
            ]
        },
        {
            id: 'lane5',
            header: 'Testing',
            label: '()',
            cards: [
                {id: 'Task13', title: 'Landing page', company: 'JCD.pl', price: 1500, user: 'lyall'},

            ]
        },
        {
            id: 'lane6',
            header: 'Production',
            label: '()',
            cards: [
                {id: 'Task14', title: 'Landing page', company: 'Google', price: 1500, user: 'jolene'},
                {id: 'Task15', title: 'New website', company: 'Themeforest', price: 1500, user: 'michelle'},
                {id: 'Task16', title: 'Dashboard', company: 'Facebook', price: 500, user: 'lyall'},
            ]
        },
        {
            id: 'lane7',
            header: 'Completed',
            label: '()',
            cards: [
                {id: 'Task17', title: 'Mobile App', company: 'Facebook', price: 1500, user: 'john'},
                {id: 'Task18', title: 'New website', company: 'Symu.co', price: 1500, user: 'michelle'},
            ]
        },
    ]
};


const selectData = ['All', 'Symu.co', 'Google', 'Microsoft', 'Facebook', 'JCD.pl', 'Themeforest'];


class Workflow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ProjectCounter: 0,
            dataCards: data,
            tab: 'b'
        }
    }

    tabChange = (value) => {
        this.setState({
            tab: value
        })
    };

    ProjectCounter(arr) {
        let sum = 0;
        for (let i = 0; i < arr.lanes.length; i++) {
            sum += arr.lanes[i].cards.length;
        }
        this.setState({
            ProjectCounter: sum
        })
    };

    componentWillMount() {
        this.ProjectCounter(data)
    }

    filterBy(target) {
        return data.lanes.reduce((a, {id, header, label, cards}) => {
            a.lanes.push({id, header, label, cards: cards.filter(({company}) => company === target)});
            return a;
        }, {lanes: []});
    }


    filterCards = (status) => {
        if (status === 'All') {
            this.ProjectCounter(data);
            this.setState({
                dataCards: data
            })
        }
        else if (status === 'Symu.co') {
            let result = this.filterBy('Symu.co');
            this.ProjectCounter(result);
            this.setState({
                dataCards: result
            });

        }
        else if (status === 'Google') {
            let result = this.filterBy('Google');
            this.ProjectCounter(result);
            this.setState({
                dataCards: result
            });
        }
        else if (status === 'Microsoft') {
            let result = this.filterBy('Microsoft');
            this.ProjectCounter(result);
            this.setState({
                dataCards: result
            });
        }
        else if (status === 'Facebook') {
            let result = this.filterBy('Facebook');
            this.ProjectCounter(result);
            this.setState({
                dataCards: result
            });
        }
        else if (status === 'JCD.pl') {
            let result = this.filterBy('JCD.pl');
            this.ProjectCounter(result);
            this.setState({
                dataCards: result
            });
        }
        else if (status === 'Themeforest') {
            let result = this.filterBy('Themeforest');
            this.ProjectCounter(result);
            this.setState({
                dataCards: result
            })
        }
    };

    render() {
        store.subscribe((state) => {
            this.filterCards(store.getState().status)
        });
        return (
            <section className="WorkflowPage">
                <div className="WorkflowHeader">
                    <div className="WorkflowInfo">
                        <p className={this.state.tab === 'a' ? 'ActiveWorkflowTab AllProjects' : 'AllProjects'} onClick={() => this.tabChange('a')}>All projects ({this.state.ProjectCounter})</p>
                        <p className={this.state.tab === 'b' ? 'ActiveWorkflowTab WorkflowTab' : 'WorkflowTab'} onClick={() => this.tabChange('b')}>Workflow</p>
                    </div>
                    <WorkflowSelect data={selectData}/>
                </div>
                <div className="WorkflowContent">
                    {
                        this.state.tab === 'b' ?
                            <div className="TrelloProjects">
                                <Board data={this.state.dataCards} draggable style={
                                    {
                                        background: 'transparent',
                                        display: 'flex',
                                        height: 'inherit',
                                    }
                                }
                                       customCardLayout
                                       customLaneHeader={<CustomLaneHeader/>}
                                >
                                    <CustomCard data={this.state.dataCards}/>
                                </Board>
                            </div>
                            :
                            <div className='AllProjectsWrapper'>
                                <ProjectsTable/>
                            </div>
                    }
                </div>

            </section>
        );
    }
}


export default connect()(Workflow);