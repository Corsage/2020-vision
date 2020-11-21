import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { Line } from 'react-chartjs-2';


const SmallStat = () => {
    var chartLabels = [];
    var chartData = []
    const chartReference = React.createRef();
    for (var x = 1; x < 25; x++) {
        const date = new Date(2020, 11, 21, x, 0, 0, 0)
        chartLabels.push(date.getHours())
        chartData.push(Math.floor(Math.random() * 100))
    }
    console.log(chartLabels)
    // const data = {
    //     labels: chartLabels,
    //     datasets: {data: chartData }
    // }

    const data = {
        labels: chartLabels,
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                data: chartData
            }
        ]
    };


    const chartOptions = {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        tooltips: {
            enabled: false,
            custom: false
        },
        elements: {
            point: {
                radius: 0
            },
            line: {
                tension: 0.33
            }
        },
        scales: {
            xAxes: [
                {
                    gridLines: false,
                    ticks: {
                        display: false
                    }
                }
            ],
            yAxes: [
                {
                    gridLines: false,
                    scaleLabel: false,
                    ticks: {
                        display: false,
                    }
                }
            ]
        }

    };

    return (
        <Card style={{ width: '100%', height: '10rem' }} raised>
            <Grid container direction='column' alignItems='center' justify='center' style={{height:'100%', position:'relative'}}>
                <Typography variant={'h4'}>TOTAL PEOPLE</Typography>
                <Typography variant={'h3'}>40</Typography>
                <div style={{bottom:0, position:'absolute', width:'100%'}}>
                    <Line
                        width={'100%'}
                        height={50}
                        ref={chartReference}
                        data={data}
                        options={chartOptions}
                    />
                </div>
            </Grid>

        </Card>
    )
}

export default SmallStat