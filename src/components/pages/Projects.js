import React, { Component } from 'react';

import './Projects.css';
//components
import StatisticGraph from "../organisms/StatisticGraph";
import StatisticTable from "../molecules/StatisticTable";



class Projects extends Component {
    render() {
        return (
            <section className="ProjectsPage">
                <StatisticGraph/>
                <StatisticTable/>
            </section>
        );
    }
}

export default Projects;