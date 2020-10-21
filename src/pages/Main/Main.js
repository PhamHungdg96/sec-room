import React from 'react'
import {withStyles, AppBar} from '@material-ui/core'
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import RoomItemMedia from '../../components/roomitemmedia/RoomItemMedia'
import {styles} from './styles'
function Main(props){
    const {classes}=props
    return (
        <React.Fragment>
            <AppBar component="div" color="default" position="static" elevation={0}
            >
                <Tabs value={0} textColor="inherit">
                <Tab textColor="inherit" label="Search" />
                <Tab textColor="inherit" label="Series" />
                <Tab textColor="inherit" label="Featured" />
                <Tab textColor="inherit" label="Videos" />
                </Tabs>
            </AppBar>
            <main className={classes.main}>
                <RoomItemMedia/>
            </main>
            
            
        </React.Fragment>
    )
}
export default withStyles(styles)(Main)