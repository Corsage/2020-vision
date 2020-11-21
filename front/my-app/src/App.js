import logo from './logo.svg';
import './App.css';
import React from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import defaultTheme from './defaultTheme'
import DashboardOverview from './components/DashboardOverview'
import MyDrawer from './components/MyDrawer';
const useStyles = makeStyles((theme) => ({
  app: {
    height: '100%'
  }
}))
function App() {
  const theme = createMuiTheme(defaultTheme);
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.app}>
        <MyDrawer/>
        <Router>
          <Switch>
            <Route path ='/dashboard' component={DashboardOverview}/>
          </Switch>
        </Router>
        
      </div>
  </ThemeProvider>
  );
}

export default App;
