import { Drawer, ListItem } from '@material-ui/core'
import React from 'react'
import MultilineChartIcon from '@material-ui/icons/MultilineChart';
import { useHistory } from "react-router-dom";
 const MyDrawer = () => {
    const history = useHistory();


    const handleGoToDashboard = () => {
        history.push('/dashboard');
    }

    return (
        <Drawer variant="permanent">
            <ListItem button onClick={handleGoToDashboard}>
                <MultilineChartIcon />
            </ListItem>
        </Drawer>
        )
}
export default MyDrawer