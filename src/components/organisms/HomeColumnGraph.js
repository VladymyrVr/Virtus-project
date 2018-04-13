import React, {Component} from 'react';
import ReactHighcharts from 'react-highcharts';
import {connect} from 'react-redux';
import store from '../../redux/store'

//config
import HomeColumnConfig from '../../config/HomeColumnConfig';

import './HomeColumnGraph.css';

//components
import HomeColumnSelect from "../atoms/Select/HomeColumnSelect";

const columnValue = ['Year', 'Month', 'Week'];

class HomeColumnGraph extends Component {
    constructor(props) {
        super(props);

        this.state = {
            graphData: '',
            isLoading: true
        }
    }

    componentWillMount() {
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
                    isLoading: false
                });
                let homeChart =this.homeColumnChart.getChart !== null &&   this.homeColumnChart.getChart();
                !this.state.isLoading && homeChart.series[0].setData(this.state.graphData.SeriesData, true);
                !this.state.isLoading && homeChart.xAxis[0].setCategories(this.state.graphData.CategoriesData, true);
                homeChart.xAxis[0].setExtremes(1, 12);
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
                    let homeChart =this.homeColumnChart.getChart !== null &&   this.homeColumnChart.getChart();;
                    homeChart.xAxis[0].setExtremes(1,7);
                    this.state.graphData.CategoriesData && homeChart.xAxis[0].setCategories(this.state.graphData.CategoriesData, true);
                    this.state.graphData.SeriesData && homeChart.series[0].setData(this.state.graphData.SeriesData, true);
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
                    let homeChart =this.homeColumnChart.getChart !== null &&   this.homeColumnChart.getChart();
                    homeChart.xAxis[0].setExtremes(1, 30);
                    this.state.graphData.CategoriesData && homeChart.xAxis[0].setCategories(this.state.graphData.CategoriesData, true);
                    this.state.graphData.SeriesData && homeChart.series[0].setData(this.state.graphData.SeriesData, true);
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
                    let homeChart =this.homeColumnChart.getChart !== null &&   this.homeColumnChart.getChart();
                    homeChart.xAxis[0].setExtremes(1,12);
                    this.state.graphData.CategoriesData && homeChart.xAxis[0].setCategories(this.state.graphData.CategoriesData, true);
                    this.state.graphData.SeriesData && homeChart.series[0].setData(this.state.graphData.SeriesData, true);

                });
        }
    };

    render() {
        store.subscribe((state) => {
            this.filterData(store.getState().columnValue)
        });
        return(
            <div className="HomeColumnGraph">
                <div className="ColumnHeader">
                    <p>Sales Report</p>
                    <HomeColumnSelect data={columnValue}/>
                </div>
                <div className="ColumnGraph">
<ReactHighcharts config={HomeColumnConfig} ref={(chart) => {
    this.homeColumnChart = chart;
}}/>
                </div>
            </div>
        )
    }
}

export default connect()(HomeColumnGraph)