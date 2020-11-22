import { Drawer, ListItem, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import MultilineChartIcon from '@material-ui/icons/MultilineChart';
import VideocamIcon from '@material-ui/icons/Videocam';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    dashboardText: {
        marginLeft: '1rem'
    },
    liveFeedText: {
        marginLeft: '1rem'
    }
})
 const MyDrawer = () => {
    const history = useHistory();
    const classes = useStyles();

    const handleGoToDashboard = () => {
        history.push('/dashboard');
    
    }
    const handleGoToLiveFeed = () => {
        history.push('/liveFeed');
    }

    return (
        <Drawer variant="permanent">
            <ListItem button onClick={handleGoToDashboard}>
                <MultilineChartIcon /><Typography variant ='h4' className={classes.dashboardText} > Dashboard </Typography>
            </ListItem>
            <ListItem button onClick={handleGoToLiveFeed}>
                <VideocamIcon /> <Typography variant ='h4' className={classes.liveFeedText} > Live Feed </Typography>
            </ListItem>
        </Drawer>
        )
}
export default MyDrawer