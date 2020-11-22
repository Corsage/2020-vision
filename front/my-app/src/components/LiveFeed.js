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

import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockIcon from "@material-ui/icons/Lock";

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
    <div>
      {responseImageStream ? (
        <Container
          style={{
            display: "flex",
            background: "#eae8f3",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
            maxWidth: "99999px",
            paddingLeft: '156px',
            flexDirection: "column",
          }}
        >
          <Container style={{ width: "75%", maxWidth: "910px" }}>
            <Grid container>
              <Grid
                item
                xs={8}
                style={{
                  display: "flex",
                  padding: "2em",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <img
                  style={{ width: "100%" }}
                  src={responseImageStream}
                  alt="waiting for stream..."
                />

                <LinearProgress
                  variant="determinate"
                  style={{
                    marginTop: "1.5em",
                    width: "100%",
                  }}
                  value={progress}
                />
                <Typography align="center" variant="h4" style={{ margin: 0 }}>
                  {progress}% capacity filled.
                </Typography>
              </Grid>
              <Grid item xs={4} style={{ padding: "2em" }}>
                <Card style={{ width: "75%", padding: "2em" }}>
                  <Typography align="center" variant="h3">
                    Door status:
                  </Typography>
                  <center>
                    {responseStoreOccupancy > threshold ? (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <LockIcon
                          style={{ height: "40%", marginTop: "1rem" }}
                        />
                        <Typography align="center" variant="p">
                          Threshold: {threshold} people
                        </Typography>
                      </div>
                    ) : (
                      <LockOpenIcon
                        style={{ height: "40%", marginTop: "1rem" }}
                      />
                    )}
                  </center>
                </Card>
                <Card
                  style={{ width: "75%", padding: "2em", marginTop: "2em" }}
                >
                  <Typography align="center" variant="h3">
                    Building is{" "}
                    {responseStoreOccupancy > threshold ? (
                      <span
                        style={{
                          color: "rgba(255,99,132,1)",
                          fontWeight: "bold",
                        }}
                      >
                        over
                      </span>
                    ) : (
                      <span
                        style={{
                          color: "rgba(112, 148, 198, 1)",
                          fontWeight: "bold",
                        }}
                      >
                        under
                      </span>
                    )}{" "}
                    capacity.
                  </Typography>
                </Card>

                <Card
                  style={{ width: "75%", padding: "2em", marginTop: "2em" }}
                >
                  <Typography align="center" variant="h3">
                    People within store:
                  </Typography>

                  <Typography
                    align="center"
                    variant="h2"
                    style={{ fontWeight: "bold" }}
                  >
                    {responseStoreOccupancy}
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Container>
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
            flexDirection: "column",
          }}
        >
          <CircularProgress
            style={{ width: "5rem", height: "auto", color: "#5923b8" }}
          />
          <h2 style={{ color: "#464e56" }}>Waiting on livestream...</h2>
        </Container>
      )}
    </div>
  );
};

export default LiveFeed;
