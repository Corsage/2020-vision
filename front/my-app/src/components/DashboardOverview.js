import { Box, Button, Card, CardHeader, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Bar, Doughnut, Line, Scatter } from 'react-chartjs-2';
import { getEntranceRateData, getExitRateData, getAverageCapacityRateData, getAverageCustomersRateData, getDailyFlowData, getDailyCapacity } from '../http/httpCalls';
import CovidLine from './CovidLine';
import PeopleScatter from './PeopleScatter';
import SmallStat from './SmallStat';

const useStyles = makeStyles((theme) => ({
    app: {
        height: '100%'
    },
    barCard: {
        masWidth: "100%",
        height: '100%',
        padding: '2rem'
    },
    barChart: {
        maxWidth: '100%',
    },
    barChartHeading: {
        fontWeight: '700'
    },
    doughnutCard: {
        padding: '1rem 2rem 2rem 2rem',
        maxWidth: '100%',
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
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
    const [entranceRateData, setEntranceRateData] = useState(null);
    const [exitRateData, setExitRateData] = useState(null);
    const [customerRateData, setCustomerRateData] = useState(null);
    const [capacityRateData, setCapacityRateData] = useState(null);
    const [dailyFlowData, setDailyFlowData] = useState(null);
    const [dailyCapacityData, setDailyCapacityData] = useState(null);

    useEffect(() => {
        if (entranceRateData === null) {
            getEntranceRateData().then((data) => {
                setEntranceRateData(data)
                console.log(data)
            })
        }
        if (exitRateData === null) {
            getExitRateData().then((data) => {
                setExitRateData(data)
                console.log(data)
            })
        }
        if (customerRateData === null) {
            getAverageCustomersRateData().then((data) => {
                setCustomerRateData(data)
                console.log(data)
            })
        }
        if (capacityRateData === null) {
            getAverageCapacityRateData().then((data) => {
                setCapacityRateData(data)
                console.log(data)
            })
        }
        if (dailyFlowData === null) {
            getDailyFlowData().then((data) => {
                setDailyFlowData(data)
                console.log('flow', data)
            })
        }
        if (dailyCapacityData === null) {
            getDailyCapacity().then((data) => {
                setDailyCapacityData(data)
                console.log('capacity', data)
            })
        }
    }, [])

    for (var x = 1; x < 25; x++) {
        const date = new Date(2020, 11, 21, x, 0, 0, 0);
        const dateStringTemp = date.getHours();
        let dateString = '';
        if (dateStringTemp % 12 === 0) {
            dateString += 12
        } else dateString += dateStringTemp % 12

        if (dateStringTemp < 12) dateString += ' AM'
        else dateString += ' PM'

        chartLabels.push(dateString)
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
        labels: dailyFlowData ? dailyFlowData.x_axis : chartLabels,
        datasets: [
            {
                label: 'OUT',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: dailyFlowData ? dailyFlowData.y_axis_out : chartData
            },
            {
                label: 'IN',
                backgroundColor: 'rgba(112, 148, 198, 0.2)',
                borderColor: 'rgba(112, 148, 198, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(112, 148, 198,0.4)',
                hoverBorderColor: 'rgba(112, 148, 198,1)',
                data: dailyFlowData ? dailyFlowData.y_axis_in : chartData2
            }
        ]
    };

    const doughnutData = {
        labels: [
            'Capacity',
            'Empty',
        ],
        datasets: [{
            data: [dailyCapacityData ? dailyCapacityData.currentAverageValue : 30, dailyCapacityData ? 100 - dailyCapacityData.currentAverageValue : 70],
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

    return (
        <Grid container direction='column' style={{ paddingLeft: '10rem', paddingRight: '1rem', paddingTop: '2rem' }}>
            <Grid container direction='row' justify='flex-start' style={{ marginBottom: '1rem' }}>
                <Grid container direction='column' md={3} style={{ padding: '0 0.5rem' }}>
                    {entranceRateData &&
                        <SmallStat title={'AVG ENTRANCE PER HOUR'} value={entranceRateData.currentAverageValue} rate={entranceRateData.percentage} color={`255,99,132`} xAxis={entranceRateData ? entranceRateData.x_axis : undefined} yAxis={entranceRateData ? entranceRateData.y_axis : undefined} />

                    }
                </Grid>
                <Grid container direction='column' md={3} style={{ padding: '0 0.5rem' }}>
                    {exitRateData &&
                        <SmallStat title={'AVG EXIT PER HOUR'} value={exitRateData.currentAverageValue} rate={exitRateData.percentage} color={`144, 110, 141`} xAxis={exitRateData.x_axis} yAxis={exitRateData.y_axis} />
                    }
                </Grid>
                <Grid container direction='column' md={3} style={{ padding: '0 0.5rem' }}>
                    {customerRateData &&
                        <SmallStat title={'AVG PEOPLE PER WEEK'} value={customerRateData.currentAverageValue} rate={customerRateData.percentage} xAxis={customerRateData.x_axis} yAxis={customerRateData.y_axis} color={'112, 148, 198'} />
                    }

                </Grid>

                <Grid container direction='column' md={3} style={{ padding: '0 0.5rem' }}>
                    {capacityRateData &&
                        <SmallStat title={'AVG CAPACITY'} value={capacityRateData.currentAverageValue} rate={capacityRateData.percentage} color={'147, 155, 149'} xAxis={capacityRateData.x_axis} yAxis={capacityRateData.y_axis} />
                    }
                </Grid>

            </Grid>
            <Grid container direction='row' justify='flex-start' style={{ paddingLeft: '0.5rem' }} >
                <Grid item md={9} style={{ paddingRight: '0.5rem' }}>
                    <Grid container direction='column' style={{ height: '100%' }}>

                        <Card className={classes.barCard} >
                            <Typography variant={'h4'} align={'left'} color='textSecondary' className={classes.barChartHeading}> PEOPLE IN/OUT</Typography>
                            <Bar ref={chartReference} data={data}
                                width={'100%'}
                                options={{ maintainAspectRatio: false }}
                            />
                        </Card>
                    </Grid>
                </Grid>

                <Grid item md={3} style={{ paddingLeft: '0.5rem' }}>
                    <Grid container direction='column' style={{ height: '100%' }}>
                        <Card className={classes.doughnutCard}>
                            <Grid container direction="column">
                                <Typography variant={'h4'} align={'left'} color='textSecondary' className={classes.barChartHeading}> CAPACITY</Typography>
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
                                {dailyCapacityData !== null &&
                                    "%" + dailyCapacityData.currentAverageValue
                                }
                               
                                </Typography>

                        </Card>
                        <PeopleScatter />
                    </Grid>
                </Grid>

            </Grid>
            <Grid container direction='row' justify='flex-start' style={{ marginTop: '1rem', paddingLeft: '0.5rem' }}>
                <CovidLine color={'147, 155, 149'} />
            </Grid>
        </Grid>

    )
}

export default DashboardOverview