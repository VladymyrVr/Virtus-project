import React, {Component} from 'react';
import ReactHighcharts from 'react-highcharts';
import {Circle} from 'rc-progress';
import {connect} from 'react-redux'

//components
import StasticConfig from '../../config/StatisticConfig';
import StatisticsSelect from "../atoms/Select/StatisticsSelect"
import store from '../../redux/store';

import './StatisticGraph.css';

const SelectData = ['Week', 'Month', 'Year'];


class StatisticGraph extends Component {
    constructor(props) {
        super(props);

        this.state = {
            graphData: ''
        }
    }

    componentWillMount() {
        fetch('/api/statistics/week', {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            method: 'GET',
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    graphData: res
                });
                let chart = this.statsChart.getChart();
                this.state.graphData.SeriesData && chart.series[0].setData(this.state.graphData.SeriesData, true);
                this.state.graphData.CategoriesData && chart.xAxis[0].setCategories(this.state.graphData.CategoriesData, true);
                chart.xAxis[0].setExtremes(1,7);
            });


    }

    filterData = (status) => {
        if (status === 'Week') {
            fetch('/api/statistics/week', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'GET',
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        graphData: res,
                    });
                    let chart = this.statsChart !== undefined &&  this.statsChart.getChart();
                    chart.xAxis[0].setExtremes(1,7);
                    this.state.graphData.CategoriesData && chart.xAxis[0].setCategories(this.state.graphData.CategoriesData, true);
                    this.state.graphData.SeriesData && chart.series[0].setData(this.state.graphData.SeriesData, true);

                });
        }
        else if (status === 'Month') {
            fetch('/api/statistics/month', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'GET',
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        graphData: res,
                    });
                    let chart = this.statsChart !== undefined &&  this.statsChart.getChart();
                    chart.xAxis[0].setExtremes(1, 30);
                    this.state.graphData.CategoriesData && chart.xAxis[0].setCategories(this.state.graphData.CategoriesData, true);
                    this.state.graphData.SeriesData && chart.series[0].setData(this.state.graphData.SeriesData, true);
                });
        }
        else if (status === 'Year') {
            fetch('/api/statistics/year', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'GET',
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        graphData: res,
                    });
                    let chart = this.statsChart !== undefined &&  this.statsChart.getChart();
                    chart.xAxis[0].setExtremes(1,12);
                    this.state.graphData.CategoriesData && chart.xAxis[0].setCategories(this.state.graphData.CategoriesData, true);
                    this.state.graphData.SeriesData && chart.series[0].setData(this.state.graphData.SeriesData, true);
                });
        }
    };

    render() {
        store.subscribe((state) => {
            this.filterData(store.getState().statisticsData)
        });
        return (
            <div className="GraphGroup">
                <ReactHighcharts config={StasticConfig} ref={(chart) => {
                    this.statsChart = chart;
                }}/>
                <div className="StatsProgressWrapper">
                    <div className="ViewsWrapper">
                        <div className="ViewsProgress">
                            <Circle percent={this.state.graphData.viewsData && this.state.graphData.viewsData.percent} strokeWidth='6' strokeColor='#2196f3' trailWidth='6'
                                    trailColor='#9ca1b2'
                                    style={{
                                        height: '75px'
                                    }}/>
                            <p className="ViewsPercent">{this.state.graphData.viewsData && this.state.graphData.viewsData.percent + '%'}</p>
                        </div>
                        <div className="ViewsStats">
                            <p>{this.state.graphData.viewsData && this.state.graphData.viewsData.counter}</p>
                            <span>Views</span>
                        </div>
                    </div>
                    <div className="VisitorsWrapper">
                        <div className="VisitorProgress">
                            <Circle percent={this.state.graphData.visitorsData && this.state.graphData.visitorsData.percent} strokeWidth='6' strokeColor='#2196f3' trailWidth='6'
                                    trailColor='#9ca1b2'
                                    style={{
                                        height: '75px'
                                    }}/>
                            <p className="VisitorsPercent">{this.state.graphData.visitorsData && this.state.graphData.visitorsData.percent+'%'}</p>
                        </div>
                        <div className="VisitorsStats">
                            <p>{this.state.graphData.visitorsData && this.state.graphData.visitorsData.counter}</p>
                            <span>Visitors</span>
                        </div>
                    </div>
                    <div className="ImpressionsWrapper">
                        <div className="ImpressionsProgress">
                            <Circle percent={this.state.graphData.impressionsData && this.state.graphData.impressionsData.percent} strokeWidth='6' strokeColor='#2196f3' trailWidth='6'
                                    trailColor='#9ca1b2'
                                    style={{
                                        height: '75px'
                                    }}/>
                            <p className="ImpressionsPercent">{this.state.graphData.impressionsData && this.state.graphData.impressionsData.percent+'%'}</p>
                        </div>
                        <div className="ImpressionsStats">
                            <p>{this.state.graphData.impressionsData && this.state.graphData.impressionsData.counter}</p>
                            <span>Impressions</span>
                        </div>
                    </div>
                </div>
                <StatisticsSelect data={SelectData}/>
            </div>
        )
    }
}

export default connect()(StatisticGraph)