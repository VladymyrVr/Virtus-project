function drawCross(series, index) {
    let cross = series.gradCross;

    if (!cross) {
        cross = series.chart.renderer.path({
            zIndex: 8,
            fill: {
                linearGradient: {
                    x1: 0,
                    x2: 0,
                    y1: 0,
                    y2: 1
                },
                stops: [
                    [0, '#37a0f4'],
                    [1, '#79c0f7']
                ]
            }
        }).add(series.group)
    }

    cross = series.gradCross = cross.attr({
        d: series[`zone-area-${index}`].d
    }).clip(series.clips[index]);

    return cross
}

function resetCross(series) {
    const cross = series.gradCross;

    if (cross) {
        cross.clip().attr({
            d: 'M 0 0'
        })
    }
}

const StatisticConfig = {
    chart: {
        type: 'areaspline',
        backgroundColor: 'transparent',
        height: '500px',
        spacingRight: -1,
        spacingLeft: -1
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [],
        x: {
            min: 1,
            max: 2
        },
        allowDecimalse: false,
        gridLineWidth: 1,
        gridLineColor: '#393546',
        labels: {
            y: -20,

        },
        tickWidth: 0,
        lineColor: "#fff",
        zIndex: 0,
    },
    yAxis: {
        gridLineWidth: 0,
        minorGridLineWidth: 0,
        visible: false,
        title: {
            text: ''
        },
        labels: {
            enabled: false
        }
    },

    plotOptions: {
        areaspline: {
            marker: {
                enabled: false,
                states: {
                    hover: {
                        symbol: 'circle',
                        fillColor: '#fff',
                        lineColor: '#2196f3',
                        lineWidth: 2,
                        radius: 7,
                        enabled: true,
                    }
                },
            },
        }
    },
    series: [
        {
            data: [],
            point: {
                events: {
                    mouseOver(e) {
                        drawCross(this.series, this.index)

                    },
                    mouseOut(e) {
                        resetCross(this.series)
                    }
                }
            },
            zoneAxis: 'x',
            zones: [{
                value: 0.5
            }, {
                value: 1.5
            }, {
                value: 2.5
            }, {
                value: 3.5
            }, {
                value: 4.5
            }, {
                value: 5.5
            }, {
                value: 6.5
            }, {
                value: 7.5
            }, {
                value: 8.5
            }, {
                value: 9.5
            }, {
                value: 10.5
            }, {
                value: 11.5
            }, {
                value: 12.5
            }, {
                value: 13.5
            }, {
                value: 14.5
            }, {
                value: 15.5
            }, {
                value: 16.5
            }, {
                value: 17.5
            }, {
                value: 18.5
            }, {
                value: 19.5
            }, {
                value: 20.5
            }, {
                value: 21.5
            }, {
                value: 22.5
            }, {
                value: 23.5
            }, {
                value: 24.5
            }, {
                value: 25.5
            }, {
                value: 26.5
            }, {
                value: 27.5
            }, {
                value: 28.5
            }, {
                value: 29.5
            }, {
                    value: 30.5
                }
            ],
            name: 'V/IRTUS',
            showInLegend: false,
            color: '#2196f3',
        }
    ],
    credits: {
        enabled: false
    }
};

export default StatisticConfig;