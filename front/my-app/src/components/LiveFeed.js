import { Button, Card, Container, Grid, makeStyles, LinearProgress } from '@material-ui/core'
import React from 'react'

import socketIOClient from "socket.io-client";
const ENDPOINT = "http://100.27.40.134:8080";

const useStyles = makeStyles({
    root: {
      width: '100%',
    },
  });
  
const LiveFeed = () => {

    // setting up style-classes
    const classes = useStyles();

    const [progress, setProgress] = React.useState(0);
    const [response, setResponse] = React.useState("");

    // React on effect hook (component mount)
    React.useEffect(() => {
        
        // socket.io setup
        const socket = socketIOClient(ENDPOINT);

        
        socket.on("ocv_image", data => {
          setResponse(data);
        });

        // used for progress bar...animation till required
        const timer = setInterval(() => {
        setProgress((oldProgress) => {
            return Math.min(20, 100);
        });
        }, 500);
  
        return () => {
            clearInterval(timer);
            socket.disconnect();
        };
    }, []);

    // layout UI using grid and cards
    return (
        <Grid container direction='column' style={{ paddingLeft: '10rem', paddingRight: '1rem', paddingTop: '3rem' }}>

            <Grid item md={10} style={{ paddingRight: '0.5rem', paddingBottom: '2.0rem'}}>
                    <Card style={{height: '40rem'}}>
                        <img src = {{response}}/>
                    </Card>
            </Grid>

            <Grid item md={10} style={{ paddingRight: '0.5rem' }}>
                    <Card>
                        <center><text>Currently: 5 people in store</text></center>
                    </Card>
            </Grid>

            <Grid item md={10} style={{ paddingRight: '0.5rem', paddingTop:'2.0rem' }}>
                    <div className={classes.root}>
                        <LinearProgress variant="determinate" value={progress} />
                        <center><text>20% of store capacity</text></center>
                    </div>
            </Grid>
        </Grid>
    )
}

export default LiveFeed