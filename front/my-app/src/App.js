import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import defaultTheme from "./defaultTheme";
import DashboardOverview from "./components/DashboardOverview";
import LiveFeed from "./components/LiveFeed";
import MyDrawer from "./components/MyDrawer";
import Login from "./components/Login";

const useStyles = makeStyles((theme) => ({
  app: {
    height: "100%",
  },
}));
function App() {
  const theme = createMuiTheme(defaultTheme);
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.app}>
        <Router>
          <Switch>
            <Route exact path="/login" component={null} />
            <Route path="/" component={MyDrawer} />
          </Switch>
          <Switch>
            <Route path="/dashboard" component={DashboardOverview} />
            <Route path="/liveFeed" component={LiveFeed} />
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
