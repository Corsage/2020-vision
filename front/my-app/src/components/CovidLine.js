import { Card, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { Line } from 'react-chartjs-2'

const useStyles = makeStyles({
    covidCard: {
        width: '100%',
        padding: '2rem'
    },
    cardHeading: {
        marginBottom: '1rem'
    }
})

const CovidLine = ({ color }) => {
    const chartReference = React.createRef()
    const classes = useStyles();
    var chartLabels = [];
    var chartData = []
    for (var x = 1; x < 7; x++) {
        const date = new Date(2020, 11, 21, x, 0, 0, 0)
        chartLabels.push(date.toLocaleDateString('en-US'))
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
                backgroundColor: `rgba(${color},0.2)`,
                borderColor: `rgba(${color},1)`,
                data: chartData
            }
        ]
    };
    const chartOptions = {
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                ticks: {
                    autoSkip: false,
                    maxRotation: 45,
                    minRotation: 45,
                }
            }]
        },
        legend:{
            display: false
        }
    }

    return (
        <Card className={classes.covidCard}>
            <Typography variant={'h4'} align={'left'} color='textSecondary' className={classes.cardHeading}> COVID TICKER</Typography>
            <Line
                width={'100%'}
                height={400}
                ref={chartReference}
                data={data}
                options={chartOptions}
            />
        </Card>
    )
}

export default CovidLine