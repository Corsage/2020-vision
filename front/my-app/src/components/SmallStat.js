import { Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { Line } from 'react-chartjs-2';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles((theme) => ({
    rateTextGreen: {
        fontSize: '1rem',
        color: 'green',
        justifyItems: 'center',
        display: 'flex',
        alignItems: 'center'
    },
    rateTextRed: {
        fontSize: '1rem',
        color: 'red',
        justifyItems: 'center',
        display: 'flex',
        alignItems: 'center'
    },

    arrow: {

    },

    titleText: {
        fontWeight: 700,
    }
}))

const SmallStat = ({ title, value, dataset, rate, color, xAxis, yAxis }) => {
    const classes = useStyles();
    var chartLabels = [];
    var chartData = []
    const chartReference = React.createRef();
    for (var x = 1; x < 10; x++) {
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
        labels: xAxis? xAxis : chartLabels,
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: `rgba(${color},0.2)`,
                borderColor: `rgba(${color},1)`,
                data: yAxis? yAxis: chartData
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
                tension: 0.5,
                borderWidth: 1,
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
        <Card style={{ width: '100%', height: '10rem' }} >
            <Grid container direction='column' alignItems='center' justify='center' style={{ height: '100%', position: 'relative' }}>
                <Typography variant={'h4'} color={'textSecondary'} className={classes.titleText} >{title}</Typography>
                <Typography variant={'h3'}>{value}</Typography>
                <Typography className={rate < 0? classes.rateTextRed : classes.rateTextGreen} >
                    {rate < 0 &&
                        <ArrowDropDownIcon className={classes.arrow} fontSize={'small'} />
                    }

                    {rate > 0&&
                        <ArrowDropUpIcon className={classes.arrow} fontSize={'small'}/>
                    }
                    {rate * 100}%
                </Typography>
                <div style={{ bottom: 0, position: 'absolute', width: '100%' }}>
                    <Line
                        width={'100%'}
                        height={70}
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