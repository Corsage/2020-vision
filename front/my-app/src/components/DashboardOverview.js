import { Button, Card, Container, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { Bar } from 'react-chartjs-2';
import SmallStat from './SmallStat';

const useStyles = makeStyles((theme) => ({
    app: {
        height: '100%'
    },
    barCard: {
        width: "100%",
        height: '30rem',
        padding: '2rem'
    },
    barChart: {
        width: '100%',
        maxWidth: '100%',
    }
}))

const DashboardOverview = () => {
    var classes = useStyles()
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
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: chartData
            }
        ]
    };

    return (
        <Grid container direction='column' style={{ paddingLeft: '4rem', paddingRight: '1rem', paddingTop:'2rem' }}>
            <Grid container direction='row' justify='flex-start' style={{marginBottom:'1rem'}}>
                <Grid container direction='column' md={3} style={{padding:'0 0.5rem'}}>
                    <SmallStat />
                </Grid>
                <Grid container direction='column' md={3} style={{padding:'0 0.5rem'}}>
                    <SmallStat />
                </Grid>
                <Grid container direction='column' md={3} style={{padding:'0 0.5rem'}}>
                    <SmallStat />
                </Grid>
                <Grid container direction='column' md={3} style={{padding:'0 0.5rem'}}>
                    <SmallStat />
                </Grid>
                
            </Grid>
            <Grid container direction='row' justify='flex-start' >
                <Card className={classes.barCard} raised>
                    <Bar ref={chartReference} data={data}
                        width={'100%'}
                        options={{ maintainAspectRatio: false }}
                    />
                </Card>
            </Grid>
        </Grid>

    )
}

export default DashboardOverview