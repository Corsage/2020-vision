import {
  Button,
  Card,
  Container,
  Grid,
  makeStyles,
  LinearProgress,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import Lock from "../images/lock.png";
import Unlock from "../images/unlock.png";
import React from "react";

// socket setup
const io = require("socket.io-client");
const ENDPOINT = "http://52.6.197.90:8080";
const socket = io(ENDPOINT);

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  stream: {
    width: "33rem",
    position: "relative",
    marginTop: "1rem",
  },
  lock: {
    width: "7rem",
    height: "7rem",
    marginLeft: "42rem",
  },
});

const LiveFeed = () => {
  // setting up style-classes
  const classes = useStyles();

  const [progress, setProgress] = React.useState(0);
  const [responseImageStream, setImageStream] = React.useState("");
  const [responseStoreOccupancy, setStoreOccupancy] = React.useState(0);

  const threshold = 8;
  // React on effect hook (component mount)

  // stuff that happens upon initial render
  // add subsequent re-renders
  React.useEffect(() => {
    setProgress(Math.min((responseStoreOccupancy / threshold) * 100, 100));
  }, [responseStoreOccupancy]);

  React.useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
    });

    //socket.emit("ocv_image", "test");

    socket.on("ocv_image", (data) => {
      setImageStream(data.image);
      setStoreOccupancy(data.occupancy);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  // layout UI using grid and cards
  return (
    <Grid
      container
      direction="column"
      style={{ paddingLeft: "10rem", paddingRight: "1rem", paddingTop: "3rem", background: "#eae8f3"}}
    >
      {responseImageStream ? (
        <div>
          <Grid
            item
            md={10}
            style={{ paddingRight: "0.5rem", paddingBottom: "2.0rem" }}
          >
            <Card
              style={{
                height: "27rem",
                width: "fit-content",
                padding: "0.5rem",
                marginLeft: "30%",
              }}
            >
              <img
                className={classes.stream}
                src={responseImageStream}
                alt="waiting for stream..."
              />
            </Card>
          </Grid>

          <Grid
            item
            md={10}
            style={{ paddingRight: "0.5rem", paddingTop: "2.0rem" }}
          >
            <div className={classes.root}>
              <LinearProgress variant="determinate" value={progress} />
              <center>
                <Typography>{progress}% of store capacity</Typography>
              </center>
            </div>
          </Grid>
          <br />
          <br />
          <Grid item md={10} style={{ paddingRight: "0.5rem" }}>
            {responseStoreOccupancy > threshold ? (
              <div>
                <Card style={{ backgroundColor: "darkred", color: "white" }}>
                  <center>
                    <Typography style={{ fontWeight: "bold" }}>
                      {responseStoreOccupancy} people <br />
                      Building is over capacity.
                    </Typography>
                  </center>
                </Card>
                <br />
                <br />
                <img className={classes.lock} src={Lock} />
              </div>
            ) : (
              <div>
                <Card>
                  <center>
                    <Typography>
                      {responseStoreOccupancy} people <br />
                      Building is within capacity.
                    </Typography>
                  </center>
                </Card>
                <br />
                <br />
                <img className={classes.lock} src={Unlock} />
              </div>
            )}
          </Grid>
        </div>
      ) : (
        <Container
          style={{
            display: "flex",
            position: "fixed",
            top: 0,
            left: 0,
            background: "#eae8f3",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
            maxWidth: "99999px",
            flexDirection: 'column',
          }}
        >
          <CircularProgress style={{ width: "5rem", height: 'auto', color: "#5923b8" }} />
          <h2 style={{ color: "#464e56" }}>Waiting on livestream...</h2>
        </Container>
      )}
    </Grid>
  );
};

export default LiveFeed;
