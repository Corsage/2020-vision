import React from "react";
import {
  Container,
  Card,
  Typography,
  Grid,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import dab from "../assets/images/dab.svg";

const Login = () => {
  const history = useHistory();

  const handleGoToDashboard = () => {
    history.push("/dashboard");
  };

  return (
    <Container
      style={{
        display: "flex",
        background: "#eae8f3",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Card style={{ width: "75%" }}>
        <Grid container>
          <Grid item xs={6} style={{ background: "#ffffff", padding: "2rem" }}>
            <h1 style={{ color: "#464e56" }}>Log in.</h1>
            <p style={{ color: "#bac1c6" }}>
              Login in your credentials to view store occupancy data in
              real-time.
              <form noValidate autoComplete="off">
                <TextField
                  style={{ marginTop: "1rem", width: "100%" }}
                  id="email"
                  label="Your e-mail"
                  variant="outlined"
                />
                <TextField
                  style={{ marginTop: "1rem", width: "100%" }}
                  id="password"
                  label="Password"
                  variant="outlined"
                />
                <FormControlLabel
                  style={{ marginTop: "1rem", width: "100%" }}
                  control={<Checkbox name="remember" />}
                  label="Keep me logged in"
                />

                <Button
                  style={{
                    marginTop: "1rem",
                    width: "100%",
                    background: "#5923b8",
                    color: "#ffffff",
                    fontWeight: "bold",
                  }}
                  variant="contained"
                  onClick={handleGoToDashboard}
                >
                  Log in
                </Button>
              </form>
            </p>
          </Grid>
          <Grid
            item
            xs={6}
            style={{
              background: "linear-gradient(to right, #5923b8, #6730d5)",
              padding: "2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img style={{ width: "60%" }} src={dab} />

            <h2 style={{ color: "#ffffff", marginBottom: 0 }}>
              Protect Small Businesses
            </h2>
            <p
              style={{
                color: "#ffffff",
                opacity: 0.8,
                marginTop: "1rem",
                textAlign: "center",
              }}
            >
              A data driven real-time solution that protects frontline workers
              and helps prepare small businesses against COVID-19.
            </p>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};
export default Login;
