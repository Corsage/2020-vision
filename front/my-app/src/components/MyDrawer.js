import { Drawer, ListItem } from '@material-ui/core'
import React from 'react'
import MultilineChartIcon from '@material-ui/icons/MultilineChart';

 const MyDrawer = () => {
    
    return (
        <Drawer variant="permanent">
            <ListItem button>
                <MultilineChartIcon/>
            </ListItem>
        </Drawer>
        )
}
export default MyDrawer