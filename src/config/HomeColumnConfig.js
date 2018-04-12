const HomeColumnConfig = {
    chart: {
        type: 'column',
        backgroundColor: 'transparent',
        height: '250px'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [],
        gridLineWidth: 0,
        minorGridLineWidth: 0,
        gridLineColor: 'transparent',

    },
    yAxis: {
        labels: {
            enabled: false
        },
        gridLineColor: 'rgb(57, 53, 70)',

        title: {
            text: ''
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0,
            color: '#505464',
            states: {
                hover: {
                    color: '#2196f3',
                }
            }
        }
    },
    series: [{
        data: [],
        showInLegend: false,
        name: 'V/IRTUS',

    }],
    credits: {
        enabled: false
    }
};

export default HomeColumnConfig;