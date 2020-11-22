
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
    const chartReference = React.createRef()
    const scatterData = {
        labels: ['Scatter'],
        datasets: [
            {
                label: 'IN',
                backgroundColor: 'rgba(112,148,198,0.4)',
                pointBorderColor: 'rgba(112,148,198,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(112, 148, 198,1)',
                pointHoverBorderColor: 'rgba(112, 148, 198,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 2,
                pointHitRadius: 10,
                data: [
                    { x:0, y: 75 },
                    { x:1, y: 49 },
                    { x:2, y: 90 },
                    { x:3, y: 29 },
                    { x:4, y: 36 },
                    { x:5, y: 25 },
                    { x:6, y: 18 },
                ]
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