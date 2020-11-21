import { Box, Button, Card, CardHeader, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { Bar, Doughnut, Scatter } from 'react-chartjs-2';
import SmallStat from './SmallStat';

const useStyles = makeStyles((theme) => ({
    app: {
        height: '100%'
    },
    barCard: {
        masWidth: "100%",
        height: '30rem',
        padding: '2rem'
    },
    barChart: {
        maxWidth: '100%',
    },
    doughnutCard: {
        padding: '1rem 2rem 2rem 2rem',
        maxWidth: '100%',
        display: 'flex',
        justifyContent: 'center',
        position: 'relative'
    },
    percentageBox: {
        position: 'relative'
    },
    percentageText: {
        position: "absolute",
        bottom: "7.5rem",
        zIndex: '100'
    }
}))

const DashboardOverview = () => {
    var classes = useStyles()
    var chartLabels = [];
    var chartData = [];
    var chartData2 = [];
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
    for (var x = 1; x < 25; x++) {
        chartData2.push(Math.floor(Math.random() * 100))
    }

    const data = {
        labels: chartLabels,
        datasets: [
            {
                label: 'OUT',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: chartData
            },
            {
                label: 'IN',
                backgroundColor: 'rgba(112, 148, 198, 0.2)',
                borderColor: 'rgba(112, 148, 198, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(112, 148, 198,0.4)',
                hoverBorderColor: 'rgba(112, 148, 198,1)',
                data: chartData2
            }
        ]
    };

    const doughnutData = {
        labels: [
            'Capacity',
            'Empty',
        ],
        datasets: [{
            data: [70, 30],
            backgroundColor: [
                'rgba(112, 148, 198, 0.2)',
                'rgba(0,0,0,0)',

            ],
            hoverBackgroundColor: [
                'rgba(112, 148, 198,1',
                'rgba(0,0,0,0)',

            ],
            borderColor: 'rgba(112, 148, 198,1)',
            borderWidth: 1,
        }]
    }
    const doughnutOptions = {
        aspectRatio: 1,
        maintainAspectRatio: false,
        responsive: false,
        legend: {
            display: false
        },

        tooltips: {
            enabled: false,
            custom: false
        },


    }

    const scatterData = {
        labels: ['Scatter'],
        datasets: [
            {
                label: 'My First dataset',
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [
                    { x: 65, y: 75 },
                    { x: 59, y: 49 },
                    { x: 80, y: 90 },
                    { x: 81, y: 29 },
                    { x: 56, y: 36 },
                    { x: 55, y: 25 },
                    { x: 40, y: 18 },
                ]
            }
        ]
    }

    const scatterOptions = {
        maintainAspectRatio: false,
        aspectRation: 1,
        responsive: false,

    }
    return (
        <Grid container direction='column' style={{ paddingLeft: '4rem', paddingRight: '1rem', paddingTop: '2rem' }}>
            <Grid container direction='row' justify='flex-start' style={{ marginBottom: '1rem' }}>
                <Grid container direction='column' md={3} style={{ padding: '0 0.5rem' }}>
                    <SmallStat title={'ENTRANCE'} value={`25`} rate={0.03} color={`255,99,132`} />
                </Grid>
                <Grid container direction='column' md={3} style={{ padding: '0 0.5rem' }}>
                    <SmallStat title={'EXIT'} value={'22'} rate={0.02} color={`144, 110, 141`} />
                </Grid>
                <Grid container direction='column' md={3} style={{ padding: '0 0.5rem' }}>
                    <SmallStat title={'THIS RATE'} value={'100'} rate={+0.12} color={'112, 148, 198'} />
                </Grid>

                <Grid container direction='column' md={3} style={{ padding: '0 0.5rem' }}>
                    <SmallStat title={'THAT RATE'} value={'200'} rate={-0.35} color={'147, 155, 149'} />
                </Grid>

            </Grid>
            <Grid container direction='row' justify='flex-start' style={{paddingLeft:'0.5rem'}} >
                <Grid item md={9} style={{ paddingRight: '0.5rem' }}>
                    <Grid container direction='column'>
                        <Card className={classes.barCard} >
                            <Bar ref={chartReference} data={data}
                                width={'100%'}
                                options={{ maintainAspectRatio: false }}
                            />
                        </Card>
                    </Grid>
                </Grid>

                <Grid item md={3} style={{ paddingLeft: '0.5rem' }}>
                    <Grid container direction='column'>
                        <Card className={classes.doughnutCard}>
                            <Grid container direction="column">
                                <Typography variant={'h3'} align={'center'} >CAPACITY</Typography>
                                <Grid container direction='row' justify='center' style={{ marginTop: '1rem' }}>
                                    <Doughnut
                                        style={{ margin: 0 }}
                                        width={200}
                                        height={200}
                                        ref={chartReference}
                                        data={doughnutData}
                                        options={doughnutOptions}
                                    />
                                </Grid>

                            </Grid>
                            <Typography variant={'h3'} className={classes.percentageText}>
                                %70
                                </Typography>

                        </Card>
                    </Grid>
                </Grid>

            </Grid>
            <Grid container direction='row' justify='flex-start' style={{marginTop: '1rem', paddingLeft:'0.5rem'}}>
                <Grid item>
                    <Card style={{ display: 'flex' }}>
                        <Grid container direction='column'>
                            <Grid container direction='row'>
                                <Scatter
                                    width={300}
                                    height={300}
                                    ref={chartReference}
                                    data={scatterData}
                                    options={scatterOptions}
                                />
                            </Grid>

                        </Grid>

                    </Card>

                </Grid>
            </Grid>
        </Grid>

    )
}

export default DashboardOverview