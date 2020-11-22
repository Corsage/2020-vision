
import { Card, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { Scatter } from 'react-chartjs-2'

const useStyles = makeStyles({
    card: {
        marginTop: '1rem',
        padding: '1rem'
    }
})


const PeopleScatter = () => {
    const classes = useStyles()
    const chartReference = React.createRef();
    const INpointData = [];

    for (var x = 0; x < 250; x++) {
        var day = Math.floor(Math.random() * 7)
        var hour = Math.floor(Math.random() * 86400)
        console.log(x)
        INpointData.push({x:day, y:hour})
    }

    const OUTpointData = [];

    for (var x = 0; x < 250; x++) {
        var day = Math.floor(Math.random() * 7)
        var hour = Math.floor(Math.random() * 86400)
        console.log(x)
        OUTpointData.push({x:day, y:hour})
    }
    const scatterData = {
        labels: ['Scatter'],
        datasets: [
            {
                label: 'IN',
                backgroundColor: 'rgba(112,148,198,0.4)',
                pointBorderColor: 'rgba(112,148,198,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 2,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(112, 148, 198,1)',
                pointHoverBorderColor: 'rgba(112, 148, 198,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 2,
                pointHitRadius: 10,
                data: INpointData
            },
            {
                label: 'OUT',
                backgroundColor: 'rgba(255,99,132,0.4)',
                pointBorderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 2,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(255,99,132,1)',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 2,
                pointHitRadius: 10,
                data: OUTpointData
            }
        ]
    }

    const scatterOptions = {
        maintainAspectRatio: true,
        aspectRatio: 1,
        scales: {
            xAxes: [{
                ticks: {
                    userCallback: function(label, index, labels) {
                        const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']
                        return days[label%7];
                    }
                 }
            }],
            yAxes: [{
                ticks: {
                    userCallback: function(label, index, labels) {
                        return new Date(label * 1000).toISOString().substr(11, 8);
                    },
                    stepSize: 3600
                 }
            }]
         },

    }
    return (
        <Card className={classes.card}>
            <Grid container direction='column' >
                <Typography variant={'h4'} color='textSecondary'>PEOPLE DENSITY</Typography>
                <Grid container direction='row'justify={'center'}>
                    <Scatter
                        width={'100%'}
                        height={'100%'}
                        ref={chartReference}
                        data={scatterData}
                        options={scatterOptions}
                    />
                </Grid>
            </Grid>

        </Card>
    )
}

export default PeopleScatter