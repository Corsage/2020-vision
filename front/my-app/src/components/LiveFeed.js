import { Button, Card, Container, Grid, makeStyles, LinearProgress, Typography } from '@material-ui/core'
import React from 'react'

// socket setup
const io = require('socket.io-client');
const ENDPOINT = "http://52.6.197.90:8080";
const socket = io(ENDPOINT);

const useStyles = makeStyles({
    root: {
      width: '100%',
    },
  });
  
const LiveFeed = () => {

    // setting up style-classes
    const classes = useStyles();

    const [progress, setProgress] = React.useState(0);
    const [responseImageStream, setImageStream] = React.useState('');
    const [responseStoreOccupancy, setStoreOccupancy] = React.useState(0);

    // React on effect hook (component mount)

    // stuff that happens upon initial render
    // add subsequent re-renders
    React.useEffect(() => {

        // used for progress bar...animation till required
        const timer = setInterval(() => {
        setProgress((oldProgress) => {
            let threshold = 20;
            let percentage = (responseStoreOccupancy/threshold) * 100;
            return Math.min(percentage, 100);
        });
        }, 500);
  
        return () => {
            // stuff that happens when component unmounts
            clearInterval(timer);
        };
    }, []);

    React.useEffect(() => {
        socket.on("connect", () => {
            console.log("connected");
        })

        //socket.emit("ocv_image", "test");
        
        socket.on("ocv_image", data => {
            setImageStream(data.image);
            setStoreOccupancy(data.occupancy);
            setProgress();
            console.log("receive-text: " + data.occupancy);
        });
        return () => {
            socket.disconnect();
        }
    }, []);

    // layout UI using grid and cards
    return (
        <Grid container direction='column' style={{ paddingLeft: '10rem', paddingRight: '1rem', paddingTop: '3rem' }}>

            <Grid item md={10} style={{ paddingRight: '0.5rem', paddingBottom: '2.0rem'}}>
                    <Card style={{height: '40rem'}}>
                        <img src = {responseImageStream} alt = "waiting for stream..."/>
                    </Card>
            </Grid>

            <Grid item md={10} style={{ paddingRight: '0.5rem' }}>
                    <Card>
                        <center><Typography> {responseStoreOccupancy} people </Typography></center>
                    </Card>
                     
            </Grid>

            <Grid item md={10} style={{ paddingRight: '0.5rem', paddingTop:'2.0rem' }}>
                    <div className={classes.root}>
                        <LinearProgress variant="determinate" value={progress} />
                        <center><Typography>20% of store capacity</Typography></center>
                    </div>
            </Grid>
        </Grid>
    )
}

export default LiveFeed