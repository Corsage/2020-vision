import { Drawer, ListItem } from '@material-ui/core'
import React from 'react'
import MultilineChartIcon from '@material-ui/icons/MultilineChart';
import VideocamIcon from '@material-ui/icons/Videocam';
import { useHistory } from "react-router-dom";
 const MyDrawer = () => {
    const history = useHistory();


    const handleGoToDashboard = () => {
        history.push('/dashboard');
    
    }
    const handleGoToLiveFeed = () => {
        history.push('/liveFeed');
    }

    return (
        <Drawer variant="permanent">
            <ListItem button onClick={handleGoToDashboard}>
                <MultilineChartIcon />
            </ListItem>
            <ListItem button onClick={handleGoToLiveFeed}>
                <VideocamIcon />
            </ListItem>
        </Drawer>
        )
}
export default MyDrawer