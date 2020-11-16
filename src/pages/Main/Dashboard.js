import React from 'react'
import {withStyles, AppBar} from '@material-ui/core'
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import RoomItemMedia from '../../components/roomitemmedia/RoomItemMedia'
import RoomItem from '../../components/roomitem/RoomItem'
import {styles} from './styles'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
function Dashboard(props){
    const {classes}=props
    const {path}=props.match
    console.log("path", props)
    return (
        <React.Fragment>
            <Router>
            <AppBar component="div" color="default" position="static" elevation={0}
            >
                <Tabs value={0} textColor="inherit">
                <Link to={`${path}`}><Tab textColor="inherit" label="Search"/></Link>
                <Link to={`${path}/series`}><Tab textColor="inherit" label="Series" /></Link>
                <Link to={`${path}/featured`}><Tab textColor="inherit" label="Featured" /></Link>
                <Link to={`${path}/videos`}><Tab textColor="inherit" label="Videos" /></Link>
                </Tabs>
            </AppBar>
            <main className={classes.main}>
                <Switch>
                    <Route path={`${path}`} exact component={RoomItem} />
                    <Route path={`${path}/series`} exact component={RoomItemMedia} />
                </Switch>
            </main>
            </Router>
            
        </React.Fragment>
    )
}
export default withStyles(styles)(Dashboard)